import {FaMoneyBills, FaRegHandshake, FaRegPenToSquare} from "react-icons/fa6";


function ChooseSavanna() {
  return (
    <div className="choose-savanna container-fluid bg-light">
      <div className="container py-5">
        <div className="row g-lg-5 g-4">
          <div className="col-lg-5 text-center text-lg-start">
            <h1>Почему стоит выбрать Savanna ABC?</h1>
          </div>
          <div className="col-lg-7 py-lg-3">
            <div className="vstack gap-4 text-center text-lg-start">
              <div>
                <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5">
                  <h2><FaRegPenToSquare/></h2>
                  <div>
                    <h2>Индивидуальный подход</h2>
                    <p className="text-secondary">Индивидуальный подход — это основной принцип нашей работы.
                      Мы составляем план занятий, выбираем темы и нагрузку для каждого ученика,
                      основываясь на его пожеланиях, целях, возможностях и интересах.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5">
                  <h2><FaRegHandshake/></h2>
                  <div>
                    <h2>Честная политика</h2>
                    <p className="text-secondary">Два первых урока для каждого ученика проходят без оплаты,
                      чтобы Вы могли познакомиться с педагогом и методикой преподавания.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5">
                  <h2><FaMoneyBills/></h2>
                  <div>
                    <h2>Выгодные условия</h2>
                    <p className="text-secondary">Гибкая система оплаты занятий, цены, доступные каждому.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSavanna;