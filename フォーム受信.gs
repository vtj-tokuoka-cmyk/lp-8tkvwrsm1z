/**
 * 澤村友里LP  お問い合わせフォーム受信スクリプト
 * ---------------------------------------------------------------
 * 【使い方】
 *  1. Googleドライブで「新規 → その他 → Google Apps Script」を開く
 *  2. このファイルの中身を全部コピーして貼り付け
 *  3. 下の SETTINGS を書き換える（宛先メールなど）
 *  4. 画面右上「デプロイ」→「新しいデプロイ」
 *       種類  : ウェブアプリ
 *       実行者: 自分
 *       アクセス: 全員        ← ここを「全員」にしないと受信できません
 *  5. 表示された「ウェブアプリのURL」をコピーして、
 *     data.js の FORM_ENDPOINT に貼り付ける
 *
 *  ※ コードを直したら、必ず「デプロイの管理 → 編集(鉛筆) → バージョン:新しいバージョン
 *     → デプロイ」で更新してください。URLは変わりません。
 */

var SETTINGS = {
  // 通知メールの宛先（カンマ区切りで複数可）
  MAIL_TO: 'info@vietnamtrading.co.jp',

  // 記録用スプレッドシートのID。
  // 空にすると保存せずメール通知だけ行います。
  // スプレッドシートのURL /d/ と /edit の間の文字列がIDです。
  SHEET_ID: '',
  SHEET_NAME: 'お問い合わせ',

  // 送信者へ自動返信するか
  AUTO_REPLY: true,
  REPLY_FROM_NAME: '澤村友里 / ベトナムトレーディング株式会社'
};

var FIELDS = [
  ['type',      'ご依頼の種類'],
  ['name',      'お名前'],
  ['company',   '会社・団体名'],
  ['email',     'メールアドレス'],
  ['tel',       'お電話番号'],
  ['eventdate', '開催予定日'],
  ['place',     '開催場所'],
  ['message',   'ご相談内容'],
  ['lang',      '表示言語'],
  ['page',      '送信元ページ']
];

function doPost(e) {
  try {
    var data = parseBody_(e);
    if (!data.name || !data.email) return json_({ ok: false, error: 'missing' });

    saveToSheet_(data);
    notify_(data);
    if (SETTINGS.AUTO_REPLY) autoReply_(data);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

/** 動作確認用。ブラウザでURLを開くと OK と出れば公開できています */
function doGet() {
  return ContentService.createTextOutput('OK');
}

/* ---------- 受信データの読み取り ---------- */
function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (err) { }
  }
  return (e && e.parameter) ? e.parameter : {};
}

/* ---------- スプレッドシートに記録 ---------- */
function saveToSheet_(d) {
  if (!SETTINGS.SHEET_ID) return;
  var ss = SpreadsheetApp.openById(SETTINGS.SHEET_ID);
  var sh = ss.getSheetByName(SETTINGS.SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SETTINGS.SHEET_NAME);
    sh.appendRow(['受信日時'].concat(FIELDS.map(function (f) { return f[1]; })));
    sh.setFrozenRows(1);
  }
  var row = [new Date()];
  FIELDS.forEach(function (f) { row.push(d[f[0]] || ''); });
  sh.appendRow(row);
}

/* ---------- 担当者へ通知 ---------- */
function notify_(d) {
  var lines = FIELDS.map(function (f) {
    return '【' + f[1] + '】\n' + (d[f[0]] || '（未入力）');
  });
  var body = 'ホームページのお問い合わせフォームから送信がありました。\n\n'
    + lines.join('\n\n')
    + '\n\n--------------------------------\n受信日時: '
    + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm');

  MailApp.sendEmail({
    to: SETTINGS.MAIL_TO,
    subject: '[HP] ' + (d.type || 'お問い合わせ') + ' / ' + (d.name || ''),
    body: body,
    replyTo: d.email || undefined
  });
}

/* ---------- 送信者へ自動返信 ---------- */
function autoReply_(d) {
  var lang = d.lang || 'ja';
  var t = {
    ja: {
      sub: '【自動返信】お問い合わせありがとうございます',
      body: d.name + ' 様\n\n'
        + 'このたびはお問い合わせいただき、誠にありがとうございます。\n'
        + '以下の内容で承りました。2〜3営業日以内に、担当よりご返信いたします。\n\n'
        + '【ご依頼の種類】' + (d.type || '') + '\n'
        + '【ご相談内容】\n' + (d.message || '') + '\n\n'
        + '--------------------------------\n'
        + SETTINGS.REPLY_FROM_NAME + '\n'
        + 'TEL (+81) 096-234-8770\n'
        + 'https://www.vietnamtrading.co.jp/'
    },
    en: {
      sub: '[Auto-reply] Thank you for your enquiry',
      body: 'Dear ' + d.name + ',\n\n'
        + 'Thank you very much for getting in touch. We have received your enquiry below\n'
        + 'and will reply within two to three business days.\n\n'
        + '[Type] ' + (d.type || '') + '\n'
        + '[Message]\n' + (d.message || '') + '\n\n'
        + '--------------------------------\n'
        + 'Yuri Sawamura / Vietnam Trading Co., Ltd.\n'
        + 'TEL (+81) 96-234-8770\n'
        + 'https://www.vietnamtrading.co.jp/'
    },
    vi: {
      sub: '[Tự động] Cảm ơn bạn đã liên hệ',
      body: 'Kính gửi ' + d.name + ',\n\n'
        + 'Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi đã nhận được nội dung dưới đây\n'
        + 'và sẽ phản hồi trong vòng 2–3 ngày làm việc.\n\n'
        + '[Loại yêu cầu] ' + (d.type || '') + '\n'
        + '[Nội dung]\n' + (d.message || '') + '\n\n'
        + '--------------------------------\n'
        + 'Yuri Sawamura / Công ty CP Việt Nam Trading\n'
        + 'TEL (+81) 96-234-8770\n'
        + 'https://www.vietnamtrading.co.jp/'
    }
  }[lang] || null;
  if (!t) return;

  MailApp.sendEmail({ to: d.email, subject: t.sub, body: t.body, name: SETTINGS.REPLY_FROM_NAME });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
