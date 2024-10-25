import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx";
import Stuff from "../blocks/Stuff.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";
import Offers from "../blocks/Offers.jsx";
import SubjectsMini from "../blocks/SubjectsMini.jsx";


const p_conf = page_config.company;

function Company() {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={p_conf.page_title}/>
      <FirstLessonBanner/>
      <Offers offers={p_conf.offers}/>
      <SubjectsMini subjects={p_conf.subjects}/>
      <Stuff stuff_ids={p_conf.stuff_ids}/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Company;