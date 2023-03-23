import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import { ReactComponent as Tick } from "../../assets/icons/icon-tick-circle.svg";
import BlockItemSimple from "./BlockItemSimple";
import Step from "../components/Step";

const Approach = () => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect();
  // const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick className="approach" id="approach">
      <div className="approach-grid" ref={blockRef}>
        <div className="approach-col">
          <p className="pre-title tag">{t("approach:name")}</p>
          <h1 className="beta">{t("approach:title")}</h1>
          <p className="intro-text">{t("approach:intro-text")}</p>
        </div>
        <div className="approach-col">
          <ul className="approach-steps">
            <Step
              number={1}
              title="approach:step1:title"
              text="approach:step1:text"
            />
            <Step
              number={2}
              title="approach:step2:title"
              text="approach:step2:text"
            />
            <Step
              number={3}
              title="approach:step3:title"
              text="approach:step3:text"
            />
          </ul>
        </div>
      </div>
      <h3 className="gamma centered">{t("approach:section2:title")}</h3>
      <div className="block-list is-simple">
        <BlockItemSimple
          text="approach:claim1"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim2"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim3"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim4"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim5"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim6"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim7"
          icon={<Tick />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="approach:claim8"
          icon={<Tick />}
          ref={blockRef}
        />
      </div>
    </Brick>
  );
};

export default Approach;
