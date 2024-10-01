import ContactsHeader from "../blocks/ContactsHeader.jsx"
import NavBar from "../blocks/NavBar.jsx"
import Hero from "../blocks/Hero.jsx"
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx"
import CertBanner from "../blocks/CertBanner.jsx"


function Root () {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero/>
      <FirstLessonBanner/>
      <CertBanner/>
      <div className="vh-100 bg-dark"></div>
    </>
  );
}

export default Root;