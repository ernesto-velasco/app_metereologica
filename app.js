require("dotenv").config();
const request = require("request");
const chalk = require("chalk");

const url = "http://api.weatherstack.com/current";
let params = {
  access_key: process.env.weatherstack_key,
  query: "19.2433,-103.725",
};
request({ url, qs: params, json: true }, (error, response) => {
  const data = response.body;
  current = data.current;
  console.log(chalk.blue("El clima es"), current.weather_descriptions);
  console.log(chalk.blue("La temperatura es"), current.temperature, "grados");
  console.log(
    chalk.blue("Sin embargo se percibe de"),
    current.feelslike,
    "grados"
  );
  console.log(
    chalk.blue("La probabilidad de lluvia es del"),
    current.precip,
    "%"
  );
});
