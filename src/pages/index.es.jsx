import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import HomePage from "./HomePage";

const IndexPage = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/es/"
      />
      <AppWrapper {...props} lang="es">
        <HomePage />
      </AppWrapper>
    </>
  );
};

export default IndexPage;
