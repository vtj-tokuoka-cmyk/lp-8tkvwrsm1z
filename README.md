# 澤村友里 LP — 更新のしかた

公開URL： https://vtj-tokuoka-cmyk.github.io/lp-8tkvwrsm1z/

---

## いちばん大事なこと

**内容の更新は `data.js` だけを書き換えればOKです。** HTMLは触らなくて大丈夫です。

`data.js` をメモ帳やVS Codeで開いて、該当箇所を書き換えて保存 → GitHubにpush → 1〜2分で反映されます。

---

## ファイルの役割

| ファイル | 中身 |
|---|---|
| **data.js** | 講演実績・パッケージ・略歴・SNS・動画・ブログ・写真 など**全部の内容**。ここだけ触る |
| index.html | トップページ |
| lecture.html | 講演実績ページ |
| blog.html | ブログ（一覧と記事の両方） |
| gallery.html | フォトギャラリー |
| style.css | 色・レイアウト |
| app.js | 言語切替、ヘッダー・フッターの共通部分 |
| parts.js | 各ページ共通のカード表示部品 |
| sns.html | SNS・動画ページ |
| form.js | お問い合わせフォームの動き |
| フォーム受信.gs | Apps Scriptに貼るコード（フォームの受信側） |
| img/ | 写真 |

---

## よくある更新

### 講演実績を追加する

`data.js` の `LECTURES` に1件足します。上にある既存の行をコピーして書き換えるのが簡単です。

```js
{
  date: "2026-12-03", kind: "講演", upcoming: true,
  title: { ja: "タイトル", en: "Title", vi: "Tiêu đề" },
  host:  { ja: "主催者", en: "Host", vi: "Đơn vị tổ chức" },
  venue: { ja: "会場", en: "Venue", vi: "Địa điểm" },
  audience: { ja: "対象 約100名", en: "Approx. 100", vi: "Khoảng 100" },
  url: ""
},
```

- `kind` は `"講演"` `"MC"` `"パネル"` `"研修"` `"取材"` から選びます
- `upcoming: true` にすると「開催予定」に、`false` で「これまでの登壇」に並びます
- **英語・ベトナム語がまだなら省略してOK**です。`title: "タイトル"` と書けば全言語で日本語が出ます

### ブログを書く

`data.js` の `POSTS` に1件足します。

- `slug` は記事のURLになる英数字（他と重複しないように）
- `cat` は `"報告"` `"お知らせ"` `"コラム"` から選びます
- `body` は `<p>本文</p>` で段落、`<h3>小見出し</h3>` で見出し

### 写真を追加する

1. 画像を `img/` フォルダに入れる（横1200〜1800pxくらいに縮小しておくと軽い）
2. `data.js` の `PHOTOS` に1行足す

```js
{ src: "img/新しい写真.jpg", cat: "event", pos: "50% 30%",
  caption: { ja: "説明", en: "Caption", vi: "Chú thích" } },
```

`cat` は `portrait` / `event` / `vietnam` / `company` から選びます。

### 写真集を追加する

`data.js` の `ALBUMS` に足します。`url` にGoogleフォトやInstagramのリンクを入れると「写真集を見る」ボタンからそこへ飛びます。空だと「準備中」と表示されます。

### サンプルの注意書きを消す

実際のデータを入れ終わったら、`data.js` のいちばん上を

```js
const SAMPLE_MODE = false;
```

に変えてください。黄色い「※ 表示中のデータはサンプルです」の帯が消えます。

---

## お問い合わせフォームを動かす

いまは **`FORM_ENDPOINT` が空なので、送信ボタンでメールソフトが開く** 動作になっています。
フォームから直接受信したい場合は次の手順です。

1. Googleドライブで「新規 → その他 → Google Apps Script」
2. `フォーム受信.gs` の中身を全部コピーして貼り付け
3. 冒頭の `SETTINGS` を書き換える
   - `MAIL_TO` … 通知の届くメールアドレス
   - `SHEET_ID` … 記録を残したいスプレッドシートのID（不要なら空のまま）
4. 「デプロイ → 新しいデプロイ → ウェブアプリ」
   - 実行者：**自分**
   - アクセスできるユーザー：**全員** ← ここ重要
5. 出てきたURLを `data.js` の `FORM_ENDPOINT` に貼る

送信者への自動返信も、送信者が見ていた言語（日本語/英語/ベトナム語）で自動的に送られます。

> Apps Scriptのコードを直したときは「デプロイの管理 → 編集 → バージョン：新しいバージョン → デプロイ」で更新してください。URLは変わりません。

---

## 公開の更新（GitHub）

`代表LP` フォルダで次を実行します。

```bash
git add -A && git commit -m "更新内容" && git push
```

1〜2分で https://vtj-tokuoka-cmyk.github.io/lp-8tkvwrsm1z/ に反映されます。

---

## 検索避けについて

- 全ページに `noindex, nofollow` を入れ、`robots.txt` で全クローラーを拒否しています
- リポジトリ名をランダムな文字列にして、URLを推測できないようにしています
- **URLを知っている人だけが見られる**状態です（GitHub無料プランのため、リポジトリ自体は公開設定）

---

## ローカルで確認する

`代表LP` フォルダで次を実行し、ブラウザで http://localhost:8783 を開きます。

```bash
python -m http.server 8783
```

※ `index.html` をダブルクリックで開くと、ブラウザの制限で `data.js` が読み込めず真っ白になります。必ず上のコマンドで確認してください。

---

## ページ構成

| ページ | 中身 |
|---|---|
| index.html | トップ（12セクション） |
| lecture.html | 講演依頼・実績（テーマ／パッケージ／流れ／講師情報／予定／実績） |
| sns.html | SNS・動画（最新動画の再生＋各SNSの紹介） |
| blog.html | ブログ（一覧と記事） |
| gallery.html | フォトギャラリー（写真＋写真集） |

---

## 追加した項目の更新方法

すべて `data.js` の中にあります。

### 講演テーマを変える（TOPICS）

`catch` がいちばん目立つキャッチコピー、`title` がテーマ名、`forwhom` が「こんな方へ」の行です。

```js
{
  no: "05",
  catch:   { ja: "いちばん伝えたい一言" },
  title:   { ja: "テーマ名" },
  body:    { ja: "説明文" },
  forwhom: { ja: "こんな方へ向けた内容か" },
  tags:    { ja: ["タグ1", "タグ2"] }
},
```

### 講演パッケージ（PACKAGES）

`price` を空にしておくと「個別お見積り」と表示されます。金額を入れるとそのまま出ます。
`featured: true` にしたパッケージが赤枠＋「いちばん多いご依頼」バッジで強調されます（1つだけにしてください）。

### ご依頼の流れ（STEPS）

ステップを増減したいときは、この配列に足す／減らすだけです。`note` は右下の小さいバッジです。

### 略歴・講師情報（PROFILE_SPEC / SPEAKER_SPEC）

`{ label: 見出し, value: 中身 }` を並べるだけの表です。行を足せばそのまま増えます。

### メディア出演（MEDIA）

`kind` は「テレビ」「新聞」「雑誌」「Web」「ラジオ」「podcast」など自由に書けます。
`url` を入れると「サイトを見る ↗」のリンクが出ます。

---

## SNSと動画について

### 最新動画は自動で更新されます

`data.js` の `YT_CHANNEL_ID` にYouTubeのチャンネルIDを入れてあります。

```js
const YT_CHANNEL_ID = "UCYE6NspnrKTGlC8osbHdvaQ";
```

これを使って「チャンネルのアップロード一覧」を埋め込んでいるので、**新しい動画を投稿すればHPの再生画面も自動で最新になります。手作業は不要です。**

チャンネルIDは、YouTubeのチャンネルページ →「共有」→「チャンネルIDをコピー」で取得できます。

### ピックアップ動画（VIDEOS）

とくに見てほしい回だけ、動画IDを入れておく欄です。

```js
{ id: "MFX3ySZ9Z54", date: "2026-09-04", title: { ja: "タイトル" } },
```

動画IDは `https://www.youtube.com/watch?v=MFX3ySZ9Z54` の `v=` の後ろの部分です。
サムネイルを押すと、上の再生画面がその動画に切り替わります。

### SNSアカウント（SNS_ACCOUNTS）

ここに書いたアカウントが、**ヘッダー右上のアイコン・フッター・SNS紹介ページ**の3か所に自動で出ます。
使わないアカウントは、その項目ごと消してください。

`key` は `youtube` / `instagram` / `tiktok` / `facebook` のいずれかにしてください（アイコンと色がこれで決まります）。

現在の登録内容：

| SNS | アカウント |
|---|---|
| YouTube | @yurisawamurachannel（ご本人のチャンネル） |
| Instagram | @yuri_jpvn |
| TikTok | @kodawari.jp（求人サイト「こだわり」の公式アカウント） |
| Facebook | vietnamtrading（会社の公式ページ） |
