import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import CubeGridNorth from "./cube-grids/CubeGridNorth";
import CubeGridEast from "./cube-grids/CubeGridEast";
import CubeGridSouth from "./cube-grids/CubeGridSouth";
import CubeGridWest from "./cube-grids/CubeGridWest";
import VisualBlock from "./VisualBlock";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";

const Claims = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();
  const itemRef = useScrollRevealEffect({
    delay: 0.2,
    stagger: 0.1,
    toggleClass: "appear",
  });
  const itemRef2 = useScrollRevealEffect({
    delay: 0.3,
    stagger: 0.1,
    toggleClass: "appear",
  });
  const itemRef3 = useScrollRevealEffect({
    delay: 0.3,
    stagger: 0.1,
    toggleClass: "appear",
  });
  const itemRef4 = useScrollRevealEffect({
    delay: 0.3,
    stagger: 0.1,
    toggleClass: "appear",
  });

  return (
    <Brick skin="dark" className="claims">
      <h1 className="beta" ref={titleRef}>
        {t("claims:title")}
      </h1>
      <VisualBlock
        ref={itemRef}
        title="claims:section1:title"
        visual={<CubeGridNorth />}
        texts={
          <>
            <p className="basic-text">{t("claims:section1:text1")}</p>
            <p className="basic-text">{t("claims:section1:text2")}</p>
            <p className="basic-text">{t("claims:section1:text3")}</p>
          </>
        }
      />
      <VisualBlock
        ref={itemRef2}
        title="claims:section2:title"
        reverse
        visual={<CubeGridEast />}
        texts={
          <>
            <p className="basic-text">{t("claims:section1:text1")}</p>
            <p className="basic-text">{t("claims:section1:text2")}</p>
            <p className="basic-text">{t("claims:section1:text3")}</p>
          </>
        }
      />
      <VisualBlock
        ref={itemRef3}
        title="claims:section3:title"
        visual={<CubeGridSouth />}
        texts={
          <>
            <p className="basic-text">{t("claims:section1:text1")}</p>
            <p className="basic-text">{t("claims:section1:text2")}</p>
            <p className="basic-text">{t("claims:section1:text3")}</p>
          </>
        }
      />
      <VisualBlock
        ref={itemRef4}
        title="claims:section4:title"
        visual={<CubeGridWest />}
        reverse
        texts={
          <>
            <p className="basic-text">{t("claims:section1:text1")}</p>
            <p className="basic-text">{t("claims:section1:text2")}</p>
            <p className="basic-text">{t("claims:section1:text3")}</p>
          </>
        }
      />
    </Brick>
  );
};

export default Claims;
