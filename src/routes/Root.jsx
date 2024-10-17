import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx"
import NavBar from "../blocks/NavBar.jsx"
import Hero from "../blocks/Hero.jsx"
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx"
import CertBanner from "../blocks/CertBanner.jsx"
import Footer from "../blocks/Footer.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Stuff from "../blocks/Stuff.jsx";
import ChooseSavanna from "../blocks/ChooseSavanna.jsx";
import SocialNetworks from "../blocks/SocialNetworks.jsx";
import Subject from "../blocks/Subject.jsx";


const p_conf = page_config.root;

function Root () {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={p_conf.page_title}/>
      <FirstLessonBanner/>
      <CertBanner/>
      <Subject/>
      <ChooseSavanna/>
      <SocialNetworks/>
      <Stuff/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Root;