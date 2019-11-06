const express = require('express');
const app = express();
const cors = require('cors')

var PORT = process.env.PORT || 3003;

var corsOptions = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/fileProcess', (req, res)=> {
    console.log(req.body);
    res.json({success:true});
});

app.listen(3003, (err)=> {
    if(err)throw err;


    console.log('WORKING')
})

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});