import React from "react";

//
import "../syles/home.scss";
import services from "../data/services.json";
import cities from "../data/cities.json";

const HomePage = () => {
  return (
    <div className="main">
      <h1 className="main-heading">Pages list</h1>
      <nav className="main-nav">
        <ul>
          {cities.map((city) => {
            return services.map((service) => {
              console.log("here");
              return (
                <li>
                  <a href={`/${city}/${service}`}>
                    {city} - {service}
                  </a>
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
