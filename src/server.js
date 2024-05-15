require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('port', '5000');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

 app.use(express.static(path.join(__dirname,'static')))
 app.use(express.static(path.join(__dirname,'public')))


app.use((req, res, next) => {
    res.status(404).render('Error404');
});


app.listen(app.get('port'), () => {
    console.log(`Local host em http://localhost:${app.get('port')}/`);
});