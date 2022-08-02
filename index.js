const express = require('express');
const app = express();
const routerApi = require('./routes/');

const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:3000'];

const options ={
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin){
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}
app.use(cors(options));


app.get('/', (req, res) => {
    res.send('Hello World');
})

routerApi(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});