import page_config from "../configs/pages_conf.json";
import NavBar from "../blocks/NavBar.jsx";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import Hero from "../blocks/Hero.jsx";


const p_conf = page_config.error404;

function Error404() {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={p_conf.page_title}/>
    </>
  );
}

export default Error404;