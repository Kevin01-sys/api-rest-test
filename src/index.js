const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require("cors");
app.use(
    cors({
        //origin: "http://localhost:80",
        origin: "*",
    })
);

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
app.use(require('./routes/employees'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
