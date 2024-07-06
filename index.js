const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const sequelize = require('./database');

sequelize.sync().then( () => {
    console.log('Database Created Successfully.');
}).catch((err) => {
    console.log(err);
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running @Port:${port}`)
})