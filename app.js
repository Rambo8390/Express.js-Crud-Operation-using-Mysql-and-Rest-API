const express = require('express');
const app = express();
const port = 4000;
// const db = require('./config/connection');

app.set('view engine' ,'ejs');
app.set('views','./views');

app.use(express.urlencoded());

// app.use('/' , require('./routes'));

var createRouter = require('./routes/create-route');
var readRouter = require('./routes/read-route');
var updateRouter = require('./routes/update-route');
var deleteRouter = require('./routes/delete-route');


app.use('/crud', createRouter);
app.use('/crud', readRouter);
app.use('/crud', updateRouter);
app.use('/crud', deleteRouter);

app.listen(port , function(err){
    if(err)
    {
        console.log(`Error in running server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});


