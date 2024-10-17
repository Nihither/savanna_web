import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx";
import Subject from "../blocks/Subject.jsx";
import Stuff from "../blocks/Stuff.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";


function Children() {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={"Детям"}/>
      <FirstLessonBanner/>
      <Subject/>
      {/*TODO add master-class*/}
      <Stuff/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Children;