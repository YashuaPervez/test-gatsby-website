import React from "react";
import { Link } from "gatsby";

// Components
import SEO from "../components/SEO";

//
import "../syles/home.scss";
import services from "../data/services.json";
import cities from "../data/cities.json";
import favIcon from "../images/icon.png";

const HomePage = () => {
  return (
    <div className="main">
      <SEO
        title={`Test website`}
        name={`Test website`}
        description={`description for Test website`}
        websiteURL="https://test-gatsby-website.netlify.app/"
        favIcon={favIcon}
        lang="en"
        twitterHandle="test-website"
      />
      <h1 className="main-heading">Pages list</h1>
      <nav className="main-nav">
        <ul>
          {cities.map((city) => {
            return services.map((service) => {
              console.log("here");
              return (
                <li>
                  <Link to={`/${city}/${service}`}>
                    {city} - {service}
                  </Link>
                </li>
              );
            });
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
