import {FaRegCheckCircle} from "react-icons/fa";
import Button from "./Button.jsx";


function ContactForm() {

  function setDataJson() {
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;
    const subject = document.getElementById("subjectInput").value;
    const message = `Новое сообщение с сайта\n\nИмя: ${name}\nТелефон: ${phone}\nЗапрос: ${subject}\n`;
    const params = {
      chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: message,
    }
    return (JSON.stringify(params));
  }

  function setSendingDone() {
    const status = document.getElementById("sending-status-ok");
    status.classList.remove("d-none");
  }

  function setSendingError() {
    const status = document.getElementById("sending-status-error");
    status.classList.remove("d-none");
  }

  function setSendingInit() {
    const statusOK = document.getElementById("sending-status-ok");
    const statusError = document.getElementById("sending-status-error");
    if (!statusOK.classList.contains("d-none")) {statusOK.classList.add("d-none");}
    if (!statusError.classList.contains("d-none")) {statusError.classList.add("d-none");}
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSendingInit();
    const url = `https://api.telegram.org/${import.meta.env.VITE_TELEGRAM_BOT}/sendMessage`;
    const data = setDataJson();
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: data,
    })
      .then(function(res) {
        if (res.ok) {
          setSendingDone();
        } else {
          setSendingError();
        }
      })
      .catch(function(err) {
        console.log(err);
        setSendingError();
      });
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-2">
        <label htmlFor="nameInput" className="form-label">Укажите ФИО</label>
        <input type="text" className="form-control form-control-sm" name="nameInput" id="nameInput"
               required="required" maxLength="50"/>
      </div>
      <div className="mb-2">
        <label htmlFor="phoneInput" className="form-label">Укажите телефон</label>
        <input type="tel" className="form-control form-control-sm" name="phoneInput" id="phoneInput"
               required="required" maxLength="15"/>
      </div>
      <div className="mb-2">
        <label htmlFor="subjectInput" className="form-label">Выберите предмет</label>
        <select className="form-select form-control-sm" name="subjectInput" id="subjectInput">
          <option value="---Выберите предмет---">---Выберите предмет---</option>
          <option value="Английский">Английский</option>
          <option value="Математика">Математика</option>
          <option value="Чтение">Чтение</option>
          <option value="Китайский">Китайский</option>
          <option value="Испанский">Испанский</option>
          <option value="РКИ">РКИ</option>
          <option value="Постановка произношения">Постановка произношения</option>
          <option value="Лингвострановедение">Лингвострановедение</option>
          <option value="Мастер-класс">Мастер-класс</option>
          <option value="Купить игру">Купить игру</option>
          <option value="Купить сертификат">Купить сертификат</option>
        </select>
      </div>
      <div className="mt-3 hstack gap-3">
        <Button type="submit" value="Отправить" />
        <h3 className="mb-1 d-none" id="sending-status-ok"><FaRegCheckCircle className="text-success"/></h3>
        <h5 className="mb-1 d-none text-danger" id="sending-status-error">Ошибка отправки</h5>
      </div>
    </form>
  );
}

export default ContactForm;