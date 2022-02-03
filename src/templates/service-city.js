import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import ContactForm from "../components/ContactForm";

//
import "../syles/home.scss";

const HomePage = ({ pageContext }) => {
  const { city, service } = pageContext;

  return (
    <div className="main">
      <h1 className="main-heading">
        Get {service} to {city}
      </h1>
      <div className="contact">
        <div className="image-container">
          <StaticImage
            src="../images/main-image.jpg"
            loading="eager"
            placeholder="tracedSVG"
          />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
      <div className="details">
        <p>
          We are happy to offer {service} for your needs. We serve {city} as a
          major location.
        </p>
      </div>
      <div className="faq">
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions(FAQ)</h2>
          <div className="faq-list">
            <div
              className="faq-item"
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <h3 itemprop="name">Is it worth removing genital warts?</h3>
              <div
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <div itemprop="text">
                  <p>
                    Treatment of genital warts is aimed at alleviation of
                    symptoms and emotional distress. Most cases of genital warts
                    will resolve spontaneously, usually within 12 months, if
                    left untreated. There is no evidence that treating visible
                    genital warts will prevent transmission of the virus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
