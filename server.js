const express = require('express');
const app = express();

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