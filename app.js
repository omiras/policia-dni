const express = require('express');
const dniValidator = require('spain-id');

// Requisito 1

const app = express();

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/formulario.html");
})


app.post('/', (req, res) => {

    const dni = req.body.DNI;

    // Requisito 2

    if (dniValidator.validDNI(dni)) {
        console.log("Dni válido");
        res.redirect("/list");
    }

    else {
        console.log("Dni NO válido")
        res.redirect("/list");
    }
});

app.get("/list", (req, res) => {

    // Requisito 3
    const documents = [];

    res.render('list.ejs', {
        documents
    })
})

app.listen(3000);
