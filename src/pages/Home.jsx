import React from "react";
import TopBar from "../components/TopBar/TopBar";
import NavBarCustom from "../components/NavBarCustom/NavBarCustom";
import logo from "./../assets/logo.png";
import Hero from "../components/Hero/Hero";
import SectionEmergecy from "../components/SectionEmergecy/SectionEmergecy";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import SectionService from "../components/SectionService/SectionService";
import SectionAppointment from "../components/SectionAppointment/SectionAppointment";
import SectionDepartments from "../components/SectionDepartments/SectionDepartments";
import SectionDoctors from "../components/SectionDoctors/SectionDoctors";
import SectionTestomonials from "../components/SectionTestomonials/SectionTestomonials";
import SectionPricing from "../components/SectionPricing/SectionPricing";
import SectionFrequentlyAsked from "../components/SectionFrequentlyAsked/SectionFrequentlyAsked";
import SectionContact from "../components/SectionContact/SectionContact";
import Footer from "../components/Footer/Footer";
import MoveUpBUtton from "../components/MoveUpBUtton/MoveUpBUtton";

const Home = () => {
  return (
    <>
      <TopBar
        time="Monday-Saturday, 8AM to 10AM"
        contact="call us now +1 2541 12569 45"
      />
      <NavBarCustom img={logo} buttonText="Make An Appointment" />
      <Hero />
      <SectionEmergecy
        title="Lorem ipsum dolor sit amet?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Expedita molestiae saepe deserunt facilis eveniet nesciunt quae eum et non dolores."
        button="Make an Appointment"
      />
      <SectionAbout />
      <SectionService />
      <SectionAppointment />
      <SectionDepartments />
      <SectionTestomonials />
      <SectionDoctors />
      <SectionPricing />
      <SectionFrequentlyAsked />
      <SectionContact />
      <Footer />
      <MoveUpBUtton />
    </>
  );
};

export default Home;
