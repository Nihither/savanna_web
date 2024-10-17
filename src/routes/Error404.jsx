import NavBar from "../blocks/NavBar.jsx";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import Hero from "../blocks/Hero.jsx";
import Footer from "../blocks/Footer.jsx";


function Error404() {
  return (
    <>
      <ContactsHeader/>
      <NavBar/>
      <Hero page_title={"Страница не найдена"}/>
    </>
  );
}

export default Error404;