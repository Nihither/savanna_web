import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx";
import Stuff from "../blocks/Stuff.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";
import Subjects from "../blocks/Subjects.jsx";




function Chinese() {

  const p_conf = page_config.chinese;
  const section = p_conf.section;

  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={p_conf.page_title}/>
      <FirstLessonBanner/>
      <Subjects subjects={p_conf.subjects} section={section} buttonValue={"Записаться на первый урок"}/>
      <Stuff stuff_ids={p_conf.stuff_ids}/>
      <ContactUs contactUs={p_conf.contactUs} section={section}/>
      <Footer/>
    </>
  );
}

export default Chinese;