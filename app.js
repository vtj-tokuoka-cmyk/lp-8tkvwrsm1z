/* =========================================================================
   澤村友里 LP  共通スクリプト
   言語切替 / ヘッダー・フッターの共通描画 / スクロール演出
   ========================================================================= */

/* ---------- UI文言（3言語） ---------- */
const UI = {
  /* 共通 */
  name:        { ja: "澤村 友里",  en: "Yuri Sawamura", vi: "Yuri Sawamura" },
  nameSur:     { ja: "澤村",       en: "Yuri",          vi: "Yuri" },
  nameGiven:   { ja: "友里",       en: "Sawamura",      vi: "Sawamura" },
  roleLine1:   { ja: "ベトナムトレーディング株式会社 代表取締役社長", en: "President & CEO, Vietnam Trading Co., Ltd.", vi: "Tổng giám đốc Công ty CP Việt Nam Trading" },
  roleLine2:   { ja: "日越協同組合 理事長", en: "Chairperson, Nichietsu Cooperative", vi: "Chủ tịch Nghiệp đoàn Nichietsu" },
  roleLine3:   { ja: "VIETNAM TRADING CO., LTD.（ホーチミン）会長", en: "Chairperson, Vietnam Trading Co., Ltd. (Ho Chi Minh)", vi: "Chủ tịch VIETNAM TRADING CO., LTD. (TP.HCM)" },

  /* ナビ */
  navProfile:  { ja: "プロフィール", en: "Profile",   vi: "Hồ sơ" },
  navKodawari: { ja: "こだわり",     en: "My Values", vi: "Giá trị" },
  navLecture:  { ja: "講演実績",     en: "Speaking",  vi: "Diễn thuyết" },
  navBlog:     { ja: "ブログ",       en: "Blog",      vi: "Blog" },
  navGallery:  { ja: "ギャラリー",   en: "Gallery",   vi: "Thư viện ảnh" },
  navGroup:    { ja: "グループ",     en: "Group",     vi: "Tập đoàn" },
  navContact:  { ja: "お問い合わせ", en: "Contact",   vi: "Liên hệ" },
  navCta:      { ja: "講演を依頼する", en: "Book a talk", vi: "Mời diễn thuyết" },

  /* ヒーロー */
  heroEyebrow: { ja: "講演・イベント出演のご依頼を承ります", en: "Available for talks and events", vi: "Nhận lời mời diễn thuyết và sự kiện" },
  heroLead:    { ja: "ホーチミンに生まれ、熊本で育った。<br>ふたつの故郷を知る経営者が、現場の言葉で語ります。",
                 en: "Born in Ho Chi Minh City, raised in Kumamoto.<br>An executive who knows both homes, speaking in the language of the field.",
                 vi: "Sinh ra tại TP.HCM, lớn lên ở Kumamoto.<br>Một nhà quản lý hiểu cả hai quê hương, nói bằng ngôn ngữ của hiện trường." },
  heroBtn1:    { ja: "講演を依頼する", en: "Book a talk",     vi: "Mời diễn thuyết" },
  heroBtn2:    { ja: "講演実績を見る", en: "See past talks",  vi: "Xem hoạt động" },
  scroll:      { ja: "SCROLL", en: "SCROLL", vi: "SCROLL" },

  /* 数字 */
  statTalks:   { ja: "これまでの登壇", en: "Talks delivered", vi: "Buổi đã diễn thuyết" },
  statSince:   { ja: "学生起業から",   en: "Founded as a student", vi: "Khởi nghiệp sinh viên" },
  statGroup:   { ja: "日越グループ法人", en: "Group entities", vi: "Pháp nhân trong tập đoàn" },
  statLang:    { ja: "日本語・ベトナム語", en: "Japanese & Vietnamese", vi: "Tiếng Nhật & Việt" },
  unitTimes:   { ja: "回〜",  en: "+",  vi: "+" },
  unitYear:    { ja: "年",   en: "",   vi: "" },
  unitCorp:    { ja: "法人", en: "",   vi: "" },
  unitLang:    { ja: "言語", en: "languages", vi: "ngôn ngữ" },

  /* セクション見出し */
  secTopics:   { ja: "講演テーマ",         en: "Speaking Topics",  vi: "Chủ đề diễn thuyết" },
  secTopicsLead:{ ja: "ご要望に応じて、対象や時間に合わせて構成します。下記以外のテーマもご相談ください。",
                  en: "Each talk is shaped around your audience and time slot. Other topics can be arranged on request.",
                  vi: "Mỗi buổi nói chuyện được thiết kế theo đối tượng và thời lượng. Các chủ đề khác xin vui lòng trao đổi." },
  secLecture:  { ja: "講演・出演の実績",   en: "Speaking History",  vi: "Hoạt động diễn thuyết" },
  secUpcoming: { ja: "開催予定",           en: "Upcoming",          vi: "Sắp diễn ra" },
  secPast:     { ja: "これまでの登壇",     en: "Past appearances",  vi: "Đã diễn ra" },
  secProfile:  { ja: "澤村友里について",   en: "About Yuri Sawamura", vi: "Về Yuri Sawamura" },
  secStory:    { ja: "歩み",               en: "Journey",           vi: "Hành trình" },
  secKodawari: { ja: "澤村友里のこだわり", en: "What I Insist On",  vi: "Điều tôi luôn giữ" },
  secGroup:    { ja: "グループ体制",       en: "Our Group",         vi: "Tập đoàn" },
  secGroupLead:{ ja: "日本とベトナムにまたがる3法人と、それを支える関連サービス。各サイトへは下のカードから移動できます。",
                 en: "Three entities across Japan and Vietnam, plus the services that support them. Follow any card to its own site.",
                 vi: "Ba pháp nhân tại Nhật và Việt Nam, cùng các dịch vụ liên quan. Nhấn vào thẻ để đến trang riêng." },
  secServices: { ja: "関連サービス",       en: "Related Services",  vi: "Dịch vụ liên quan" },
  secBlog:     { ja: "ブログ",             en: "Blog",              vi: "Blog" },
  secGallery:  { ja: "フォトギャラリー",   en: "Photo Gallery",     vi: "Thư viện ảnh" },
  secAlbums:   { ja: "写真集・フォト集",   en: "Photo Books",       vi: "Bộ ảnh" },
  secContact:  { ja: "お問い合わせ",       en: "Contact",           vi: "Liên hệ" },
  secIndex:    { ja: "目次",               en: "Contents",          vi: "Mục lục" },

  /* ボタン */
  moreLecture: { ja: "講演実績をすべて見る", en: "View all speaking history", vi: "Xem tất cả hoạt động" },
  moreBlog:    { ja: "ブログをすべて見る",   en: "Read all posts",            vi: "Xem tất cả bài viết" },
  moreGallery: { ja: "ギャラリーをすべて見る", en: "View full gallery",       vi: "Xem toàn bộ thư viện" },
  visitSite:   { ja: "サイトを見る",         en: "Visit site",                vi: "Xem trang" },
  viewAlbum:   { ja: "写真集を見る",         en: "View photo book",           vi: "Xem bộ ảnh" },
  readMore:    { ja: "続きを読む",           en: "Read more",                 vi: "Đọc tiếp" },
  backToList:  { ja: "← 一覧にもどる",       en: "← Back to list",            vi: "← Quay lại danh sách" },
  preparing:   { ja: "準備中",               en: "Coming soon",               vi: "Đang chuẩn bị" },

  /* フォーム */
  formLead:    { ja: "講演・MC・その他のご相談は、こちらのフォームからお送りください。内容を確認のうえ、2〜3営業日以内にご返信いたします。",
                 en: "Please use the form below for speaking, MC or any other enquiry. We usually reply within two to three business days.",
                 vi: "Vui lòng dùng biểu mẫu dưới đây cho mọi yêu cầu. Chúng tôi thường phản hồi trong 2–3 ngày làm việc." },
  fType:       { ja: "ご依頼の種類", en: "Type of enquiry",  vi: "Loại yêu cầu" },
  fName:       { ja: "お名前",       en: "Your name",        vi: "Họ và tên" },
  fCompany:    { ja: "会社・団体名", en: "Organisation",     vi: "Tổ chức" },
  fEmail:      { ja: "メールアドレス", en: "Email",          vi: "Email" },
  fTel:        { ja: "お電話番号",   en: "Phone",            vi: "Số điện thoại" },
  fDate:       { ja: "開催予定日",   en: "Event date",       vi: "Ngày tổ chức" },
  fPlace:      { ja: "開催場所",     en: "Location",         vi: "Địa điểm" },
  fBody:       { ja: "ご相談内容",   en: "Your message",     vi: "Nội dung" },
  fBodyPh:     { ja: "対象者・人数・ご予算・ご希望のテーマなど、決まっている範囲でお書きください。",
                 en: "Audience, headcount, budget, preferred topic — whatever you already know.",
                 vi: "Đối tượng, số lượng, ngân sách, chủ đề mong muốn — những gì đã xác định." },
  fRequired:   { ja: "必須",   en: "required", vi: "bắt buộc" },
  fOptional:   { ja: "任意",   en: "optional", vi: "tùy chọn" },
  fSubmit:     { ja: "この内容で送信する", en: "Send enquiry", vi: "Gửi yêu cầu" },
  fSending:    { ja: "送信中…", en: "Sending…", vi: "Đang gửi…" },
  fDone:       { ja: "送信しました。ありがとうございます。<br>2〜3営業日以内にご返信いたします。",
                 en: "Thank you — your message has been sent.<br>We will reply within two to three business days.",
                 vi: "Cảm ơn bạn — tin nhắn đã được gửi.<br>Chúng tôi sẽ phản hồi trong 2–3 ngày làm việc." },
  fError:      { ja: "送信に失敗しました。お手数ですが、お電話またはメールでご連絡ください。",
                 en: "Sending failed. Please contact us by phone or email instead.",
                 vi: "Gửi thất bại. Vui lòng liên hệ qua điện thoại hoặc email." },
  fMailFall:   { ja: "メールソフトが開きます。そのまま送信してください。",
                 en: "Your mail app will open — please send the message from there.",
                 vi: "Ứng dụng email sẽ mở ra — vui lòng gửi từ đó." },
  orPhone:     { ja: "お急ぎの場合はお電話でも承ります", en: "For urgent enquiries, please call", vi: "Trường hợp gấp, xin gọi điện" },

  /* サンプル注意書き */
  sampleNote:  { ja: "※ 表示中のデータはサンプルです。data.js を書き換えると実際の内容に差し替わります。",
                 en: "Note: the entries shown are sample data. Edit data.js to replace them.",
                 vi: "Lưu ý: dữ liệu hiển thị là mẫu. Hãy chỉnh sửa data.js để thay thế." },

  /* フッター */
  ftTagline:   { ja: "日本とベトナムをつなぐ架け橋となり、日越両国100年先の未来のために行動する。",
                 en: "Be the bridge between Japan and Vietnam, and act for the next hundred years of both countries.",
                 vi: "Trở thành cầu nối Nhật – Việt, hành động vì tương lai 100 năm tới của hai nước." },
  ftMenu:      { ja: "メニュー",   en: "Menu",     vi: "Menu" },
  ftGroupSite: { ja: "グループサイト", en: "Group sites", vi: "Trang của tập đoàn" }
};

/* ---------- 言語 ---------- */
const LANGS = [
  { key: "ja", label: "日本語" },
  { key: "en", label: "EN" },
  { key: "vi", label: "VN" }
];
let LANG = "ja";
try { LANG = localStorage.getItem("yslp_lang") || "ja"; } catch (e) { }
if (!LANGS.some(l => l.key === LANG)) LANG = "ja";

/* 多言語オブジェクトから今の言語の値を取り出す。文字列ならそのまま返す */
function L(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "string" || Array.isArray(v)) return v;
  return v[LANG] || v.ja || v.en || "";
}
/* UI文言のショートカット */
function T(key) { return L(UI[key]); }

function setLang(lang) {
  LANG = lang;
  try { localStorage.setItem("yslp_lang", lang); } catch (e) { }
  document.documentElement.lang = lang;
  render();
}

/* ---------- 日付の表示 ---------- */
function fmtDate(s) {
  const p = String(s).split("-");
  const y = p[0], m = p[1], d = p[2];
  if (LANG === "ja") return d ? `${y}年${+m}月${+d}日` : `${y}年${+m}月`;
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mm = MON[+m - 1] || m;
  if (LANG === "vi") return d ? `${+d}/${+m}/${y}` : `${+m}/${y}`;
  return d ? `${mm} ${+d}, ${y}` : `${mm} ${y}`;
}
function fmtDateShort(s) {
  const p = String(s).split("-");
  return { y: p[0], md: p[2] ? `${+p[1]}.${+p[2]}` : `${+p[1]}` };
}

/* ---------- HTMLエスケープ ---------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- ヘッダー / フッター ---------- */
const NAV_ITEMS = [
  { key: "navProfile",  href: "index.html#profile" },
  { key: "navKodawari", href: "index.html#kodawari" },
  { key: "navLecture",  href: "lecture.html" },
  { key: "navBlog",     href: "blog.html" },
  { key: "navGallery",  href: "gallery.html" },
  { key: "navGroup",    href: "index.html#group" }
];

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const cur = host.dataset.cur || "";
  const onTop = /(^|\/)(index\.html)?$/.test(location.pathname.split("/").pop() || "index.html");
  const nav = NAV_ITEMS.map(it => {
    let href = it.href;
    if (onTop && href.startsWith("index.html#")) href = href.slice("index.html".length);
    const isCur = cur && href.indexOf(cur) === 0;
    return `<a class="navlink${isCur ? " cur" : ""}" href="${href}">${T(it.key)}</a>`;
  }).join("");
  const langBtns = LANGS.map(l =>
    `<button type="button" data-lang="${l.key}" class="${l.key === LANG ? "on" : ""}">${l.label}</button>`
  ).join("");
  host.innerHTML = `
    <div class="brand"><span class="dot"></span>
      <span>${T("name")}<small>YURI SAWAMURA</small></span>
    </div>
    <button class="burger" id="burger" aria-label="menu"><span></span><span></span><span></span></button>
    <nav id="nav">
      ${nav}
      <a class="navlink nav-cta" href="${onTop ? "#contact" : "index.html#contact"}">${T("navCta")}</a>
      <div class="lang">${langBtns}</div>
    </nav>`;
  host.querySelectorAll(".lang button").forEach(b =>
    b.onclick = () => setLang(b.dataset.lang));
  const burger = document.getElementById("burger"), navEl = document.getElementById("nav");
  burger.onclick = () => { burger.classList.toggle("on"); navEl.classList.toggle("open"); };
  navEl.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => { burger.classList.remove("on"); navEl.classList.remove("open"); }));
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  const menu = NAV_ITEMS.map(it => `<a href="${it.href}">${T(it.key)}</a>`).join("");
  const sites = GROUP.filter(g => g.url).map(g =>
    `<a href="${g.url}" target="_blank" rel="noopener">${L(g.name)} ↗</a>`).join("")
    + SERVICES.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${L(s.name)} ↗</a>`).join("");
  host.innerHTML = `
    <div class="ft-top">
      <div>
        <div class="ft-brand">${T("name")}<small>YURI SAWAMURA</small></div>
        <p style="max-width:26em;margin-top:16px;font-size:13px;color:var(--ink-2)">${T("ftTagline")}</p>
        <div class="sns" style="margin-top:20px">
          <a href="${SNS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.39C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12.66.67 1.33 1.09 2.12 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.39.67-.66 1.09-1.33 1.39-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.39-2.12C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z"/><path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z"/><circle cx="18.41" cy="5.59" r="1.44"/></svg>
          </a>
        </div>
      </div>
      <div class="ft-col"><h5>${T("ftMenu")}</h5>${menu}</div>
      <div class="ft-col"><h5>${T("ftGroupSite")}</h5>${sites}</div>
    </div>
    <div class="ft-btm">
      <div>© 2013–2026 VIETNAM TRADING ／ KUMAMOTO・HO CHI MINH</div>
      <div><a href="tel:${CONTACT_TEL}">${CONTACT_TEL_LABEL}</a></div>
    </div>`;
}

/* ---------- スクロール演出 ---------- */
let _io = null;
function bindReveal() {
  if (_io) _io.disconnect();
  _io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); _io.unobserve(e.target); } });
  }, { threshold: .1, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".rv:not(.in)").forEach((el, i) => {
    el.style.transitionDelay = (i % 4 * 70) + "ms";
    _io.observe(el);
  });
}

function bindScroll() {
  const bar = document.getElementById("bar"), hd = document.getElementById("site-header");
  function onScroll() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + "%";
    if (hd) hd.classList.toggle("solid", window.scrollY > 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- サンプル注意書き ---------- */
function sampleNote() {
  return SAMPLE_MODE ? `<p class="sample-note">${T("sampleNote")}</p>` : "";
}

/* ---------- 起動 ---------- */
function render() {
  document.documentElement.lang = LANG;
  renderHeader();
  renderFooter();
  if (typeof renderPage === "function") renderPage();
  bindReveal();
}
document.addEventListener("DOMContentLoaded", () => { render(); bindScroll(); });
