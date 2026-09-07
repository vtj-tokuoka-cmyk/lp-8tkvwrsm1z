/* =========================================================================
   澤村友里 LP  コンテンツデータ
   ------------------------------------------------------------------------
   このファイルだけを書き換えれば、全ページの内容が更新されます。
   HTMLは触らなくて大丈夫です。

   ◆ 多言語の書き方
     {ja:"日本語", en:"English", vi:"Tiếng Việt"} と書くと言語切替に対応します。
     en や vi を省略すると、自動的に日本語が表示されます。
     ただの "文字列" だけを書いた場合は、どの言語でもそのまま表示されます。
   ========================================================================= */

/* ▼ サンプル表示の切り替え
   実際のデータを入れ終わったら false にしてください。
   false にすると「サンプルです」の注意書きが消えます。            */
const SAMPLE_MODE = true;

/* ▼ お問い合わせフォームの送信先（Google Apps Script のウェブアプリURL）
   フォーム受信.gs をデプロイして得たURLをここに貼ってください。
   空のままだと、送信ボタンでメールソフトが開く動作になります。      */
const FORM_ENDPOINT = "";

/* ▼ 問い合わせが届くメールアドレス（FORM_ENDPOINT が空のときの宛先） */
const CONTACT_MAIL = "info@vietnamtrading.co.jp";

/* ▼ 電話番号 */
const CONTACT_TEL = "+81962348770";
const CONTACT_TEL_LABEL = "(+81) 096-234-8770";


/* =========================================================================
   1. 講演テーマ — 「こんなテーマで話せます」
   ========================================================================= */
const TOPICS = [
  {
    no: "01",
    catch: { ja: "なぜ、彼らは黙って辞めるのか。",
             en: "Why do they quit without a word?",
             vi: "Vì sao họ lặng lẽ nghỉ việc?" },
    title: {
      ja: "外国人材の雇用と定着",
      en: "Hiring and Retaining Foreign Talent",
      vi: "Tuyển dụng và giữ chân nhân lực nước ngoài"
    },
    body: {
      ja: "技能実習・特定技能の受入れ実務から、辞めない職場のつくり方まで。受入れの現場を支えてきた視点で、きれいごとではない実務をお話しします。",
      en: "From the practicalities of accepting technical intern and specified skilled workers, to building workplaces people don't leave. An honest, on-the-ground account — not the polished version.",
      vi: "Từ thực tiễn tiếp nhận thực tập sinh và lao động kỹ năng đặc định, đến cách xây dựng nơi làm việc mà nhân viên không rời bỏ."
    },
    forwhom: { ja: "外国人材を受け入れている・これから受け入れる企業の経営者、人事、現場管理職の方へ",
               en: "For executives, HR and frontline managers at companies employing foreign workers",
               vi: "Dành cho lãnh đạo, nhân sự và quản lý hiện trường tại doanh nghiệp sử dụng lao động nước ngoài" },
    tags: { ja: ["企業研修", "経営者向け", "業界団体"], en: ["Corporate", "Executives", "Industry bodies"], vi: ["Đào tạo doanh nghiệp", "Lãnh đạo", "Hiệp hội"] }
  },
  {
    no: "02",
    catch: { ja: "ふたつの故郷を持つ、ということ。",
             en: "What it means to have two homelands.",
             vi: "Mang trong mình hai quê hương." },
    title: {
      ja: "日本一ベトナム人を理解している会社のつくり方",
      en: "Building Japan's Most Vietnam-Literate Company",
      vi: "Xây dựng công ty thấu hiểu người Việt nhất Nhật Bản"
    },
    body: {
      ja: "ベトナムに生まれ、日本で育った経営者だから見える、日越の文化のちがいと相互理解のヒント。現場で本当に起きていることをお伝えします。",
      en: "Cultural differences between Japan and Vietnam, seen through the eyes of someone born in one and raised in the other — and what really happens on the ground.",
      vi: "Sự khác biệt văn hóa Nhật – Việt qua góc nhìn của người sinh ra ở Việt Nam và lớn lên tại Nhật."
    },
    forwhom: { ja: "多国籍の職場づくりに悩む企業、ダイバーシティ研修をお考えの方へ",
               en: "For companies building multinational workplaces and planning diversity training",
               vi: "Dành cho doanh nghiệp xây dựng môi trường đa quốc gia, đào tạo đa dạng" },
    tags: { ja: ["企業研修", "多様性", "管理職向け"], en: ["Corporate", "Diversity", "Managers"], vi: ["Đào tạo", "Đa dạng", "Quản lý"] }
  },
  {
    no: "03",
    catch: { ja: "就職活動をせず、会社をつくった。",
             en: "I skipped job hunting and built a company.",
             vi: "Tôi không đi xin việc, tôi lập công ty." },
    title: {
      ja: "学生起業のリアル",
      en: "The Reality of Founding a Company as a Student",
      vi: "Thực tế của việc khởi nghiệp khi còn là sinh viên"
    },
    body: {
      ja: "大学在学中に学生でありながら創業し、いまは日越3法人を経営するまで。失敗も資金繰りも包み隠さず、これから挑戦する若者へ。",
      en: "From founding a company while still an undergraduate to running three entities across Japan and Vietnam. The failures and the cash-flow problems included.",
      vi: "Từ khởi nghiệp khi còn là sinh viên đến điều hành 3 pháp nhân. Kể cả thất bại và khó khăn tài chính."
    },
    forwhom: { ja: "高校・大学・専門学校、若手社員向けのキャリア研修に",
               en: "For high schools, universities, vocational colleges and early-career training",
               vi: "Dành cho trường phổ thông, đại học, cao đẳng và đào tạo nhân viên trẻ" },
    tags: { ja: ["学校", "大学", "若手向け"], en: ["Schools", "Universities", "Youth"], vi: ["Trường học", "Đại học", "Người trẻ"] }
  },
  {
    no: "04",
    catch: { ja: "隣に住む外国人は、もう「お客さん」ではない。",
             en: "Foreign residents are no longer guests.",
             vi: "Cư dân nước ngoài không còn là khách." },
    title: {
      ja: "多文化共生のまちづくり",
      en: "Building Multicultural Communities",
      vi: "Xây dựng cộng đồng đa văn hóa"
    },
    body: {
      ja: "外国人住民とともに生きる地域社会のあり方。行政・学校・地域の現場で起きている課題と、実際に効いた打ち手を共有します。",
      en: "What it takes for a community to live well alongside foreign residents — the real problems and what actually worked.",
      vi: "Cộng đồng chung sống cùng cư dân nước ngoài — vấn đề thực tế và giải pháp hiệu quả."
    },
    forwhom: { ja: "自治体、国際交流協会、学校、地域団体、社会福祉協議会の方へ",
               en: "For municipalities, international associations, schools and community organisations",
               vi: "Dành cho chính quyền, hiệp hội giao lưu quốc tế, trường học, đoàn thể" },
    tags: { ja: ["行政", "自治体", "地域団体"], en: ["Government", "Municipal", "Community"], vi: ["Chính quyền", "Địa phương", "Cộng đồng"] }
  }
];

/* =========================================================================
   2. 講演・出演の実績
   ------------------------------------------------------------------------
   date    : "2026-05-20" の形式（日付が未定なら "2026-05" でもOK）
   kind    : "講演" / "MC" / "パネル" / "研修" / "取材" のいずれか
   upcoming: true にすると「開催予定」に並びます
   url     : 告知ページなどがあれば。なければ ""
   ========================================================================= */
const LECTURES = [
  {
    date: "2026-11-14", kind: "講演", upcoming: true,
    title: { ja: "外国人材と共に働くということ 〜受入れ企業が最初に知るべき10のこと〜",
             en: "Working Alongside Foreign Talent: 10 Things Employers Should Know First",
             vi: "Làm việc cùng nhân lực nước ngoài: 10 điều doanh nghiệp cần biết trước tiên" },
    host:  { ja: "熊本県中小企業家同友会", en: "Kumamoto SME Owners' Association", vi: "Hiệp hội doanh nghiệp vừa và nhỏ Kumamoto" },
    venue: { ja: "熊本市 ／ 会場未定", en: "Kumamoto City / TBD", vi: "TP. Kumamoto / Chưa xác định" },
    audience: { ja: "経営者・人事担当者 約120名", en: "Approx. 120 executives and HR staff", vi: "Khoảng 120 lãnh đạo và nhân sự" },
    url: ""
  },
  {
    date: "2026-06-08", kind: "講演", upcoming: false,
    title: { ja: "日本一ベトナム人を理解している会社のつくり方",
             en: "Building Japan's Most Vietnam-Literate Company",
             vi: "Xây dựng công ty thấu hiểu người Việt nhất Nhật Bản" },
    host:  { ja: "九州経済フォーラム", en: "Kyushu Economic Forum", vi: "Diễn đàn Kinh tế Kyushu" },
    venue: { ja: "福岡市", en: "Fukuoka City", vi: "TP. Fukuoka" },
    audience: { ja: "経営者向け 約200名", en: "Approx. 200 business owners", vi: "Khoảng 200 doanh nhân" },
    url: ""
  },
  {
    date: "2026-03-22", kind: "MC", upcoming: false,
    title: { ja: "ベトナムフェスティバル熊本 2026 総合司会",
             en: "Vietnam Festival Kumamoto 2026 — Master of Ceremonies",
             vi: "Lễ hội Việt Nam Kumamoto 2026 — Dẫn chương trình" },
    host:  { ja: "熊本ベトナム友好協会", en: "Kumamoto–Vietnam Friendship Association", vi: "Hội hữu nghị Kumamoto – Việt Nam" },
    venue: { ja: "熊本城ホール", en: "Kumamoto Castle Hall", vi: "Kumamoto Castle Hall" },
    audience: { ja: "来場者 約3,000名", en: "Approx. 3,000 attendees", vi: "Khoảng 3.000 khách tham dự" },
    url: ""
  },
  {
    date: "2025-11-05", kind: "研修", upcoming: false,
    title: { ja: "現場の管理職のための やさしい日本語と伝え方",
             en: "Plain Japanese and Clear Communication for Frontline Managers",
             vi: "Tiếng Nhật đơn giản và cách truyền đạt cho quản lý hiện trường" },
    host:  { ja: "株式会社ヒライ", en: "Hirai Co., Ltd.", vi: "Công ty Hirai" },
    venue: { ja: "熊本市 ／ 本社研修室", en: "Kumamoto City / Head office", vi: "TP. Kumamoto / Trụ sở chính" },
    audience: { ja: "店舗管理者 約40名", en: "Approx. 40 store managers", vi: "Khoảng 40 quản lý cửa hàng" },
    url: ""
  },
  {
    date: "2025-09-17", kind: "パネル", upcoming: false,
    title: { ja: "多文化共生シンポジウム 「これからの地域と外国人住民」",
             en: "Multicultural Symposium: Communities and Foreign Residents",
             vi: "Hội thảo đa văn hóa: Cộng đồng và cư dân nước ngoài" },
    host:  { ja: "熊本県国際協会", en: "Kumamoto International Association", vi: "Hiệp hội Quốc tế Kumamoto" },
    venue: { ja: "熊本県立劇場", en: "Kumamoto Prefectural Theater", vi: "Nhà hát tỉnh Kumamoto" },
    audience: { ja: "自治体・地域団体 約150名", en: "Approx. 150 from local government and community groups", vi: "Khoảng 150 đại biểu chính quyền và đoàn thể" },
    url: ""
  },
  {
    date: "2025-06-11", kind: "講演", upcoming: false,
    title: { ja: "学生起業のリアル 〜大学3年で会社をつくった話〜",
             en: "The Reality of Student Entrepreneurship",
             vi: "Thực tế khởi nghiệp khi là sinh viên" },
    host:  { ja: "熊本県立大学", en: "Prefectural University of Kumamoto", vi: "Đại học tỉnh lập Kumamoto" },
    venue: { ja: "熊本市 ／ 熊本県立大学", en: "Kumamoto City / PUK campus", vi: "TP. Kumamoto / Đại học tỉnh lập Kumamoto" },
    audience: { ja: "学生 約180名", en: "Approx. 180 students", vi: "Khoảng 180 sinh viên" },
    url: ""
  }
];

/* ▼ 実績の種類の表示名（多言語） */
const KIND_LABELS = {
  "講演":   { ja: "講演",     en: "Keynote",   vi: "Diễn thuyết" },
  "MC":     { ja: "MC・司会", en: "MC",        vi: "Dẫn chương trình" },
  "パネル": { ja: "パネル",   en: "Panel",     vi: "Tọa đàm" },
  "研修":   { ja: "研修",     en: "Training",  vi: "Đào tạo" },
  "取材":   { ja: "取材",     en: "Interview", vi: "Phỏng vấn" }
};

/* =========================================================================
   3. ブログ記事
   ------------------------------------------------------------------------
   slug : URLに使う英数字の名前（重複しないように）
   body : 本文。<p>〜</p> で段落、<h3> で小見出し。
   ========================================================================= */
const POST_CATS = [
  { key: "all",   label: { ja: "すべて",       en: "All",        vi: "Tất cả" } },
  { key: "報告",  label: { ja: "講演レポート", en: "Talk report",vi: "Báo cáo" } },
  { key: "お知らせ", label: { ja: "お知らせ",  en: "News",       vi: "Thông báo" } },
  { key: "コラム", label: { ja: "コラム",      en: "Column",     vi: "Chuyên mục" } }
];

const POSTS = [
  {
    slug: "kyushu-forum-2026",
    date: "2026-06-12",
    cat: "報告",
    image: "img/p_135.jpg",
    title: { ja: "九州経済フォーラムで登壇しました",
             en: "Speaking at the Kyushu Economic Forum",
             vi: "Phát biểu tại Diễn đàn Kinh tế Kyushu" },
    excerpt: { ja: "「日本一ベトナム人を理解している会社のつくり方」というテーマで、九州各地の経営者のみなさまへお話しする機会をいただきました。",
               en: "I had the chance to speak to business owners from across Kyushu on building Japan's most Vietnam-literate company.",
               vi: "Tôi có cơ hội chia sẻ với các doanh nhân khắp Kyushu về cách xây dựng công ty thấu hiểu người Việt nhất Nhật Bản." },
    body: {
      ja: `
      <p>先日、福岡市で開かれた九州経済フォーラムにお招きいただき、「日本一ベトナム人を理解している会社のつくり方」というテーマでお話ししてきました。会場には九州各地から約200名の経営者のみなさまにお集まりいただきました。</p>
      <h3>いちばん多かった質問</h3>
      <p>講演後の質疑応答で、いちばん多かったのは「なぜ彼らは、何も言わずに辞めてしまうのか」という質問でした。これは私が長年、ずっと向き合ってきたテーマでもあります。</p>
      <p>答えはシンプルで、「言えない」のではなく「言っても変わらないと思っている」から。信頼関係ができていれば、彼らはちゃんと相談してくれます。相談されないのは、相談する価値がないと判断されているということなんです。</p>
      <h3>ご感想をありがとうございました</h3>
      <p>終了後、たくさんの方から「明日から現場でやってみます」というお声をいただきました。こういう瞬間があるから、講演の仕事はやめられません。お招きいただいた事務局のみなさま、ありがとうございました。</p>`,
      en: `
      <p>I was recently invited to the Kyushu Economic Forum in Fukuoka to speak on "Building Japan's Most Vietnam-Literate Company." Around 200 business owners from across Kyushu attended.</p>
      <h3>The most common question</h3>
      <p>During the Q&amp;A, the question I heard most was: "Why do they quit without saying anything?" This is something I have spent years thinking about.</p>
      <p>The answer is simple. It isn't that they can't speak up — it's that they believe speaking up won't change anything. Where trust exists, people do come and talk to you. If nobody is coming to you, it means you have been judged as not worth talking to.</p>
      <h3>Thank you</h3>
      <p>Afterwards, many people told me they would try these ideas on their own shop floors the next day. Moments like that are why I keep accepting speaking invitations. My thanks to everyone at the organising office.</p>`
    }
  },
  {
    slug: "vietnam-festival-2026",
    date: "2026-03-25",
    cat: "お知らせ",
    image: "img/p_9298.jpg",
    title: { ja: "ベトナムフェスティバル熊本2026で総合司会をつとめました",
             en: "Hosting Vietnam Festival Kumamoto 2026",
             vi: "Dẫn chương trình Lễ hội Việt Nam Kumamoto 2026" },
    excerpt: { ja: "熊本城ホールで開催されたベトナムフェスティバル熊本2026にて、日本語・ベトナム語の二言語で総合司会をつとめさせていただきました。",
               en: "I served as master of ceremonies — in both Japanese and Vietnamese — at Vietnam Festival Kumamoto 2026, held at Kumamoto Castle Hall.",
               vi: "Tôi đảm nhận vai trò dẫn chương trình song ngữ Nhật – Việt tại Lễ hội Việt Nam Kumamoto 2026." },
    body: {
      ja: `
      <p>3月22日、熊本城ホールで開催された「ベトナムフェスティバル熊本2026」にて、総合司会をつとめさせていただきました。当日は約3,000名の方にご来場いただき、会場は一日中にぎやかでした。</p>
      <h3>二言語での司会について</h3>
      <p>日本語とベトナム語、両方で進行するイベントの司会は、単なる「翻訳」ではありません。同じことを言っていても、笑いどころも、間の取り方も、ふたつの言語では変わってきます。</p>
      <p>私は両方の国で育ったので、その「温度差」を肌で分かっているつもりです。日本人のお客さまにもベトナム人のお客さまにも、同じ熱量で楽しんでいただけるように心がけました。</p>
      <h3>また来年も</h3>
      <p>ご来場くださったみなさま、運営スタッフのみなさま、本当にありがとうございました。またお会いしましょう。</p>`,
      en: `
      <p>On 22 March I hosted Vietnam Festival Kumamoto 2026 at Kumamoto Castle Hall. Around 3,000 people came through the doors, and the hall was lively from open to close.</p>
      <h3>On hosting in two languages</h3>
      <p>Hosting an event in both Japanese and Vietnamese is not simply translation. Even when you say the same thing, where the laughs land and how long you hold a pause are different in each language.</p>
      <p>Having grown up in both countries, I feel that difference in temperature instinctively. My aim was for Japanese and Vietnamese guests alike to enjoy the day with the same intensity.</p>
      <h3>See you next year</h3>
      <p>My sincere thanks to everyone who attended and to all the event staff.</p>`
    }
  },
  {
    slug: "why-i-started",
    date: "2026-01-08",
    cat: "コラム",
    image: "img/p_8480.jpg",
    title: { ja: "なぜ私は、学生のまま会社をつくったのか",
             en: "Why I Started a Company While Still a Student",
             vi: "Vì sao tôi lập công ty khi còn là sinh viên" },
    excerpt: { ja: "大学在学中に、学生でありながら創業しました。あのとき何を考えていたのか、いまだからこそ書けることを書いてみます。",
               en: "I founded my company while still an undergraduate. Here is what I was actually thinking at the time.",
               vi: "Tôi lập công ty khi vẫn còn là sinh viên. Đây là những gì tôi đã nghĩ vào thời điểm đó." },
    body: {
      ja: `
      <p>大学3年生のとき、私は学生でありながら会社をつくりました。就職活動の時期です。まわりはみんなスーツを着て説明会に行っていました。</p>
      <h3>「通訳してくれない?」から始まった</h3>
      <p>きっかけは本当に小さなことでした。熊本の中小企業の社長さんから「ベトナムの取引先とやりとりしたいんだけど、通訳してくれない?」と頼まれたんです。</p>
      <p>やってみたら、通訳だけでは足りませんでした。文化がちがう、商習慣がちがう、何を失礼と感じるかがちがう。言葉を訳すだけでは、話がまとまらないんです。</p>
      <h3>誰かがやらないといけない</h3>
      <p>そのとき思いました。両方の国が分かる人間が間に立たないと、この2つの国はうまくつながらない。そして私は、たまたま両方が分かる場所に立っていました。</p>
      <p>だから始めた、というのが正直なところです。壮大なビジョンがあったわけではありません。目の前に困っている人がいて、自分にできることがあった。それだけでした。</p>
      <p>いまも、やっていることの本質は変わっていないと思います。</p>`,
      en: `
      <p>In my third year at university, while still a student, I started a company. It was recruitment season. Everyone around me was in a suit, going to information sessions.</p>
      <h3>It began with "could you interpret for us?"</h3>
      <p>The trigger was genuinely small. The president of a small Kumamoto company asked me: "I want to deal with a Vietnamese supplier — could you interpret for us?"</p>
      <p>When I tried, interpreting alone wasn't enough. The cultures differ, the business customs differ, what counts as rude differs. Translating the words does not close the deal.</p>
      <h3>Somebody had to do it</h3>
      <p>That was when it struck me: unless someone who understands both countries stands in the middle, these two countries will not connect properly. And I happened to be standing exactly there.</p>
      <p>So I began. Honestly, there was no grand vision. There was someone in front of me with a problem, and there was something I could do about it. That was all.</p>
      <p>I don't think the essence of what I do has changed since.</p>`
    }
  }
];

/* =========================================================================
   4. フォトギャラリー
   ------------------------------------------------------------------------
   cat : "portrait" / "event" / "vietnam" / "company"
   ========================================================================= */
const PHOTO_CATS = [
  { key: "all",      label: { ja: "すべて",           en: "All",         vi: "Tất cả" } },
  { key: "portrait", label: { ja: "ポートレート",     en: "Portrait",    vi: "Chân dung" } },
  { key: "event",    label: { ja: "講演・イベント",   en: "Talks & events", vi: "Sự kiện" } },
  { key: "vietnam",  label: { ja: "ベトナム・アオザイ", en: "Vietnam / Áo dài", vi: "Việt Nam / Áo dài" } },
  { key: "company",  label: { ja: "会社・スタッフ",   en: "Company & team", vi: "Công ty & nhân viên" } }
];

const PHOTOS = [
  { src: "img/p_8743.jpg", cat: "portrait", pos: "50% 25%",
    caption: { ja: "ポートレート ／ 百合", en: "Portrait / Lily", vi: "Chân dung / Hoa loa kèn" } },
  { src: "img/p_8480.jpg", cat: "portrait", pos: "50% 20%",
    caption: { ja: "ポートレート ／ 笑顔", en: "Portrait / Smile", vi: "Chân dung / Nụ cười" } },
  { src: "img/p_135.jpg",  cat: "event",    pos: "50% 30%",
    caption: { ja: "執務室にて ／ 熊本", en: "At the office / Kumamoto", vi: "Tại văn phòng / Kumamoto" } },
  { src: "img/yuri.jpg",   cat: "portrait", pos: "50% 30%",
    caption: { ja: "ポートレート ／ オフィス", en: "Portrait / Office", vi: "Chân dung / Văn phòng" } },
  { src: "img/p_9002.jpg", cat: "vietnam",  pos: "50% 25%",
    caption: { ja: "アオザイ ／ 花とともに", en: "Áo dài / With flowers", vi: "Áo dài / Cùng hoa" } },
  { src: "img/p_9298.jpg", cat: "vietnam",  pos: "50% 30%",
    caption: { ja: "アオザイ ／ 全身", en: "Áo dài / Full length", vi: "Áo dài / Toàn thân" } },
  { src: "img/p_49.jpg",   cat: "company",  pos: "50% 35%",
    caption: { ja: "スタッフとともに", en: "With our team", vi: "Cùng đội ngũ" } },
  { src: "img/p_32.jpg",   cat: "company",  pos: "50% 45%",
    caption: { ja: "本社社屋 ／ 熊本", en: "Head office / Kumamoto", vi: "Trụ sở chính / Kumamoto" } }
];

/* ▼ 写真集・フォト集
   url に外部リンク（Googleフォト、note、Instagramなど）を入れると
   「見る」ボタンからそこへ飛びます。空なら準備中の表示になります。   */
const ALBUMS = [
  {
    title: "PORTRAIT 2026",
    cover: "img/p_8743.jpg",
    date: "2026",
    count: { ja: "全24点", en: "24 photos", vi: "24 ảnh" },
    desc: { ja: "百合の花とともに撮影したポートレートシリーズ。柔らかい光の中で、自然体の表情を切り取っていただきました。",
            en: "A portrait series shot with lilies, capturing natural expressions in soft light.",
            vi: "Bộ ảnh chân dung cùng hoa loa kèn, ghi lại biểu cảm tự nhiên trong ánh sáng dịu." },
    url: ""
  },
  {
    title: "ÁO DÀI",
    cover: "img/p_9298.jpg",
    date: "2026",
    count: { ja: "全18点", en: "18 photos", vi: "18 ảnh" },
    desc: { ja: "ベトナムの民族衣装アオザイをまとった撮影シリーズ。もうひとつの故郷への想いを込めて。",
            en: "A series in áo dài, Vietnam's national dress — a tribute to my other home.",
            vi: "Bộ ảnh với áo dài Việt Nam — gửi gắm tình cảm với quê hương thứ hai." },
    url: ""
  },
  {
    title: "VIETNAM TRADING の日々",
    cover: "img/p_49.jpg",
    date: "2026",
    count: { ja: "全32点", en: "32 photos", vi: "32 ảnh" },
    desc: { ja: "熊本本社とスタッフたちの記録。日本とベトナム、ふたつの国の仲間が働く風景です。",
            en: "Life at our Kumamoto head office — colleagues from two countries at work.",
            vi: "Nhật ký tại trụ sở Kumamoto — đồng nghiệp từ hai quốc gia cùng làm việc." },
    url: ""
  }
];

/* =========================================================================
   5. 歩み（年表）
   ========================================================================= */
const TIMELINE = [
  { year: "2003",
    title: { ja: "来日", en: "Arrival in Japan", vi: "Sang Nhật Bản" },
    body:  { ja: "ホーチミン市生まれのベトナム系日本人として来日。熊本県で中学・高校時代を過ごす。",
             en: "Born in Ho Chi Minh City, arrived in Japan as a Vietnamese-Japanese. Spent junior high and high school years in Kumamoto.",
             vi: "Sinh ra tại TP.HCM, sang Nhật với tư cách người Nhật gốc Việt. Học cấp 2 và cấp 3 tại Kumamoto." } },
  { year: "2011",
    title: { ja: "大学在学中に、学生でありながら創業 ── LCC JAPAN 設立",
             en: "Founded LCC JAPAN while still an undergraduate",
             vi: "Khởi nghiệp khi còn là sinh viên — thành lập LCC JAPAN" },
    body:  { ja: "熊本県立大学在学中（3年次）に起業。就職活動をせず、自分で会社をつくる道を選ぶ。のちに熊本県立大学を卒業。",
             en: "Started a company in the third year at the Prefectural University of Kumamoto, choosing to build rather than job-hunt. Later graduated from the same university.",
             vi: "Khởi nghiệp năm 3 tại Đại học tỉnh lập Kumamoto, chọn con đường lập công ty thay vì đi xin việc. Sau đó tốt nghiệp đại học." } },
  { year: "2013",
    title: { ja: "ベトナムトレーディング株式会社 誕生",
             en: "Vietnam Trading Co., Ltd. is born",
             vi: "Công ty cổ phần Việt Nam Trading ra đời" },
    body:  { ja: "熊本県にて創業し、代表取締役社長に就任。人材採用・職業紹介を中核事業に据える。",
             en: "Founded in Kumamoto Prefecture, taking the role of President & CEO, with recruitment and job placement as the core business.",
             vi: "Thành lập tại tỉnh Kumamoto, giữ chức Tổng giám đốc, lấy tuyển dụng và giới thiệu việc làm làm mảng cốt lõi." } },
  { year: "2016",
    title: { ja: "日越協同組合 設立", en: "Nichietsu Cooperative established", vi: "Thành lập Nghiệp đoàn Nichietsu" },
    body:  { ja: "技能実習生の受入れ・支援へと領域を広げる。",
             en: "Expanded into accepting and supporting technical intern trainees.",
             vi: "Mở rộng sang lĩnh vực tiếp nhận và hỗ trợ thực tập sinh kỹ năng." } },
  { year: "2017",
    title: { ja: "VIETNAM TRADING CO., LTD.（ホーチミン）設立",
             en: "VIETNAM TRADING CO., LTD. founded in Ho Chi Minh City",
             vi: "Thành lập VIETNAM TRADING CO., LTD. tại TP.HCM" },
    body:  { ja: "ベトナム現地法人を設立し、会長に就任。日本とベトナムを直接つなぐ体制を構築。",
             en: "Established the Vietnamese entity and became Chairperson, connecting Japan and Vietnam directly.",
             vi: "Thành lập pháp nhân tại Việt Nam và giữ chức Chủ tịch, kết nối trực tiếp Nhật – Việt." } },
  { year: "2018",
    title: { ja: "日越協同組合 理事長 就任", en: "Appointed Chairperson of Nichietsu Cooperative", vi: "Được bổ nhiệm Chủ tịch Nghiệp đoàn Nichietsu" },
    body:  { ja: "現在は日越にまたがるグループ3法人を率いる。",
             en: "Today leads three group entities spanning Japan and Vietnam.",
             vi: "Hiện dẫn dắt 3 pháp nhân trong tập đoàn tại Nhật và Việt Nam." } }
];

/* =========================================================================
   6. 澤村友里のこだわり
   ========================================================================= */
const KODAWARI_LEAD = {
  ja: "「日本とベトナムをつなぐ架け橋となり、日越両国100年先の未来のために行動する。」──　これが、私が変えずにきた軸です。",
  en: "\"Be the bridge between Japan and Vietnam, and act for the next hundred years of both countries.\" This is the one thing I have never changed.",
  vi: "\"Trở thành cầu nối giữa Nhật Bản và Việt Nam, hành động vì tương lai 100 năm tới của cả hai nước.\" Đây là điều tôi chưa bao giờ thay đổi."
};

const KODAWARI = [
  {
    no: "壱",
    title: { ja: "対等だからこそ、響き合う。", en: "Equals resonate.", vi: "Bình đẳng nên cộng hưởng." },
    body:  { ja: "企業と人材は、対等なパートナー。どちらか一方が我慢する関係に未来はありません。互いの尊厳を守り、真の「WIN-WIN」で日越の架け橋となります。",
             en: "Companies and people are equal partners. A relationship where one side endures has no future. We protect the dignity of both and bridge Japan and Vietnam through genuine win-win.",
             vi: "Doanh nghiệp và người lao động là đối tác bình đẳng. Mối quan hệ mà một bên phải chịu đựng thì không có tương lai." }
  },
  {
    no: "弐",
    title: { ja: "挑戦者こそ、最高のおもてなしを。", en: "The best hospitality for those who dare.", vi: "Sự tiếp đón tận tâm nhất cho người dám thử thách." },
    body:  { ja: "海を渡り、未来を拓こうとするすべての仲間へ。私たちは単なる「選考」ではなく「極上のおもてなし」で向き合い、一人ひとりの人生に寄り添う最良の機会を届けます。",
             en: "To everyone crossing the sea to open up their future: we meet you not with a mere selection process but with true hospitality, delivering the best opportunity for each individual life.",
             vi: "Gửi đến những người vượt biển mở ra tương lai: chúng tôi không chỉ \"tuyển chọn\" mà đón tiếp bằng sự tận tâm cao nhất." }
  },
  {
    no: "参",
    title: { ja: "嘘のない、オープンな道のりを。", en: "An honest, open road.", vi: "Một hành trình minh bạch, không dối trá." },
    body:  { ja: "選考の全ステップをクリアに開示。準備のサポートから、次に繋がる誠実なフィードバックまで、不安をゼロにする透明なプロセスであなたの挑戦にどこまでも伴走します。",
             en: "Every step of the process, disclosed clearly. From preparation support to honest feedback that leads somewhere — a transparent process that removes anxiety and walks with you all the way.",
             vi: "Công khai rõ ràng mọi bước. Từ hỗ trợ chuẩn bị đến phản hồi chân thành — quy trình minh bạch xóa tan lo lắng." }
  }
];

/* =========================================================================
   7. グループ体制（各社サイトへのリンク）
   ========================================================================= */
const GROUP = [
  {
    name: { ja: "ベトナムトレーディング株式会社", en: "VIETNAM TRADING CO., LTD. (Japan)", vi: "Công ty cổ phần Việt Nam Trading" },
    en: "VIETNAM TRADING CO., LTD. (JAPAN)",
    est: { ja: "2013年 ／ 熊本", en: "Est. 2013 / Kumamoto", vi: "2013 / Kumamoto" },
    role: { ja: "代表取締役社長", en: "President & CEO", vi: "Tổng giám đốc" },
    body: { ja: "人材採用・職業紹介を中核に、通訳翻訳・日本語教育・ベトナム進出支援まで多角的に展開。",
            en: "Recruitment and job placement at its core, extending to interpreting, Japanese-language education and market-entry support.",
            vi: "Cốt lõi là tuyển dụng và giới thiệu việc làm, mở rộng sang phiên dịch, giáo dục tiếng Nhật và hỗ trợ đầu tư." },
    url: "https://www.vietnamtrading.co.jp/"
  },
  {
    name: { ja: "日越協同組合", en: "Nichietsu Cooperative", vi: "Nghiệp đoàn Nichietsu" },
    en: "NICHIETSU COOPERATIVE",
    est: { ja: "2016年 ／ 日本", en: "Est. 2016 / Japan", vi: "2016 / Nhật Bản" },
    role: { ja: "理事長（2018年〜）", en: "Chairperson (since 2018)", vi: "Chủ tịch (từ 2018)" },
    body: { ja: "ベトナム人技能実習生の受入れと、受入企業・実習生双方への支援を担う監理団体。",
            en: "A supervising organisation accepting Vietnamese technical intern trainees and supporting both companies and trainees.",
            vi: "Đoàn thể quản lý tiếp nhận thực tập sinh Việt Nam và hỗ trợ cả doanh nghiệp lẫn thực tập sinh." },
    url: "http://nichietsu.or.jp"
  },
  {
    name: { ja: "VIETNAM TRADING CO., LTD.", en: "VIETNAM TRADING CO., LTD. (Vietnam)", vi: "VIETNAM TRADING CO., LTD." },
    en: "HO CHI MINH CITY, VIETNAM",
    est: { ja: "2017年 ／ ホーチミン", en: "Est. 2017 / Ho Chi Minh", vi: "2017 / TP.HCM" },
    role: { ja: "会長", en: "Chairperson", vi: "Chủ tịch" },
    body: { ja: "ベトナム現地法人。母国での人材の発掘と教育を、日本側と一気通貫でつなぐ。",
            en: "The Vietnamese entity — sourcing and training talent at home, connected end-to-end with the Japanese side.",
            vi: "Pháp nhân tại Việt Nam — tìm kiếm và đào tạo nhân lực, kết nối liền mạch với phía Nhật Bản." },
    url: ""
  }
];

/* ▼ 関連サービス・サイト */
const SERVICES = [
  { name: { ja: "こだわり", en: "KODAWARI", vi: "Kodawari" }, en: "KODAWARI.VN",
    desc: { ja: "ベトナム特化型の求人サイト。日本で働きたいベトナム人と企業をつなぐ。",
            en: "A job site built for Vietnamese talent, connecting them with employers in Japan.",
            vi: "Trang tuyển dụng dành riêng cho người Việt muốn làm việc tại Nhật." },
    url: "https://kodawari.vn/" },
  { name: { ja: "つみき日本語研修センター", en: "Tsumiki Japanese Training Center", vi: "Trung tâm tiếng Nhật Tsumiki" }, en: "TSUMIKI CENTER",
    desc: { ja: "来日前・来日後の日本語教育を担う自社の研修センター。",
            en: "Our own training centre delivering Japanese-language education before and after arrival.",
            vi: "Trung tâm đào tạo tiếng Nhật trước và sau khi sang Nhật." },
    url: "https://tsumikicenter.com/" },
  { name: { ja: "ベトナムオレンジプロジェクト", en: "Vietnam Orange Project", vi: "Dự án Cam Việt Nam" }, en: "ORANGE PROJECT",
    desc: { ja: "枯葉剤被害者を支援する社会貢献プロジェクト。",
            en: "A social contribution project supporting victims of Agent Orange.",
            vi: "Dự án xã hội hỗ trợ nạn nhân chất độc da cam." },
    url: "https://www.vietnamtrading.co.jp/orange" }
];

/* =========================================================================
   8. お問い合わせ — 依頼の種類
   ========================================================================= */
const INQUIRY_TYPES = [
  { value: "講演のご依頼",
    label: { ja: "講演のご依頼",    en: "Speaking request",  vi: "Mời diễn thuyết" },
    desc:  { ja: "企業研修・学校・行政・団体イベントなど", en: "Corporate, school, government or association events", vi: "Doanh nghiệp, trường học, chính quyền, đoàn thể" } },
  { value: "MCのご依頼",
    label: { ja: "MC・司会のご依頼", en: "MC request",        vi: "Mời dẫn chương trình" },
    desc:  { ja: "イベント司会、日越二言語での進行",       en: "Event hosting, bilingual Japanese–Vietnamese", vi: "Dẫn chương trình song ngữ Nhật – Việt" } },
  { value: "その他のご相談",
    label: { ja: "その他のご相談",   en: "Other enquiry",     vi: "Tư vấn khác" },
    desc:  { ja: "取材・対談・人材のご相談など",           en: "Interviews, discussions, talent enquiries", vi: "Phỏng vấn, đối thoại, tư vấn nhân lực" } }
];

/* =========================================================================
   9. 略歴の詳細（プロフィール表）
   ========================================================================= */
const PROFILE_SPEC = [
  { label: { ja: "氏名",     en: "Name",        vi: "Họ tên" },
    value: { ja: "澤村 友里（さわむら ゆり）／ YURI SAWAMURA", en: "Yuri Sawamura", vi: "Yuri Sawamura" } },
  { label: { ja: "出身",     en: "Born",        vi: "Nơi sinh" },
    value: { ja: "ベトナム・ホーチミン市生まれ（ベトナム系日本人）", en: "Born in Ho Chi Minh City, Vietnam (Vietnamese-Japanese)", vi: "Sinh tại TP. Hồ Chí Minh (người Nhật gốc Việt)" } },
  { label: { ja: "来日",     en: "Moved to Japan", vi: "Sang Nhật" },
    value: { ja: "2003年（熊本県で中学・高校時代を過ごす）", en: "2003 — junior high and high school in Kumamoto", vi: "2003 — học cấp 2, cấp 3 tại Kumamoto" } },
  { label: { ja: "学歴",     en: "Education",   vi: "Học vấn" },
    value: { ja: "熊本県立大学 卒業", en: "Prefectural University of Kumamoto", vi: "Đại học tỉnh lập Kumamoto" } },
  { label: { ja: "現在の役職", en: "Current roles", vi: "Chức vụ hiện tại" },
    value: { ja: "ベトナムトレーディング株式会社 代表取締役社長／日越協同組合 理事長／VIETNAM TRADING CO., LTD.（ホーチミン）会長",
             en: "President & CEO, Vietnam Trading Co., Ltd. / Chairperson, Nichietsu Cooperative / Chairperson, Vietnam Trading Co., Ltd. (HCMC)",
             vi: "Tổng giám đốc Việt Nam Trading / Chủ tịch Nghiệp đoàn Nichietsu / Chủ tịch VIETNAM TRADING CO., LTD. (TP.HCM)" } },
  { label: { ja: "事業領域", en: "Focus",       vi: "Lĩnh vực" },
    value: { ja: "外国人材の職業紹介・採用支援／技能実習生の受入れ・監理／ベトナム人材の教育・日本語研修／ベトナム進出支援",
             en: "Recruitment for foreign talent / technical intern supervision / Japanese-language education / Vietnam market-entry support",
             vi: "Giới thiệu việc làm / quản lý thực tập sinh / đào tạo tiếng Nhật / hỗ trợ đầu tư vào Việt Nam" } },
  { label: { ja: "拠点",     en: "Based in",    vi: "Trụ sở" },
    value: { ja: "熊本県熊本市 ／ ベトナム・ホーチミン市", en: "Kumamoto, Japan / Ho Chi Minh City, Vietnam", vi: "Kumamoto, Nhật Bản / TP.HCM, Việt Nam" } },
  { label: { ja: "使用言語", en: "Languages",   vi: "Ngôn ngữ" },
    value: { ja: "日本語（ネイティブ）／ベトナム語（ネイティブ）", en: "Japanese (native) / Vietnamese (native)", vi: "Tiếng Nhật (bản ngữ) / Tiếng Việt (bản ngữ)" } },
  { label: { ja: "発信",     en: "Media",       vi: "Kênh" },
    value: { ja: "YouTube「YURI SAWAMURA Channel」でビジネス日本語のポッドキャストを配信中",
             en: "Hosts a business-Japanese podcast on the YURI SAWAMURA Channel (YouTube)",
             vi: "Phát podcast tiếng Nhật thương mại trên kênh YouTube YURI SAWAMURA Channel" } }
];

/* =========================================================================
   10. 講師情報の詳細（依頼時に必要な実務情報）
   ========================================================================= */
const SPEAKER_SPEC = [
  { label: { ja: "講演形式", en: "Formats", vi: "Hình thức" },
    value: { ja: "講演／パネルディスカッション／ワークショップ型研修／対談／MC・司会",
             en: "Keynote / panel discussion / workshop-style training / dialogue / MC",
             vi: "Diễn thuyết / tọa đàm / đào tạo workshop / đối thoại / dẫn chương trình" } },
  { label: { ja: "講演時間", en: "Duration", vi: "Thời lượng" },
    value: { ja: "30分〜120分（ご要望に合わせて構成します）", en: "30 to 120 minutes, tailored to your programme", vi: "30–120 phút, thiết kế theo yêu cầu" } },
  { label: { ja: "対象",     en: "Audience", vi: "Đối tượng" },
    value: { ja: "企業（経営者・人事・現場管理職）／学校・大学・専門学校／行政・自治体／業界団体・地域団体",
             en: "Companies (executives, HR, frontline managers) / schools and universities / government / industry and community bodies",
             vi: "Doanh nghiệp / trường học / chính quyền / hiệp hội và đoàn thể" } },
  { label: { ja: "対応言語", en: "Languages", vi: "Ngôn ngữ" },
    value: { ja: "日本語／ベトナム語（日越二言語での進行も可能）", en: "Japanese / Vietnamese (bilingual delivery available)", vi: "Tiếng Nhật / Tiếng Việt (có thể song ngữ)" } },
  { label: { ja: "対応エリア", en: "Area", vi: "Khu vực" },
    value: { ja: "全国（九州を中心に全国対応）／ベトナム国内も対応可", en: "Nationwide across Japan, and within Vietnam", vi: "Toàn Nhật Bản và tại Việt Nam" } },
  { label: { ja: "オンライン", en: "Online", vi: "Trực tuyến" },
    value: { ja: "Zoom・Teams等でのオンライン登壇に対応（録画配信のご相談も可）", en: "Available via Zoom, Teams and similar; recorded delivery on request", vi: "Có thể qua Zoom, Teams; hỗ trợ ghi hình theo yêu cầu" } },
  { label: { ja: "ご用意いただくもの", en: "Please provide", vi: "Bên tổ chức chuẩn bị" },
    value: { ja: "プロジェクター・スクリーン・マイク（パソコンは持参します）", en: "Projector, screen and microphone (laptop provided by the speaker)", vi: "Máy chiếu, màn chiếu, micro (diễn giả tự mang máy tính)" } },
  { label: { ja: "事前打合せ", en: "Pre-event call", vi: "Trao đổi trước" },
    value: { ja: "オンラインで30分程度・無料。目的と対象をうかがって内容を調整します。",
             en: "About 30 minutes online, free of charge, to tailor the content to your goals and audience.",
             vi: "Khoảng 30 phút trực tuyến, miễn phí, để điều chỉnh nội dung." } },
  { label: { ja: "謝金・交通費", en: "Fee & travel", vi: "Thù lao & đi lại" },
    value: { ja: "内容・時間・地域により個別にお見積りします。まずはご予算をお聞かせください。",
             en: "Quoted individually based on content, duration and location. Please share your budget.",
             vi: "Báo giá riêng theo nội dung, thời lượng và địa điểm." } }
];

/* =========================================================================
   11. 講演パッケージ
   ------------------------------------------------------------------------
   price に金額を入れると表示されます。空なら「個別お見積り」になります。
   featured: true にすると、そのパッケージが強調表示されます。
   ========================================================================= */
const PACKAGES = [
  {
    key: "standard", featured: true,
    name: { ja: "スタンダード講演", en: "Standard Keynote", vi: "Diễn thuyết tiêu chuẩn" },
    time: { ja: "60〜90分", en: "60–90 min", vi: "60–90 phút" },
    lead: { ja: "いちばん多くご依頼いただく形です。講演のあとに質疑応答の時間をお取りします。",
            en: "The most frequently requested format, with time for questions afterwards.",
            vi: "Hình thức được yêu cầu nhiều nhất, có thời gian hỏi đáp." },
    items: { ja: ["ご希望テーマでの講演（60〜90分）", "質疑応答（15分程度）", "事前オンライン打合せ（無料）", "当日の投影資料", "写真撮影・SNS掲載OK"],
             en: ["Keynote on your chosen topic (60–90 min)", "Questions and answers (about 15 min)", "Free online pre-event call", "Presentation slides", "Photography and social posting welcome"],
             vi: ["Diễn thuyết theo chủ đề (60–90 phút)", "Hỏi đáp (khoảng 15 phút)", "Trao đổi trước miễn phí", "Tài liệu trình chiếu", "Được chụp ảnh và đăng mạng xã hội"] },
    best: { ja: "経営者セミナー、業界団体の研修会、行政の講演会", en: "Executive seminars, industry training days, public lectures", vi: "Hội thảo doanh nhân, tập huấn hiệp hội, buổi nói chuyện công" },
    price: ""
  },
  {
    key: "workshop", featured: false,
    name: { ja: "ワークショップ型研修", en: "Workshop Training", vi: "Đào tạo workshop" },
    time: { ja: "90〜120分", en: "90–120 min", vi: "90–120 phút" },
    lead: { ja: "聞くだけで終わらせない形式です。グループワークとケース検討で、自社の課題に落とし込みます。",
            en: "Not a lecture you simply sit through — group work and case studies applied to your own situation.",
            vi: "Không chỉ ngồi nghe — làm nhóm và phân tích tình huống áp dụng vào thực tế của bạn." },
    items: { ja: ["導入講義（30分）", "グループワーク・ケース検討", "全体共有とフィードバック", "事前ヒアリング（貴社の課題整理）", "ワークシートのご提供"],
             en: ["Opening lecture (30 min)", "Group work and case studies", "Plenary share-back and feedback", "Pre-event needs interview", "Worksheets provided"],
             vi: ["Bài giảng mở đầu (30 phút)", "Làm nhóm và phân tích tình huống", "Chia sẻ và phản hồi chung", "Phỏng vấn trước sự kiện", "Cung cấp phiếu bài tập"] },
    best: { ja: "管理職研修、受入れ企業の社内研修、教職員研修", en: "Manager training, in-house training, teacher training", vi: "Đào tạo quản lý, đào tạo nội bộ, đào tạo giáo viên" },
    price: ""
  },
  {
    key: "mc", featured: false,
    name: { ja: "MC・司会", en: "MC / Host", vi: "Dẫn chương trình" },
    time: { ja: "半日〜1日", en: "Half day – full day", vi: "Nửa ngày – cả ngày" },
    lead: { ja: "日本語とベトナム語、両方で会場をあたためます。二言語イベントの進行は、翻訳とはまったく別の仕事です。",
            en: "Warming up the room in both Japanese and Vietnamese. Hosting a bilingual event is a different craft from translating.",
            vi: "Hâm nóng khán phòng bằng cả tiếng Nhật và tiếng Việt — khác hoàn toàn với phiên dịch." },
    items: { ja: ["日越二言語での総合司会", "台本の確認・ご提案", "リハーサルへの参加", "登壇者インタビューの進行", "開会・閉会の進行"],
             en: ["Bilingual MC in Japanese and Vietnamese", "Script review and suggestions", "Rehearsal attendance", "On-stage interviews", "Opening and closing"],
             vi: ["Dẫn chương trình song ngữ Nhật – Việt", "Rà soát và góp ý kịch bản", "Tham gia tổng duyệt", "Phỏng vấn khách mời", "Khai mạc và bế mạc"] },
    best: { ja: "国際交流イベント、フェスティバル、企業式典、表彰式", en: "International events, festivals, corporate ceremonies, award nights", vi: "Sự kiện giao lưu quốc tế, lễ hội, lễ kỷ niệm doanh nghiệp" },
    price: ""
  },
  {
    key: "online", featured: false,
    name: { ja: "オンライン講演", en: "Online Talk", vi: "Diễn thuyết trực tuyến" },
    time: { ja: "30〜60分", en: "30–60 min", vi: "30–60 phút" },
    lead: { ja: "遠方でも、少人数でも。移動時間がないぶん、短時間・小さめのご予算でもご依頼いただけます。",
            en: "For distant or smaller audiences. No travel time means shorter formats and smaller budgets work.",
            vi: "Dành cho nơi xa hoặc nhóm nhỏ. Không mất thời gian di chuyển nên linh hoạt hơn." },
    items: { ja: ["Zoom・Teams等での登壇（30〜60分）", "チャットでの質疑応答", "投影資料のデータ提供", "録画・社内共有のご相談可"],
             en: ["Delivery via Zoom, Teams, etc. (30–60 min)", "Questions via chat", "Slide data provided", "Recording and internal sharing negotiable"],
             vi: ["Trình bày qua Zoom, Teams (30–60 phút)", "Hỏi đáp qua chat", "Cung cấp dữ liệu slide", "Có thể ghi hình và chia sẻ nội bộ"] },
    best: { ja: "全国の拠点をつなぐ社内研修、学校のオンライン授業", en: "Multi-site internal training, online classes", vi: "Đào tạo nội bộ nhiều chi nhánh, lớp học trực tuyến" },
    price: ""
  }
];

/* =========================================================================
   12. 講演依頼のステップ
   ========================================================================= */
const STEPS = [
  { no: "01",
    title: { ja: "お問い合わせ", en: "Enquiry", vi: "Liên hệ" },
    body:  { ja: "フォームまたはお電話でご連絡ください。日程が未定・内容が固まっていない段階でも大丈夫です。",
             en: "Send the form or call us. It is fine if the date or content is not yet decided.",
             vi: "Gửi biểu mẫu hoặc gọi điện. Chưa có ngày hoặc nội dung cụ thể cũng không sao." },
    note:  { ja: "2〜3営業日以内にご返信", en: "Reply within 2–3 business days", vi: "Phản hồi trong 2–3 ngày làm việc" } },
  { no: "02",
    title: { ja: "ヒアリング・ご提案", en: "Consultation", vi: "Trao đổi & đề xuất" },
    body:  { ja: "目的・対象・お時間・ご予算をうかがい、テーマと構成をご提案します。オンラインで30分程度、無料です。",
             en: "We discuss your goals, audience, timing and budget, then propose a topic and structure. About 30 minutes online, free.",
             vi: "Trao đổi mục tiêu, đối tượng, thời lượng, ngân sách rồi đề xuất chủ đề. Khoảng 30 phút, miễn phí." },
    note:  { ja: "オンライン30分・無料", en: "30 min online, free", vi: "30 phút trực tuyến, miễn phí" } },
  { no: "03",
    title: { ja: "お見積り・ご契約", en: "Quote & agreement", vi: "Báo giá & hợp đồng" },
    body:  { ja: "内容が固まりましたら、お見積りをお出しします。ご承諾いただいた時点で日程を確定します。",
             en: "Once the content is settled we issue a quote, and the date is confirmed on your approval.",
             vi: "Sau khi thống nhất nội dung, chúng tôi báo giá và chốt ngày khi bạn đồng ý." },
    note:  { ja: "書面でお出しします", en: "Issued in writing", vi: "Cung cấp bằng văn bản" } },
  { no: "04",
    title: { ja: "事前打合せ", en: "Final briefing", vi: "Họp trước sự kiện" },
    body:  { ja: "開催の2週間前をめどに、当日の進行と会場設備を確認します。投影資料もこの時点でお渡しします。",
             en: "Around two weeks before, we confirm the run sheet and venue setup, and hand over the materials.",
             vi: "Khoảng 2 tuần trước, xác nhận kịch bản và thiết bị, bàn giao tài liệu." },
    note:  { ja: "開催2週間前が目安", en: "About 2 weeks prior", vi: "Khoảng 2 tuần trước" } },
  { no: "05",
    title: { ja: "当日", en: "On the day", vi: "Ngày diễn ra" },
    body:  { ja: "開始1時間前には会場に入り、音響と投影を確認します。写真撮影・SNSへの掲載も歓迎です。",
             en: "We arrive an hour early to check sound and projection. Photography and social posts are welcome.",
             vi: "Đến trước 1 tiếng để kiểm tra âm thanh, máy chiếu. Hoan nghênh chụp ảnh và đăng mạng." },
    note:  { ja: "1時間前に会場入り", en: "Arrive 1 hour early", vi: "Đến sớm 1 tiếng" } },
  { no: "06",
    title: { ja: "アフターフォロー", en: "Follow-up", vi: "Sau sự kiện" },
    body:  { ja: "アンケート結果を共有いただければ、次回に向けた改善点をご一緒に振り返ります。継続的なご相談も歓迎です。",
             en: "Share your feedback survey and we will review improvements together. Ongoing consultation is welcome.",
             vi: "Chia sẻ kết quả khảo sát để cùng rút kinh nghiệm. Hoan nghênh trao đổi lâu dài." },
    note:  { ja: "ご相談は無料です", en: "Free of charge", vi: "Miễn phí" } }
];

/* =========================================================================
   13. SNSアカウント
   ------------------------------------------------------------------------
   ここに書いたものが、ヘッダー・フッター・SNS紹介ページに出ます。
   使わないアカウントは行ごと消してください。
   ========================================================================= */

/* ▼ YouTubeチャンネルID
   これを入れておくと「最新動画」が自動で更新されます（手入力は不要です）。
   チャンネルIDは YouTubeのチャンネルページ →「共有」→「チャンネルIDをコピー」で取得できます。 */
const YT_CHANNEL_ID = "UCYE6NspnrKTGlC8osbHdvaQ";

const SNS_ACCOUNTS = [
  {
    key: "youtube",
    name: "YURI SAWAMURA Channel",
    handle: "@yurisawamurachannel",
    url: "https://www.youtube.com/@yurisawamurachannel",
    lead: { ja: "ビジネス日本語のポッドキャストを配信中",
            en: "A business-Japanese podcast, published regularly",
            vi: "Podcast tiếng Nhật thương mại, cập nhật thường xuyên" },
    body: { ja: "「ゆりと学ぶビジネス日本語」を毎週配信しています。シャドーイングで自然な聞き取りと会話力が身につく内容で、日本語版とベトナム語版の両方をお届けしています。日本で働くベトナム人の方はもちろん、外国人材を受け入れている企業のみなさまにも見ていただいています。",
            en: "I publish “Business Japanese with Yuri” every week — shadowing practice for natural listening and conversation, in both Japanese and Vietnamese editions. It is watched by Vietnamese people working in Japan and by the companies that employ them.",
            vi: "Tôi phát “Học tiếng Nhật thương mại cùng Yuri” hàng tuần — luyện shadowing để nghe và nói tự nhiên, có cả bản tiếng Nhật và tiếng Việt." },
    cta: { ja: "チャンネル登録する", en: "Subscribe", vi: "Đăng ký kênh" }
  },
  {
    key: "instagram",
    name: "Instagram",
    handle: "@yuri_jpvn",
    url: "https://www.instagram.com/yuri_jpvn/",
    lead: { ja: "日々の仕事と、ふたつの国のあいだの景色",
            en: "Daily work, and the view from between two countries",
            vi: "Công việc thường ngày và khung cảnh giữa hai quốc gia" },
    body: { ja: "講演やイベントの様子、ベトナム出張の記録、社内のできごとなどを投稿しています。かしこまらない、素のままの日常をいちばん近くでご覧いただけます。",
            en: "Talks and events, trips to Vietnam, and moments from inside the company. This is the least formal, closest view of my everyday life.",
            vi: "Hình ảnh các buổi diễn thuyết, sự kiện, chuyến công tác Việt Nam và đời sống công ty." },
    cta: { ja: "フォローする", en: "Follow", vi: "Theo dõi" }
  },
  {
    key: "tiktok",
    name: "TikTok",
    handle: "@kodawari.jp",
    url: "https://www.tiktok.com/@kodawari.jp",
    lead: { ja: "日本で働くための情報を、短い動画で",
            en: "Short videos about working in Japan",
            vi: "Video ngắn về việc làm tại Nhật Bản" },
    body: { ja: "求人サイト「こだわり」の公式アカウントです。在留資格のこと、日本での暮らしのこと、仕事の探し方などを、短い動画でわかりやすくお伝えしています。",
            en: "The official account of our job site “Kodawari”. Short, clear videos about visa status, living in Japan and finding work.",
            vi: "Tài khoản chính thức của trang tuyển dụng “Kodawari”. Video ngắn về tư cách lưu trú, cuộc sống và tìm việc tại Nhật." },
    cta: { ja: "TikTokで見る", en: "View on TikTok", vi: "Xem trên TikTok" }
  },
  {
    key: "facebook",
    name: "Facebook",
    handle: "vietnamtrading",
    url: "https://www.facebook.com/vietnamtrading/",
    lead: { ja: "会社のお知らせとイベント情報",
            en: "Company news and event announcements",
            vi: "Thông báo công ty và sự kiện" },
    body: { ja: "ベトナムトレーディング株式会社の公式ページです。イベントの告知、採用のお知らせ、会社の取り組みなどを発信しています。",
            en: "The official page of Vietnam Trading Co., Ltd. — event announcements, hiring news and what the company is working on.",
            vi: "Trang chính thức của Công ty Việt Nam Trading — thông báo sự kiện, tuyển dụng và hoạt động công ty." },
    cta: { ja: "ページを見る", en: "Visit page", vi: "Xem trang" }
  }
];

/* ▼ ピックアップ動画
   YouTubeの動画IDを入れると、サムネイル付きで並びます。
   動画IDは https://www.youtube.com/watch?v=●●●●● の ●●●●● の部分です。
   ※「最新動画」の枠は YT_CHANNEL_ID から自動更新されるので、ここは
     とくに見てほしい回だけ入れておけば十分です。               */
const VIDEOS = [
  { id: "MFX3ySZ9Z54", date: "2026-09-04", title: { ja: "【EP80】ゆりと学ぶビジネス日本語 — シャドーイングで聞き取り・会話力を身につけよう" } },
  { id: "nr5tGnTUjZc", date: "2026-08-28", title: { ja: "【EP79】ゆりと学ぶビジネス日本語 — シャドーイングで聞き取り・会話力を身につけよう" } },
  { id: "L_GjVNjT9wI", date: "2026-08-24", title: { ja: "【EP78】ゆりと学ぶビジネス日本語 — シャドーイングで聞き取り・会話力を身につけよう" } },
  { id: "UrijXNrQYvA", date: "2026-08-21", title: { ja: "【EP77】ゆりと学ぶビジネス日本語 — シャドーイングで聞き取り・会話力を身につけよう" } },
  { id: "fxyKPnW2NoQ", date: "2026-08-03", title: { ja: "【EP62】Podcast tiếng Nhật văn phòng cùng Yuri（ベトナム語版）" } },
  { id: "obDiJQNdTJA", date: "2026-07-27", title: { ja: "【EP70】Podcast tiếng Nhật văn phòng cùng Yuri（ベトナム語版）" } }
];

/* =========================================================================
   14. メディア出演
   ------------------------------------------------------------------------
   kind : "テレビ" / "新聞" / "雑誌" / "Web" / "ラジオ" / "podcast"
   url  : 記事や動画のリンク。なければ "" （リンクなしで表示されます）
   ========================================================================= */
const MEDIA = [
  { date: "2026-09", kind: "podcast",
    outlet: { ja: "YURI SAWAMURA Channel（YouTube）", en: "YURI SAWAMURA Channel (YouTube)", vi: "YURI SAWAMURA Channel (YouTube)" },
    title: { ja: "「ゆりと学ぶビジネス日本語」レギュラー配信中",
             en: "Host of the regular series “Business Japanese with Yuri”",
             vi: "Chương trình định kỳ “Học tiếng Nhật thương mại cùng Yuri”" },
    url: "https://www.youtube.com/@yurisawamurachannel" },
  { date: "2026-06", kind: "新聞",
    outlet: { ja: "熊本日日新聞", en: "Kumamoto Nichinichi Shimbun", vi: "Báo Kumamoto Nichinichi" },
    title: { ja: "県内企業の外国人材受入れをめぐる取材記事に、代表のコメントが掲載されました",
             en: "Quoted in a feature on foreign-talent employment among companies in the prefecture",
             vi: "Được trích dẫn trong bài viết về tiếp nhận nhân lực nước ngoài" },
    url: "" },
  { date: "2026-03", kind: "テレビ",
    outlet: { ja: "熊本県内テレビ局 情報番組", en: "Regional TV information programme", vi: "Chương trình truyền hình địa phương" },
    title: { ja: "ベトナムフェスティバル熊本の総合司会として出演しました",
             en: "Appeared as master of ceremonies for Vietnam Festival Kumamoto",
             vi: "Xuất hiện với vai trò dẫn chương trình Lễ hội Việt Nam Kumamoto" },
    url: "" },
  { date: "2025-10", kind: "Web",
    outlet: { ja: "ビジネス系Webメディア", en: "Online business media", vi: "Trang tin kinh doanh" },
    title: { ja: "学生起業から日越3法人の経営まで — 経営者インタビュー",
             en: "Interview: from student founder to running three entities across Japan and Vietnam",
             vi: "Phỏng vấn: từ sinh viên khởi nghiệp đến điều hành 3 pháp nhân" },
    url: "" }
];
