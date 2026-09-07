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
const SAMPLE_MODE = false;

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
    catch: { ja: "「採れない」より、「続かない」が本当の課題。",
             en: "The real problem isn't hiring. It's keeping people.",
             vi: "Vấn đề thật không phải tuyển được, mà là giữ được." },
    title: { ja: "人手不足を『外国人材』で勝ち抜く経営戦略",
             en: "Winning the Labour Shortage with Foreign Talent",
             vi: "Chiến lược vượt qua thiếu hụt nhân lực bằng nhân sự nước ngoài" },
    body: { ja: "制度の正しい理解から、定着のノウハウ、そして海外展開まで。技能実習・特定技能の受入れを現場で支えてきた立場から、外国人材を「採用する」だけで終わらせないための実務を、数字と事例でお話しします。",
            en: "From getting the rules right, to retention, to expanding overseas. Drawing on years of supporting technical intern and specified skilled worker placements, this talk covers what it actually takes so that hiring foreign talent does not end at hiring.",
            vi: "Từ hiểu đúng chế độ, đến bí quyết giữ chân, và mở rộng ra nước ngoài. Chia sẻ thực tiễn để việc tuyển dụng nhân lực nước ngoài không dừng lại ở khâu tuyển." },
    forwhom: { ja: "外国人材を受け入れている・これから受け入れる企業の経営者、人事、現場管理職の方へ",
               en: "For executives, HR and frontline managers at companies employing foreign workers",
               vi: "Dành cho lãnh đạo, nhân sự và quản lý hiện trường tại doanh nghiệp sử dụng lao động nước ngoài" },
    record: { ja: "熊本県弁護士会・熊本商工会議所 共催セミナーで実施",
              en: "Delivered at a seminar co-hosted by the Kumamoto Bar Association and Chamber of Commerce",
              vi: "Đã trình bày tại hội thảo do Đoàn luật sư và Phòng Thương mại Kumamoto đồng tổ chức" },
    tags: { ja: ["経営者向け", "企業研修", "業界団体"], en: ["Executives", "Corporate", "Industry bodies"], vi: ["Lãnh đạo", "Doanh nghiệp", "Hiệp hội"] }
  },
  {
    no: "02",
    catch: { ja: "ことばの通じない教室から、経営者になるまで。",
             en: "From a classroom where nothing made sense, to running a company.",
             vi: "Từ lớp học không hiểu một lời, đến khi trở thành nhà quản lý." },
    title: { ja: "苦難は幸福の門 〜試練をチャンスに変える生き方〜",
             en: "Hardship is the Gate to Happiness: turning trials into opportunity",
             vi: "Gian nan là cánh cửa của hạnh phúc" },
    body: { ja: "ベトナムに生まれ、12歳で熊本へ。日本語がまったく分からないまま中学に編入した日から、学生起業、3法人の経営まで。出産の10日後に組合を立ち上げ、その3か月後に熊本地震で被災した年のことも含め、逆境をどう受け止めてきたかをお話しします。",
            en: "Born in Vietnam, in Kumamoto from the age of twelve. From the day she joined a Japanese junior high without a word of the language, through founding a company as a student, to running three entities — including the year she launched a cooperative ten days after giving birth and was hit by the Kumamoto earthquakes three months later.",
            vi: "Sinh ra ở Việt Nam, đến Kumamoto năm 12 tuổi. Từ ngày vào trường Nhật khi chưa biết một chữ, đến khởi nghiệp thời sinh viên và điều hành 3 pháp nhân." },
    forwhom: { ja: "経営者団体、倫理法人会、ロータリークラブ、青年会議所、人材育成をテーマにした研修会へ",
               en: "For business associations, ethics groups, Rotary clubs, junior chambers and personal-development programmes",
               vi: "Dành cho hiệp hội doanh nhân, các nhóm đạo đức doanh nghiệp, Rotary, JCI" },
    record: { ja: "熊本東倫理法人会 モーニングセミナーで実施",
              en: "Delivered at a Kumamoto East Rinri Corporation Association morning seminar",
              vi: "Đã trình bày tại hội thảo buổi sáng của Hội Đạo đức doanh nghiệp Kumamoto Đông" },
    tags: { ja: ["経営者団体", "生き方", "モーニングセミナー"], en: ["Associations", "Life story", "Morning seminar"], vi: ["Hiệp hội", "Câu chuyện đời", "Hội thảo sáng"] }
  },
  {
    no: "03",
    catch: { ja: "命をあずかる現場だからこそ、伝わることばを。",
             en: "Where lives are at stake, words have to land.",
             vi: "Nơi giữ tính mạng con người, lời nói phải thật sự đến được." },
    title: { ja: "医療・介護の現場で、外国人材と共に働く",
             en: "Working Alongside Foreign Talent in Healthcare and Care",
             vi: "Làm việc cùng nhân lực nước ngoài trong y tế và điều dưỡng" },
    body: { ja: "指示が伝わらない、報告が上がってこない、患者さんとの会話が続かない。医療・介護の現場でよく起きるつまずきを、やさしい日本語の使い方と受入れ体制づくりの両面から解きほぐします。",
            en: "Instructions that don't get through, reports that never come, conversations with patients that stall. This talk unpacks the stumbling blocks common in healthcare and care settings, from both plain-Japanese technique and the design of the receiving organisation.",
            vi: "Chỉ thị không truyền đạt được, báo cáo không được gửi lên, hội thoại với bệnh nhân bị đứt quãng. Gỡ rối những vướng mắc thường gặp trong y tế và điều dưỡng." },
    forwhom: { ja: "病院、介護施設、医療・福祉の業界団体、現場の管理職の方へ",
               en: "For hospitals, care facilities, healthcare associations and frontline managers",
               vi: "Dành cho bệnh viện, cơ sở điều dưỡng, hiệp hội y tế và quản lý hiện trường" },
    record: { ja: "熊本県医師会での講演で実施",
              en: "Delivered for the Kumamoto Medical Association",
              vi: "Đã trình bày tại Hiệp hội Y khoa Kumamoto" },
    tags: { ja: ["医療・介護", "管理職向け", "やさしい日本語"], en: ["Healthcare", "Managers", "Plain Japanese"], vi: ["Y tế", "Quản lý", "Tiếng Nhật đơn giản"] }
  },
  {
    no: "04",
    catch: { ja: "就職活動をせず、大学3年で会社をつくった。",
             en: "I skipped job hunting and built a company in my third year.",
             vi: "Tôi không đi xin việc — năm 3 đại học, tôi lập công ty." },
    title: { ja: "海外人材における情報とイノベーション 〜学生起業のリアルを添えて〜",
             en: "Information and Innovation in Overseas Talent — with the reality of student entrepreneurship",
             vi: "Thông tin và đổi mới trong nhân lực nước ngoài — cùng thực tế khởi nghiệp sinh viên" },
    body: { ja: "これから外国人材がさらに増える日本で、どんなイノベーションが必要なのか。学生のみなさんに問いを投げかけながら、自分自身が大学3年で起業し、失敗も資金繰りも経験してきた道のりを包み隠さずお話しします。",
            en: "What kind of innovation will Japan need as its foreign workforce keeps growing? Posing that question to students, she also tells the unvarnished story of founding a company in her third year — failures and cash-flow troubles included.",
            vi: "Nhật Bản cần đổi mới gì khi lực lượng lao động nước ngoài tiếp tục tăng? Đặt câu hỏi cho sinh viên, đồng thời kể thật về hành trình khởi nghiệp năm 3." },
    forwhom: { ja: "大学、高校、専門学校でのキャリア教育・特別講義、若手社員研修に",
               en: "For career education and guest lectures at universities, high schools and colleges, and early-career training",
               vi: "Dành cho giáo dục hướng nghiệp tại đại học, THPT, cao đẳng và đào tạo nhân viên trẻ" },
    record: { ja: "熊本大学・熊本県立大学の特別講義で実施",
              en: "Delivered as guest lectures at Kumamoto University and the Prefectural University of Kumamoto",
              vi: "Đã giảng tại Đại học Kumamoto và Đại học tỉnh lập Kumamoto" },
    tags: { ja: ["大学・高校", "キャリア教育", "若手向け"], en: ["Universities", "Careers", "Youth"], vi: ["Đại học", "Hướng nghiệp", "Người trẻ"] }
  },
  {
    no: "05",
    catch: { ja: "隣に住む外国人は、もう「お客さん」ではない。",
             en: "Foreign residents are no longer guests.",
             vi: "Cư dân nước ngoài không còn là khách." },
    title: { ja: "多文化共生のまちづくり",
             en: "Building Multicultural Communities",
             vi: "Xây dựng cộng đồng đa văn hóa" },
    body: { ja: "熊本県で働く外国人労働者のうち約4割はベトナム人です。地域で暮らす人として彼らを迎えるために、行政・学校・地域の現場で何が起きていて、何が実際に効いたのか。データと現場の両方から共有します。",
            en: "About four in ten foreign workers in Kumamoto Prefecture are Vietnamese. What is actually happening in local government, schools and neighbourhoods as they welcome these residents — and what has genuinely worked. Shared from both the data and the ground.",
            vi: "Khoảng 40% lao động nước ngoài tại Kumamoto là người Việt. Điều gì đang thực sự diễn ra tại chính quyền, trường học, khu dân cư — và giải pháp nào đã hiệu quả." },
    forwhom: { ja: "自治体、国際交流協会、学校、地域団体、社会福祉協議会の方へ",
               en: "For municipalities, international associations, schools, community organisations and welfare councils",
               vi: "Dành cho chính quyền, hiệp hội giao lưu quốc tế, trường học, đoàn thể, hội phúc lợi" },
    record: { ja: "", en: "", vi: "" },
    tags: { ja: ["行政・自治体", "地域団体", "多文化共生"], en: ["Government", "Community", "Diversity"], vi: ["Chính quyền", "Cộng đồng", "Đa văn hóa"] }
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
    date: "2026-07-28", kind: "講演", upcoming: false,
    title: { ja: "人手不足を『外国人材』で勝ち抜く経営戦略 〜制度の正しい理解から定着のノウハウ、海外展開までを現場目線で語る〜",
             en: "Winning the Labour Shortage with Foreign Talent: from getting the rules right to retention and overseas expansion",
             vi: "Chiến lược vượt qua thiếu hụt nhân lực bằng nhân sự nước ngoài" },
    host:  { ja: "熊本県弁護士会・熊本商工会議所（共催）", en: "Kumamoto Bar Association & Kumamoto Chamber of Commerce and Industry", vi: "Đoàn luật sư Kumamoto & Phòng Thương mại Kumamoto" },
    venue: { ja: "熊本市", en: "Kumamoto City", vi: "TP. Kumamoto" },
    audience: { ja: "経営者・実務担当者", en: "Business owners and practitioners", vi: "Lãnh đạo và cán bộ phụ trách" },
    url: ""
  },
  {
    date: "2025-02", kind: "講演", upcoming: false,
    title: { ja: "外国人材の受入れと地域医療 〜医療・介護の現場で共に働くために〜",
             en: "Foreign Talent and Regional Healthcare",
             vi: "Nhân lực nước ngoài và y tế địa phương" },
    host:  { ja: "熊本県医師会", en: "Kumamoto Medical Association", vi: "Hiệp hội Y khoa Kumamoto" },
    venue: { ja: "熊本市", en: "Kumamoto City", vi: "TP. Kumamoto" },
    audience: { ja: "医療・介護の関係者", en: "Healthcare and care-sector professionals", vi: "Cán bộ y tế và điều dưỡng" },
    url: ""
  },
  {
    date: "2025-02", kind: "パネル", upcoming: false,
    title: { ja: "エキスポ出展・登壇", en: "Expo appearance", vi: "Tham gia triển lãm" },
    host:  { ja: "産業エキスポ", en: "Industry Expo", vi: "Triển lãm ngành" },
    venue: { ja: "熊本県", en: "Kumamoto", vi: "Kumamoto" },
    audience: { ja: "来場企業", en: "Visiting companies", vi: "Doanh nghiệp tham dự" },
    url: ""
  },
  {
    date: "2024-12-06", kind: "講演", upcoming: false,
    title: { ja: "苦難は幸福の門 〜試練をチャンスに変える生き方〜　ベトナム生まれ、熊本育ち。12歳から異国での逆境を乗り越えた軌跡",
             en: "Hardship is the Gate to Happiness: turning trials into opportunity — born in Vietnam, raised in Kumamoto",
             vi: "Gian nan là cánh cửa của hạnh phúc — sinh ra ở Việt Nam, lớn lên tại Kumamoto" },
    host:  { ja: "熊本東倫理法人会", en: "Kumamoto East Rinri Corporation Association", vi: "Hội Đạo đức doanh nghiệp Kumamoto Đông" },
    venue: { ja: "熊本市", en: "Kumamoto City", vi: "TP. Kumamoto" },
    audience: { ja: "経営者", en: "Business owners", vi: "Doanh nhân" },
    url: ""
  },
  {
    date: "2024-06", kind: "講演", upcoming: false,
    title: { ja: "熊本大学 特別講義", en: "Guest lecture at Kumamoto University", vi: "Bài giảng đặc biệt tại Đại học Kumamoto" },
    host:  { ja: "熊本大学", en: "Kumamoto University", vi: "Đại học Kumamoto" },
    venue: { ja: "熊本市", en: "Kumamoto City", vi: "TP. Kumamoto" },
    audience: { ja: "学生", en: "Students", vi: "Sinh viên" },
    url: ""
  },
  {
    date: "2024-05", kind: "講演", upcoming: false,
    title: { ja: "海外人材における情報とイノベーション（熊本県立大学 特別講義）",
             en: "Information and Innovation in Overseas Talent — guest lecture, Prefectural University of Kumamoto",
             vi: "Thông tin và đổi mới trong nhân lực nước ngoài — Đại học tỉnh lập Kumamoto" },
    host:  { ja: "熊本県立大学", en: "Prefectural University of Kumamoto", vi: "Đại học tỉnh lập Kumamoto" },
    venue: { ja: "熊本市", en: "Kumamoto City", vi: "TP. Kumamoto" },
    audience: { ja: "学生", en: "Students", vi: "Sinh viên" },
    url: ""
  },
  {
    date: "2024-03-05", kind: "パネル", upcoming: false,
    title: { ja: "カンファレンス登壇", en: "Conference appearance", vi: "Tham gia hội nghị" },
    host:  { ja: "", en: "", vi: "" },
    venue: { ja: "熊本県", en: "Kumamoto", vi: "Kumamoto" },
    audience: { ja: "", en: "", vi: "" },
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
  { year: "1989",
    title: { ja: "ベトナムで生まれる", en: "Born in Vietnam", vi: "Sinh ra tại Việt Nam" },
    body:  { ja: "1989年9月、ベトナムに生まれる。1995年に現地の小学校へ入学。1999年に両親が離婚し、母とともに歩むことになる。",
             en: "Born in Vietnam in September 1989, entering local primary school in 1995. Her parents divorced in 1999, and from then on she and her mother made their way together.",
             vi: "Sinh tháng 9/1989 tại Việt Nam, vào tiểu học năm 1995. Năm 1999 bố mẹ ly hôn, từ đó hai mẹ con cùng nhau bước tiếp." } },
  { year: "2003",
    title: { ja: "12歳で来日 ── 熊本県玉名市へ", en: "Arrived in Japan at twelve — Tamana, Kumamoto", vi: "Sang Nhật năm 12 tuổi — Tamana, Kumamoto" },
    body:  { ja: "2002年、母が日本人の澤村哲志さんと再婚したことで、日本へ渡ることが決まる。小学校の卒業と同時に日本語学校へ通い始め、翌2003年に来日。熊本県玉名市へ移り、日本語がほとんど分からないまま中学1年生の2学期から日本の学校に通い始める。",
             en: "In 2002 her mother remarried — to Tetsushi Sawamura, a Japanese national — and the move to Japan was decided. She began Japanese lessons as she finished primary school, and arrived the following year. Settling in Tamana City, Kumamoto, she entered a Japanese school partway through her first year of junior high, barely able to speak the language.",
             vi: "Năm 2002, mẹ tái hôn với ông Sawamura Tetsushi người Nhật, và việc sang Nhật được quyết định. Vừa tốt nghiệp tiểu học cô bắt đầu học tiếng Nhật, năm sau sang Nhật, đến TP. Tamana, Kumamoto và vào học trường Nhật từ giữa năm lớp 7." } },
  { year: "2006",
    title: { ja: "北稜高等学校 普通科に入学", en: "Entered Hokuryo High School", vi: "Vào trường THPT Hokuryo" },
    body:  { ja: "言葉と文化の壁に向き合いながら、高校生活を送る。",
             en: "Navigated high school while still facing the barriers of language and culture.",
             vi: "Trải qua thời phổ thông trong khi vẫn đối mặt với rào cản ngôn ngữ và văn hóa." } },
  { year: "2009",
    title: { ja: "熊本県立大学 総合管理学部に入学", en: "Entered the Prefectural University of Kumamoto", vi: "Vào Đại học tỉnh lập Kumamoto" },
    body:  { ja: "2008年に合格し、翌2009年に入学。",
             en: "Accepted in 2008 and enrolled the following year.",
             vi: "Trúng tuyển năm 2008 và nhập học năm 2009." } },
  { year: "2011",
    title: { ja: "大学3年、学生でありながら創業 ── LCC Japan 設立",
             en: "Founded LCC Japan in her third year as an undergraduate",
             vi: "Khởi nghiệp năm 3 đại học — thành lập LCC Japan" },
    body:  { ja: "就職活動をせず、自分で会社をつくる道を選ぶ。雑貨ショップ「Lily」の開店やベトナム語レッスンの開催など、学生のうちから商いの現場に立つ。",
             en: "She chose to build a company rather than job-hunt, opening the Lily gift shop and running Vietnamese lessons while still a student.",
             vi: "Chọn lập công ty thay vì đi xin việc; mở cửa hàng Lily và tổ chức lớp tiếng Việt khi vẫn còn là sinh viên." } },
  { year: "2013",
    title: { ja: "ベトナムトレーディング株式会社 誕生", en: "Vietnam Trading Co., Ltd. is born", vi: "Công ty Việt Nam Trading ra đời" },
    body:  { ja: "熊本県立大学を卒業。同年9月20日、ベトナムトレーディング株式会社を設立し代表取締役社長に就任。専門学校でベトナム人留学生に日本語を教えた経験から母国の若者のニーズを知ったことが、その後の人材事業の原点となる。",
             en: "Graduated and, on 20 September the same year, founded Vietnam Trading Co., Ltd. as President & CEO. Teaching Japanese to Vietnamese students at a vocational college had shown her what young people back home actually needed — the origin of the recruitment business.",
             vi: "Tốt nghiệp và ngày 20/9 cùng năm thành lập Công ty Việt Nam Trading, giữ chức Tổng giám đốc. Kinh nghiệm dạy tiếng Nhật cho du học sinh Việt là khởi nguồn của mảng nhân lực." } },
  { year: "2016",
    title: { ja: "日越協同組合 設立", en: "Nichietsu Cooperative established", vi: "Thành lập Nghiệp đoàn Nichietsu" },
    body:  { ja: "1月17日に第一子を出産し、その10日後の1月27日、技能実習生の受入れを担う日越協同組合を設立して代表理事に就任。さらに3か月後には熊本地震が発生し、社屋も被災した。人生と事業のいちばん大きな出来事が、わずか3か月のあいだに重なった年。",
             en: "She gave birth to her first child on 17 January and, ten days later on the 27th, founded Nichietsu Cooperative — which accepts technical intern trainees — as its Representative Director. Three months after that the Kumamoto earthquakes struck and damaged the office. The largest events of her life and her business fell within a single three-month stretch.",
             vi: "Ngày 17/1 sinh con đầu lòng, và chỉ 10 ngày sau, ngày 27/1, thành lập Nghiệp đoàn Nichietsu và giữ chức Chủ tịch. Ba tháng sau, động đất Kumamoto xảy ra làm hư hại trụ sở. Những biến cố lớn nhất của đời sống và sự nghiệp dồn vào vỏn vẹn ba tháng." } },
  { year: "2017",
    title: { ja: "ベトナム現地法人 有限会社ベトナムトレーディング 設立",
             en: "Founded the Vietnamese entity, Vietnam Trading Co., Ltd.",
             vi: "Thành lập pháp nhân tại Việt Nam" },
    body:  { ja: "11月1日、ベトナムに現地法人を設立し代表取締役会長に就任。日本とベトナムを直接つなぐ体制ができる。",
             en: "On 1 November she founded the entity in Vietnam as Chairperson, completing a structure that links the two countries directly.",
             vi: "Ngày 1/11 thành lập pháp nhân tại Việt Nam với vai trò Chủ tịch, hoàn thiện cơ cấu kết nối trực tiếp hai nước." } },
  { year: "2023",
    title: { ja: "グループ創業10周年 ／ 熊本イノベーションベース（KUIB）代表理事 就任",
             en: "Ten years of the group; appointed Representative Director of Kumamoto Innovation Base",
             vi: "Kỷ niệm 10 năm; được bổ nhiệm Chủ tịch Kumamoto Innovation Base" },
    body:  { ja: "3月21日に結婚。グループは創業10周年を迎えた。2022年の副代表理事を経て、9月1日にKUIB代表理事へ就任。同年、熊本経済同友会にも入会し、地域の経営者コミュニティでの活動を広げる。（事業上は「澤村友里」の名前を使い続けています）",
             en: "She married on 21 March, and the group marked ten years since its founding. Having served as Deputy Representative Director from 2022, she became Representative Director of KUIB on 1 September, and joined the Kumamoto Association of Corporate Executives the same year. (She continues to use the name Yuri Sawamura professionally.)",
             vi: "Ngày 21/3 kết hôn; tập đoàn tròn 10 năm thành lập. Sau khi làm Phó chủ tịch từ 2022, ngày 1/9 trở thành Chủ tịch KUIB và gia nhập Hiệp hội doanh nhân Kumamoto. (Trong công việc, cô vẫn dùng tên Yuri Sawamura.)" } },
  { year: "2024",
    title: { ja: "熊本県立大学 総合管理学部OBOG会 代表幹事 就任",
             en: "Appointed Representative Secretary of her university alumni association",
             vi: "Được bổ nhiệm Đại diện Hội cựu sinh viên" },
    body:  { ja: "母校の卒業生組織の代表幹事に就任。企業・大学・行政をつなぐ立場から、講演やセミナーでの登壇機会も増えている。",
             en: "She took the lead role in her alma mater's alumni body, and now speaks regularly at events bridging business, academia and government.",
             vi: "Đảm nhận vai trò đại diện hội cựu sinh viên, đồng thời diễn thuyết nhiều hơn ở các sự kiện kết nối doanh nghiệp, đại học và chính quyền." } }
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
    est: { ja: "2013年9月 ／ 熊本", en: "Est. Sep 2013 / Kumamoto", vi: "09/2013 / Kumamoto" },
    role: { ja: "代表取締役社長", en: "President & CEO", vi: "Tổng giám đốc" },
    body: { ja: "人材採用・職業紹介を中核に、通訳翻訳・日本語教育・ベトナム進出支援まで多角的に展開。",
            en: "Recruitment and job placement at its core, extending to interpreting, Japanese-language education and market-entry support.",
            vi: "Cốt lõi là tuyển dụng và giới thiệu việc làm, mở rộng sang phiên dịch, giáo dục tiếng Nhật và hỗ trợ đầu tư." },
    url: "https://www.vietnamtrading.co.jp/"
  },
  {
    name: { ja: "日越協同組合", en: "Nichietsu Cooperative", vi: "Nghiệp đoàn Nichietsu" },
    en: "NICHIETSU COOPERATIVE",
    est: { ja: "2016年1月 ／ 熊本", en: "Est. Jan 2016 / Kumamoto", vi: "01/2016 / Kumamoto" },
    role: { ja: "代表理事", en: "Representative Director", vi: "Chủ tịch" },
    body: { ja: "ベトナム人技能実習生の受入れと、受入企業・実習生双方への支援を担う監理団体。",
            en: "A supervising organisation accepting Vietnamese technical intern trainees and supporting both companies and trainees.",
            vi: "Đoàn thể quản lý tiếp nhận thực tập sinh Việt Nam và hỗ trợ cả doanh nghiệp lẫn thực tập sinh." },
    url: "http://nichietsu.or.jp"
  },
  {
    name: { ja: "有限会社ベトナムトレーディング", en: "Vietnam Trading Co., Ltd. (Vietnam)", vi: "Công ty TNHH Việt Nam Trading" },
    en: "HO CHI MINH CITY, VIETNAM",
    est: { ja: "2017年11月 ／ ベトナム", en: "Est. Nov 2017 / Vietnam", vi: "11/2017 / Việt Nam" },
    role: { ja: "代表取締役会長", en: "Chairperson", vi: "Chủ tịch" },
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
  { label: { ja: "生まれ",   en: "Born",        vi: "Sinh" },
    value: { ja: "1989年9月　ベトナム生まれ（ベトナム系日本人）", en: "September 1989, in Vietnam (Vietnamese-Japanese)", vi: "Tháng 9/1989, tại Việt Nam (người Nhật gốc Việt)" } },
  { label: { ja: "来日",     en: "Came to Japan", vi: "Sang Nhật" },
    value: { ja: "2003年（12歳）　熊本県玉名市に移住し、中学1年生の2学期から日本の学校へ",
             en: "2003, at the age of twelve. Settled in Tamana City, Kumamoto and entered a Japanese school partway through her first year of junior high.",
             vi: "Năm 2003, khi 12 tuổi. Đến TP. Tamana, Kumamoto và vào học trường Nhật từ giữa năm lớp 7." } },
  { label: { ja: "学歴",     en: "Education",   vi: "Học vấn" },
    value: { ja: "北稜高等学校 普通科 ／ 熊本県立大学 総合管理学部（2009年入学・2013年卒業）",
             en: "Hokuryo High School / Prefectural University of Kumamoto, Faculty of Administration (2009–2013)",
             vi: "THPT Hokuryo / Đại học tỉnh lập Kumamoto, Khoa Quản trị tổng hợp (2009–2013)" } },
  { label: { ja: "現在の役職", en: "Current roles", vi: "Chức vụ hiện tại" },
    value: { ja: "ベトナムトレーディング株式会社 代表取締役社長／日越協同組合 代表理事／有限会社ベトナムトレーディング（ベトナム現地法人）代表取締役会長",
             en: "President & CEO, Vietnam Trading Co., Ltd. / Representative Director, Nichietsu Cooperative / Chairperson, Vietnam Trading Co., Ltd. (Vietnam)",
             vi: "Tổng giám đốc Việt Nam Trading / Chủ tịch Nghiệp đoàn Nichietsu / Chủ tịch pháp nhân tại Việt Nam" } },
  { label: { ja: "社外の役職", en: "Other appointments", vi: "Chức vụ khác" },
    value: { ja: "熊本イノベーションベース（KUIB）代表理事／熊本県立大学 総合管理学部OBOG会 代表幹事／熊本経済同友会 会員",
             en: "Representative Director, Kumamoto Innovation Base / Representative Secretary of her university alumni association / Member, Kumamoto Association of Corporate Executives",
             vi: "Chủ tịch Kumamoto Innovation Base / Đại diện Hội cựu sinh viên / Thành viên Hiệp hội doanh nhân Kumamoto" } },
  { label: { ja: "これまでの経験", en: "Background", vi: "Kinh nghiệm" },
    value: { ja: "学生時代にモデル・タレント業、日本語およびベトナム語の講師を経験。人前で話し、伝える仕事を長く続けている。",
             en: "Worked as a model and TV personality in her student years, and taught both Japanese and Vietnamese. Speaking and communicating in front of an audience has been part of her work for a long time.",
             vi: "Từng làm người mẫu, MC và giảng dạy tiếng Nhật, tiếng Việt từ thời sinh viên." } },
  { label: { ja: "家族",     en: "Family",      vi: "Gia đình" },
    value: { ja: "2016年に第一子を出産、2023年に結婚。子育てと3法人の経営を並行している。",
             en: "Gave birth to her first child in 2016 and married in 2023. She runs three companies while raising a family.",
             vi: "Sinh con đầu lòng năm 2016, kết hôn năm 2023. Vừa nuôi con vừa điều hành 3 pháp nhân." } },
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
    title: { ja: "「ゆりと学ぶビジネス日本語」レギュラー配信中（日本語版・ベトナム語版）",
             en: "Host of the regular series “Business Japanese with Yuri”, in Japanese and Vietnamese editions",
             vi: "Chương trình định kỳ “Học tiếng Nhật thương mại cùng Yuri” (bản Nhật và Việt)" },
    url: "https://www.youtube.com/@yurisawamurachannel" },
  { date: "2024-07", kind: "テレビ",
    outlet: { ja: "くまもとLive touch", en: "Kumamoto Live Touch (TV)", vi: "Kumamoto Live Touch (truyền hình)" },
    title: { ja: "外国人材の受入れをめぐる取材で、当グループの取り組みが紹介されました",
             en: "The group's work was featured in a report on employing foreign talent.",
             vi: "Hoạt động của tập đoàn được giới thiệu trong phóng sự về tiếp nhận nhân lực nước ngoài." },
    url: "" }
];
