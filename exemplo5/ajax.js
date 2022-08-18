import fetch from 'node-fetch';

const url = `http://viacep.com.br/ws/03801060/json/`;

/* Conectando com o endpoint da API (url) */
fetch(url) 
    /* Retornar a resposta como JSON */
    .then(resposta => resposta.json())
    /* Exibindo a resposta (obtida na API) no console */
    .then(dados =>console.log(dados));