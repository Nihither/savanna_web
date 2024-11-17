export function buildCardBody(conf_body) {
  const body = conf_body.map((item, i) => {
    if (Array.isArray(item)) {
      return (
        <ul key={i} className="text-start">
          {item.map((subitem, j) => <li key={j}>{subitem}</li>)}
        </ul>
      )
    } else if (typeof item === "string") {
      return (<p key={i}>{item}</p>)
    }
  });
  return (body);
}