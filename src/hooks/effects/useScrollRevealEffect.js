import useGsapEffect from "./useGsapEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultParams = {
  y: 10,
  opacity: 0,
  delay: 0.1,
  stagger: 0.1,
  duration: 0.6,
  ease: "power1.out",
};

export default useGsapEffect((element, params = {}) => {
  const markers = params.markers;
  const toggleClass = params.toggleClass;
  delete params.markers;
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "60% 90%",
      markers: markers,
      toggleClass: toggleClass,
    },
    ...defaultParams,
    ...params,
  });
});
