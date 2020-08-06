# Instalação 

npm init -y

npm install typescript -D

npx tsc --init

npm install ts-node-dev -D

npm install express

npm install @types/express

npm install knex sqlite3

npm run knex:migrate

npm install cors
# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana, horário;