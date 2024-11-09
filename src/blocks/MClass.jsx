import PropTypes from "prop-types";
import Card from "./elements/Card.jsx";


function MClass(props) {

  const title = props.item.title;
  const desc = props.item.desc;
  const cards = props.item.cards.map((card, i) =>
    <Card key={i} card={card} section={props.section}/>
  )

  return (
    <div className="m-class container text-center py-4">
      <h1 className="display-4 mb-4">{title}</h1>
      <p className="fs-5 text-secondary mx-lg-5 px-lg-5 mb-5">{desc}</p>
      <div className="row mb-5">
        {cards}
      </div>
    </div>
  );
}

MClass.propTypes = {
  item: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
}

export default MClass;