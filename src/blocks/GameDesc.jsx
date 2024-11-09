import poster from "../assets/images/abcity/7000.jpg"


function GameDesc() {
  return (
    <div className="gameDesc">
      <div className="container-fluid py-4 bg-light">
        <div className="container">
          <img src={poster} alt="" className="img-fluid"/>
          <div className="description py-5">
            <div className="vstack gap-3 text-center text-secondary">
              <p className="fs-5">ABCity -настольная игра, которая поможет выучить как пишутся и читаются первые английские слова. Это
                идеальный старт для тех, кто только начинает изучать английский язык!</p>
              <p className="fs-5">Внутри коробки вы найдёте:</p>
              <p className="fs-5">игровые поля, деревянные пазлы, таблички с картинками, наклейки, комикс-раскраску, набор карточек для
                обучения, историю про Алфавитный город ABCity!</p>
              <p className="fs-5">А разные варианты игры не заставят коробку пылиться на полке.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDesc;