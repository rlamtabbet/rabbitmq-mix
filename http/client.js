const express = require("express");
const request = require("request-promise");

const id = process.argv.slice(2);

const app = express();

app.listen(3008, () => {
  console.log(` [x] Requesting user ${id}`);

  request(`http://localhost:3007/${id}`).then(res => {
    return console.log(` [.] Got ${res}`);
  });
});
