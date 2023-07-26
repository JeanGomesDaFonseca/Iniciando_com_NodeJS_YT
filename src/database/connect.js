const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.rcr4onc.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão efetuada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao realizar a conexão! Erro: ", error);
  }
};

module.exports = connectToDatabase;
