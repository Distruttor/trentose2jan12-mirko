const express = require('express');
const getArea = require('./area')

const app = express();

var port = process.env.PORT || 9000;

app.get('/getArea', (req,res) => {
    let side1 = req.query.side1;
    let side2 = req.query.side2;

    let ris = getArea([side1,side2]);

    let objris = {area:ris};
    if(ris === -1) {
        res.status = 400;
        res.json(-1);
    } else {
        res.status = 200;
        res.json(objris);
    }
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})