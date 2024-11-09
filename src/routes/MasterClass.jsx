import page_config from "../configs/pages_conf.json";
import ContactsHeader from "../blocks/ContactsHeader.jsx";
import NavBar from "../blocks/NavBar.jsx";
import Hero from "../blocks/Hero.jsx";
import ContactUs from "../blocks/ContactUs.jsx";
import Footer from "../blocks/Footer.jsx";
import MasterClasses from "../blocks/MasterClasses.jsx";
import MasterClassAddress from "../blocks/MasterClassAddress.jsx";


function MasterClass() {

  const p_conf = page_config.master_class;

  return (
    <>
      <ContactsHeader />
      <NavBar />
      <Hero  page_title={p_conf.page_title}/>
      <MasterClasses classes={p_conf.classes} section={p_conf.section}/>
      <MasterClassAddress />
      <ContactUs />
      <Footer />
    </>
  );
}

export default MasterClass;