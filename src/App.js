import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.current
      .to("#center", { height: "100vh" }, "a")
      .to("#top", { top: "-50%" }, "a")
      .to("#bottom", { bottom: "-50%" }, "a")
      .to("#top-h1", { top: "60%" }, "a")
      .to("#bottom-h1", { bottom: "-30%" }, "a")
      .to("#center-h1", { top: "-30%" }, "a")
      .to(".content", { delay: -0.2, marginTop: "0%" });
  }, []);
  return (
    <Fragment>
      <div className="main-p"></div>
      <div id="main">
        <div id="top">
          <h1 id="top-h1">PROJECTS</h1>
        </div>
        <div id="center">
          <div class="content">
            <h4>GRAVITY</h4>
            <h3>
              <i>Browse</i> the work that define a <i>movement</i> and created a
              craft.
            </h3>
            <div class="btn">
              <h5>ENTER GALLERY</h5>
            </div>
            <h2>(17)</h2>
          </div>
        </div>
        <div id="bottom">
          <h1 id="bottom-h1">PROJECTS</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
