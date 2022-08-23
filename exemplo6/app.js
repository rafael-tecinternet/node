import  express  from "express";

const app = express();
/* Configurar a view engine com EJS */
app.set('view engine', 'ejs');
/* Configurando rotas */
app.get('/', (req, res) => {
    /* res.send('Uma reposta '); */
    const bandas = ["CBJ", "JB", "JT", "PC", "JJS", "PPP"];
    res.render('paginas/index', {bandas});
});
app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
});
app.get('/contato', (req, res) => {
    res.render('paginas/contato');
});
/* Executando o servidor */
app.listen(3000, () => {
    console.log('Servidor express rodando...!');
});

/* Instalando nodemon ->  atualiza o servidor automaticamente / npm install -g nodemon */

/* Preparar para receber arquivos HTML */
/* Insalação do EJS - npm install ejs */