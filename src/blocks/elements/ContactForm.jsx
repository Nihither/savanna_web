


function ContactForm() {
  return (
    <form action="" className="">
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
    </form>
  );
}

export default ContactForm;