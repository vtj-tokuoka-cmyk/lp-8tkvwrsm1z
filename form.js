/* =========================================================================
   お問い合わせフォーム
   FORM_ENDPOINT（data.js）に Google Apps Script のURLを入れると
   そこへ送信されます。空の場合はメールソフトが開きます。
   ========================================================================= */

function renderForm() {
  const side = document.getElementById("form-side");
  const form = document.getElementById("cform");
  if (!form) return;

  if (side) {
    side.innerHTML = `
      <p class="lead">${T("formLead")}</p>
      <div class="tel-box">
        <span>${T("orPhone")}</span>
        <a href="tel:${CONTACT_TEL}">${CONTACT_TEL_LABEL}</a>
      </div>`;
  }

  const types = INQUIRY_TYPES.map((t, i) => `
    <label class="type${i === 0 ? " on" : ""}">
      <input type="radio" name="type" value="${esc(t.value)}"${i === 0 ? " checked" : ""}>
      <span><b>${esc(L(t.label))}</b><small>${esc(L(t.desc))}</small></span>
    </label>`).join("");

  form.innerHTML = `
    <div class="fgroup">
      <span class="flabel">${T("fType")}<span class="req">${T("fRequired")}</span></span>
      <div class="types">${types}</div>
    </div>
    <div class="frow">
      <div class="fgroup">
        <label for="f-name">${T("fName")}<span class="req">${T("fRequired")}</span></label>
        <input id="f-name" name="name" type="text" required autocomplete="name">
      </div>
      <div class="fgroup">
        <label for="f-org">${T("fCompany")}<span class="opt">${T("fOptional")}</span></label>
        <input id="f-org" name="company" type="text" autocomplete="organization">
      </div>
    </div>
    <div class="frow">
      <div class="fgroup">
        <label for="f-mail">${T("fEmail")}<span class="req">${T("fRequired")}</span></label>
        <input id="f-mail" name="email" type="email" required autocomplete="email">
      </div>
      <div class="fgroup">
        <label for="f-tel">${T("fTel")}<span class="opt">${T("fOptional")}</span></label>
        <input id="f-tel" name="tel" type="tel" autocomplete="tel">
      </div>
    </div>
    <div class="frow">
      <div class="fgroup">
        <label for="f-date">${T("fDate")}<span class="opt">${T("fOptional")}</span></label>
        <input id="f-date" name="eventdate" type="text" placeholder="2026-11-14">
      </div>
      <div class="fgroup">
        <label for="f-place">${T("fPlace")}<span class="opt">${T("fOptional")}</span></label>
        <input id="f-place" name="place" type="text">
      </div>
    </div>
    <div class="fgroup">
      <label for="f-body">${T("fBody")}<span class="req">${T("fRequired")}</span></label>
      <textarea id="f-body" name="message" required placeholder="${esc(T("fBodyPh"))}"></textarea>
    </div>
    <button type="submit" class="btn btn-r" id="f-submit">${T("fSubmit")}</button>
    <div class="fmsg" id="f-msg"></div>`;

  /* ラジオの見た目 */
  form.querySelectorAll(".type input").forEach(r => {
    r.addEventListener("change", () => {
      form.querySelectorAll(".type").forEach(t => t.classList.remove("on"));
      if (r.checked) r.closest(".type").classList.add("on");
    });
  });

  form.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById("f-msg");
  const btn = document.getElementById("f-submit");
  msg.className = "fmsg";

  /* 入力チェック */
  const need = ["name", "email", "message"];
  for (const n of need) {
    const el = form.elements[n];
    if (!el.value.trim()) { el.focus(); el.reportValidity && el.reportValidity(); return; }
  }
  const mail = form.elements.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    form.elements.email.focus();
    msg.className = "fmsg ng"; msg.textContent = "メールアドレスの形式をご確認ください / Please check the email address";
    return;
  }

  const data = {
    type:      form.elements.type.value,
    name:      form.elements.name.value.trim(),
    company:   form.elements.company.value.trim(),
    email:     mail,
    tel:       form.elements.tel.value.trim(),
    eventdate: form.elements.eventdate.value.trim(),
    place:     form.elements.place.value.trim(),
    message:   form.elements.message.value.trim(),
    lang:      LANG,
    page:      location.href
  };

  /* 送信先が未設定 → メールソフトを開く */
  if (!FORM_ENDPOINT) {
    const body = [
      `【ご依頼の種類】${data.type}`,
      `【お名前】${data.name}`,
      `【会社・団体名】${data.company}`,
      `【メールアドレス】${data.email}`,
      `【お電話番号】${data.tel}`,
      `【開催予定日】${data.eventdate}`,
      `【開催場所】${data.place}`,
      "",
      "【ご相談内容】",
      data.message
    ].join("\n");
    location.href = "mailto:" + CONTACT_MAIL
      + "?subject=" + encodeURIComponent("[HP] " + data.type + " / " + data.name)
      + "&body=" + encodeURIComponent(body);
    msg.className = "fmsg ok";
    msg.innerHTML = T("fMailFall");
    return;
  }

  /* Apps Script へ送信 */
  btn.disabled = true;
  btn.textContent = T("fSending");
  fetch(FORM_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data)
  }).then(() => {
    msg.className = "fmsg ok";
    msg.innerHTML = T("fDone");
    form.reset();
    form.querySelectorAll(".type").forEach((t, i) => t.classList.toggle("on", i === 0));
    const first = form.querySelector(".type input"); if (first) first.checked = true;
  }).catch(() => {
    msg.className = "fmsg ng";
    msg.innerHTML = T("fError");
  }).finally(() => {
    btn.disabled = false;
    btn.textContent = T("fSubmit");
  });
}
