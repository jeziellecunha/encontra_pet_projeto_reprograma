# Projeto Final-Encontra Pet 

# Autora: Jezielle Cunha





### Sumário###



### Tema proposto

Facilitar o encontro de animais de estimação para adoção nas instituições que abrigam animais abandonados. A aplicação torna possível um pretendente a tutor buscar por um animalzinho filtrando por abrigo, espécie (se gato ou cachorro), sexo e se castrado ou não.  

### Apresentação ###

O "Encontra Pet" é um projeto de conclusão de curso para o Bootcamp Back-end da {reprograma}. É uma API que tem como objetivo reunir e disponibilizar informações sobre cães e gatos que precisam ser adotados para consulta de pretendentes a tutores. E com isso facilitar o proccesso de adoção responsável.

O intuíto é que a aplicação seja como uma ponte entre as pessoas que pretendem adotar e os animais disponíveis para adoção que estão em abrigos. Aqueles que têm o intuito de adotar, poderão buscar os pets por meio de alguns filtros e  encontrar um novo amiguinho segundo suas preferências e/ou necessidades. 

### Contextualização###



### Rotas/EndPoints

Esta API está sendo escutada na ``porta 8080 `` e para que as rotas possam ser acessadas localmente é necessário utilizar ``http://localhost:8080``antes dos endpoints de requisição.

* GET /todos 
  Rota que retorna uma lista com todos os pets.
  HTTP 200 OK
* GET /pet/:id 
  Rota que retorna os detalhes sobre algum pet, baseado no seu id.
  HTTP 200 OK
* GET /pet/cachorro
  Rota que retorna todos os cachorros.
  HTTP 200 OK
* GET /pet/gato
  Rota que retorna todos os gatos.
  HTTP 200 OK
* GET /abrigo/:id 
  Rota que retorna os detalhes sobre algum abrigo, baseado no seu id.
  HTTP 200 OK
* GET /admin/:id 
  Rota que retorna os detalhes sobre algum administrador, baseado no seu id.
  HTTP 200 OK
* GET /tutor/:id 
  Rota que retorna os detalhes sobre algum tutor, baseado no seu id.
  HTTP 200 OK
* POST /pet 
  Rota que recebe um novo pet, adiciona no database e retorna o documento criado.
  HTTP 201 CREATED
* POST /abrigo 
  Rota que recebe um novo abrigo, adiciona no database e retorna o documento criado.
  HTTP 201 CREATED
* POST /admin 
  Rota que recebe um novo admin, adiciona no database e retorna o documento criado.
  HTTP 201 CREATED
* POST /tutor 
  Rota que recebe um novo tutor, adiciona no database e retorna o documento criado.
  HTTP 201 CREATED
* PUT /pet/:id 
  Rota que atualiza alguma característica de um determinado pet e retorna o documento atualizado.
  HTTP 200 OK
* PUT /abrigo/:id 
  Rota que atualiza alguma característica de um determinado abrigo e retorna o documento atualizado.
  HTTP 200 OK
* PUT /admin/:id 
  Rota que atualiza alguma característica de um determinado admin e retorna o documento atualizado.
  HTTP 200 OK
* PUT /tutor/:id 
  Rota que atualiza alguma característica de um determinado tutor e retorna o documento atualizado.
  HTTP 200 OK
* DELETE /pet/:id 
  Rota que deleta um pet baseado em seu id.
  HTTP 204 NO CONTENT
* DELETE /abrigo/:id 
  Rota que deleta um abrigo baseado em seu id.
  HTTP 204 NO CONTENT
* DELETE /admin/:id 
  Rota que deleta um admin baseado em seu id.
  HTTP 204 NO CONTENT
* DELETE /tutor/:id 
  Rota que deleta um tutor baseado em seu id.
  HTTP 204 NO CONTENT

### Desenvolvimento
**Arquitetura MVC **

📁 projetoEncontraPet
   |
   |-  📁 src
   |	|
   |	|- 📁 data
   |     	    |- 📄 database.js
   |	|- 📁 controllers
   |     	    |- 📄 adminController.js
   |     	    |- 📄 tutorController.js
   |     	    |- 📄 abrigoController.js
   |     	    |- 📄 petController.js
   |	|- 📁 models
   |     	    |- 📄 admin.js
   |     	    |- 📄 tutor.js
   |     	    |- 📄 abrigo.js
   |     	    |- 📄 pet.js
   |	|- 📁 routes
   |     	    |- 📄 admin.routes.js
   |     	    |- 📄 tutor.routes.js
   |     	    |- 📄 abrigo.routes.js
   |     	    |- 📄 pet.routes.js
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 package-lock.json
   |- 📄 server.js


### Regras de Negócio ###
* Para criar um novo administrador ou novo pet, será necessário vincular a um abrigo já existente no sistema no momento da criação, utilizando o numero do id do abrigo correspondente no corpo da requisição.

### Tecnologias utilizadas no projeto
**Ferramentas e descrições**
* JavaScript: Linguagem de programação.
* Node JS: Ambiente de execução do JavaScript.
* Express: Framework Node JS.
* Mongoose: Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.
* Nodemon: Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.
* Cors: Dependência que facilita a permissão de acesso à API.
* Dotenv: Dependência que ajuda a proteger dados sensíveis.
* npm: Gerenciador de pacotes.
* MongoDb: Banco de dados não relacional orientado a documentos.
* Robo 3T: Interface gráfica para verificar se os dados foram persistidos na database.
* Postman: Interface gráfica para realizar os testes.
* Git/GitHub: Versionamento de código.
* Heroku:



### Implementações futuras ###



### Instruções para instalação e contribuição no projeto###





### Referências ###






