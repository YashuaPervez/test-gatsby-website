const path = require("path");

const cities = require("./src/data/cities.json");
const services = require("./src/data/services.json");

exports.createPages = async function ({ actions }) {
  const { createPage } = actions;

  const serviceCityTemplate = path.resolve("./src/templates/service-city.js");

  cities.map((city) => {
    services.map((service) => {
      createPage({
        component: serviceCityTemplate,
        path: `/${city}/${service}`,
        context: {
          city,
          service,
        },
        props: {
          city,
          service,
        },
      });
    });
  });

  //   console.log("cities >>", cities);
  //   console.log("services >>", services);
};
