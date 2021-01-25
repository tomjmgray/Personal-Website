const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.set('view engine', 'ejs');
app.listen(PORT, console.log(`Listening at ${PORT}`));
