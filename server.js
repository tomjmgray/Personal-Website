const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.set('view engine', 'ejs');
app.listen(PORT, console.log(`Listening at ${PORT}`));
