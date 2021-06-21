const express = require("express");
const bodyParser = require("body-parser");
//const router = express.Router();
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/test', (req, res) => {
    let string_to_cut = req.body.string_to_cut;
    let return_string = "";

    for(let i = 2; i< string_to_cut.length; i+=3)
    {
        return_string += string_to_cut[i]
    }
    if(string_to_cut){
        console.log({ "return_string" : return_string })

        res.send(`{"return_string":"${return_string}"}`)
    }
    else{
        res.status(400).send({
            error: 'The data is invalid!'
        })
    }
    //console.log("hi")
    res.end();
    
    //console.log()
    //res.send({ message: string_to_cut })
    //console.log("Hi")
    //console.log()



});




app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
