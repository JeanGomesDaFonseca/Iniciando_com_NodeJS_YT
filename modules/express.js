const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Olá Jean</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "jeanzin true",
      email: "jeanzin@true.com",
    },
    {
      name: "Cadu Maverick",
      email: "Maverick@Cadu.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));
