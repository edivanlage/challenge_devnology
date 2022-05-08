# DESAFIO RPA DEVELOPER DEVNOLOGY

O desafio consiste em criar um bot utilizando o puppeteer que realize as seguintes tarefas:

- Acessar o site https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops;
- Pegar os dados de todos os notebooks da marca Lenovo;
- Ordena-los pelo preços, de forma crescente;

### Funcionalidades extras

- Utilizar um banco de dados para armazenar os dados capturados;
- Criar uma API REST para que o robô possa ser consumido por outros serviços;
- Configurar o Docker no projeto;

## Inicialização

Depois de clonar o repositório com o git clone, execute os comandos para executar o projeto:

```sh
docker-compose up
```

Após a execução a aplicação estará rodando em http://localhost:3000

## API

### ROTAS

- `[GET]/`: Retornar um Status: 200 e uma Mensagem "Desafio RPA Developer Devnology";
- `[GET]/computers/`: Lista todos os laptops cadastrados, informando sua marca, título, preço, descrição, avaliação e quantidades de reviews;
- `[GET]/computers/:brand/`: Listar todos os registros da base de dados, retornando apenas os laptops da marca selecionada e ordenando-os de forma ascendente pelo preço.
