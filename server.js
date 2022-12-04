const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviçoes de forma fácil",
        },
        {
            title: "E",
            message: "JS usa JavaScripit para renderizar HTML"
        },
        {
            title: "M",
            message: "uito Fácil de Usar"
        },
        {
            title: "A",
            message: "gil",
        },
        {
            title: "i",
            message: "nstall EJS",
        },
        {
            title: "S",
            message: "imples",
        },
    ];
    const subtitle = 'Uma Linguagem de modelagem para criação de página HTML'
    res.render("pages/index", {qualitys: items, subtitle: subtitle})
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})


app.listen(8080)

console.log("rodando")