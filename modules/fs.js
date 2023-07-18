const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error:", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

// Criar um Arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node, my friend!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Pasta criada com sucesso!");
    
    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " Hello React!",
      (error) => {
        if (error) {
          return console.log("Error:", error);
        }
        console.log("Arquivo adicionado com sucesso");
      }
    );
  }
);


// Ler arquivo
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log(data);
});
