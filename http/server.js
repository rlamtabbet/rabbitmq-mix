const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.listen(3007, () => {
  console.log(" [x] Awaiting for requests");
});

app.get("/:id", (request, response) => {
  const id = request.params.id;

  console.log(` [.] ID ${id}`);

  response.status(200).json({
    data: {
      name: "John Doe",
      title: "Lorem"
    }
  });
});
