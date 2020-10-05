# BancoDeDados Local com Node.js e Express
Aplicação desenvolvidade durante curso Udemy


<img src="https://badgen.net/badge/node.js/12.18/blue"/> <img src="https://badgen.net/badge/Framework/Express/black"/> <img src="https://badgen.net/badge/Postman/App/orange"/>

Status: Desenvolvido :heavy_check_mark:

Link do curso realizado: https://www.udemy.com/course/curso-web/

# Funcionalidade:
O aplicativo gera um servidor local no arquivo "servidor.js", utilizando a porta 3030 e sendo acessado através do navegador pela url "http://localhost:3030". O mesmo aplica o framework Express.js (https://expressjs.com/pt-br/) para criar a API. 
Implementações [CRUD]:
 - .post: [Create] Chamada a cada requição de inserção, enviando assim o novo array de produtos criado atráves da função do salvarProdutos();
 - .get: [Read] Chamada a cada requisição de 'get', enviando/retornando o array de produtos;
 - .put: [Uptade] Atualiza um determinado ID (indice do array) do BD, através da mesma expressão salvarProdutos();
 - .delete: [Delete] Apaga um produto especifico do banco de dados utilizando excluirProduto(id);
 
 - .listen: Start da conexeção na respectiva porta.
 
 O banco de dados foi gerado na tag /produtos e, portanto, ao acessar "http://localhost:3030/produtos", enviando um request de get a API.
 
 # Utilizando o Postman App
 O Postman é uma plataforma auxiliar de desenvolvimento de API's, capaz de realizar diversas requests a um endereço especifico.
 Ao abrir o aplicativo, podemos criar um novo request e acessar o dominio em questão (http://localhost:3030/produtos). Após, definimos o método de request (GET, POST e/ou PUT). Em ambos os casos, podemos também acessar um ID especifico. Para inserirmos um novo produto no BD, devemos acessar o body e definir o dado para 'x-www-form-urlencoded', para entao criarmos o JSON (parametro em KEY e valor em VALUE).
  
  
# Terminal:
Pre-sets:
> npm i --save nodemon

> npm i --save body-parser

> npm install express
 
Run:
> npm start
  
  
  
