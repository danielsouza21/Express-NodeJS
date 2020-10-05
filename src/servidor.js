//Configuração do servidor web service (API)
//C [Create] R [Read] U [Updade] D [Delete]
const porta = 3030; //porta: linha de comunicação/entrada do processo dentro do computador

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const BancoDeDados = require("./bancodedados");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(BancoDeDados.getProdutos()); //converte para JSON automaticamente
  BancoDeDados.imprimeProdutos();
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(BancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };
  const produto_proc = BancoDeDados.salvarProduto(produto);
  res.send(produto_proc); //JSON
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = BancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = BancoDeDados.excluirProduto(req.params.id);
  res.send(produto); //JSON
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
