//Criando uma estrutura para um servidor:
const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

// http://localhost:3000/
app.get("/", (request, response)=>{
    response.send("Hello world");
})
//*localhost
//*127.0.0.1

app.listen(port, () => {
    console.log("Nosso servidor está rodando na porta " + port);
})


