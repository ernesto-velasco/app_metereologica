require("dotenv").config();
const request = require("request");
const url = "http://api.weatherstack.com/current";
let params = {
  access_key: process.env.weatherstack_key,
  query: "19.2433,-103.725",
};
request({ url, qs: params, json: true }, (error, response) => {
  const data = response.body;
  current = data.current;
  console.log(current);
});
