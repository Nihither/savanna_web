import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";
import GameDesc from "../blocks/GameDesc.jsx";
import GameParts from "../blocks/GameParts.jsx";


function ABCity() {

  const p_conf = page_config.abcity;
  const section = p_conf.section;

  return (
    <>
      <ContactsHeader />
      <NavBar />
      <Hero  page_title={p_conf.page_title}/>
      <GameDesc />
      <GameParts  parts={p_conf.parts} section={section}/>
      <ContactUs contactUs={p_conf.contactUs} section={section}/>
      <Footer />
    </>
  );
}

export default ABCity;