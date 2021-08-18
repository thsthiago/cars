<h1 align="center">
  <img src="./github/logo.svg">
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>
<br>

## 💻 Status do projeto

**Em desenvolvimento...**

**Pages**:

**_Front-end:_**

- [x] Home
  - [x] Sessão initial
  - [x] Veículos em destaque
  - [x] Carousel depoimentos
  - [x] Formulário
- [x] Vendas
  - [x] Filtro
  - [x] Card veículo
- [x] Sobre
- [x] Detalhes do veículos
- [x] Agendamentos

**_Back-end:_**

- [x] Integrando datoCMS
- [x] Rota Home
- [ ] Rota Vendas
- [ ] Rota Sobre
- [ ] Rota Agendamento
- [ ] Integração com CMS

## 💻 Sobre o projeto

Site com o tema concessionária, o front-end foi baseado em um dos projetos do curso de front-end da Danki Code.

Esse projeto foi desenvolvido com as tecnologias que venho estudado. Foi implementado a arquitetura MVC com o front-end sendo renderizado pelo servidor e a metodologia css BEM.

---

## ⚙️ Funcionalidades

- [ ] Listagem de veículos
- [ ] Filtro de veículos
- [ ] Formulario de contato
- [ ] Formulário de contato veículo

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/MUxOdLa242mLU12oe6ubHJ/Cars?node-id=0%3A1">
  <img alt="Layout Figma" src="https://img.shields.io/badge/Acessar%20Layout-Figma-red">
</a>

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [x] [Git](https://git-scm.com)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [PostgreSQL](https://www.postgresql.org/)
- [x] [Gulp-cli](https://github.com/gulpjs/gulp-cli)

### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/thsthiago/cars.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd todo_dev

# Crie um banco de dados utilizando o PostgreSQL com o
# nome "cars"

# Acesse a pasta cars
$ cd cars

# Instale as dependências
$ yarn

# Crie as tabelas no banco de dados
$ yarn typeorm migration:run

# Crie os arquivos estáticos(necessário a gulp-cli)
$ gulp

# Execute a aplicação
$ yarn start

# A api será aberta na porta:3333
$ http://localhost:3333
```

---

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- **Node JS**
- **Express**
- **JavaScript**
- **Sass**
- **Ejs**
- **uuid**
- **Gulp**
- **Babel**
- **Eslint**
- **Typeorm**

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- DBeaver: **[DBeaver](https://dbeaver.io/download/)**
- PostgreSQL: **[PostgreSQL](https://www.postgresql.org/)**

---

## 👨🏽‍💻 Autor

 <img style="border-radius: 50px" src="https://avatars.githubusercontent.com/u/61162365?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Cabral</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/Thiago-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/thsthiago-cabral/)](https://www.linkedin.com/in/thsthiago-cabral/)
[![Gmail Badge](https://img.shields.io/badge/thiagocabral477@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:thiagocabral477@gmail.com)](mailto:thiagocabral477@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Thiago Cabral 🚀
