import React from "react";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" className="home_bg">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
            <div className="about_me_content">
              <h1 className="cd-headline clip">
                Get Quality & 10x faster way to write {' '}
                <span className="cd-words-wrapper">
                  <TypeAnimation
                    sequence={[
                      "Blog post",
                      1000,
                      "Emails",
                      1000,
                      "Product descriptions",
                      1000,
                      "Profile bio",
                      1000,
                      "Testimonials",
                      1000,
                      "Content writing",
                      1000,
                    ]}
                    wrapper="b"
                    speed={10}
                    deletionSpeed={0}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p>
                Ai Gen is an AI writing assistant that helps you create
                high-quality content, in just a few seconds, at a fraction of
                the cost!
              </p>
            </div>
            <div className="home_btn">
              <Link to="/contact" className="home_one">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
