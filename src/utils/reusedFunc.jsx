export function buildCardBody(conf_body) {
  const body = conf_body.map((item) => {
    if (Array.isArray(item)) {
      return (
        // eslint-disable-next-line react/jsx-key
        <ul className="text-start">
          {/* eslint-disable-next-line react/jsx-key */}
          {item.map((i) => <li>{i}</li>)}
        </ul>
      )
    } else if (typeof item === "string") {
      // eslint-disable-next-line react/jsx-key
      return (<p>{item}</p>)
    }
  });
  return (body);
}