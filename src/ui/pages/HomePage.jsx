import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Values from "../components/Values";
import About from "../components/About";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Quote from "../components/Quote";
import Services from "../components/Services";
import MapBlock from "../components/MapBlock";
import AuctaBrick from "../components/AuctaBrick";
import Approach from "../components/Approach";

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <MainLayout>
      <Hero />
      <Services />
      <AuctaBrick />
      <Approach />
      <Cta
        title="cta:title"
        text="cta:text"
        buttonText="action:start-working"
      />
      <About />
      <Cta
        skin="dark"
        clearButton
        title="cta2:title"
        text="cta2:text"
        buttonText="action:tell-us-your-project"
      />
      <Values />
      <MapBlock />
      <Quote
        text="quote:text"
        author="Daniel Seiler"
        position="quote:daniel-position"
      />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
