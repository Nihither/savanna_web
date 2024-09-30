import NavBar from "../blocks/NavBar.jsx"
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import Hero from "../blocks/Hero.jsx"
import FirstLessonBanner from "../blocks/FirstLessonBanner.jsx";


function Root () {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero/>
      <FirstLessonBanner/>
      <div className="vh-100 bg-dark"></div>
    </>
  );
}

export default Root;