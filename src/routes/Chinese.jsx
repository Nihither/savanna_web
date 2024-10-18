import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx";
import Stuff from "../blocks/Stuff.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";


const p_conf = page_config.chinese;

function Chinese() {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={p_conf.page_title}/>
      <FirstLessonBanner/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Chinese;