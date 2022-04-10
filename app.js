const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname +'/date.js')

const app = express()

let items = ['Bookas','Courses','Anime']
let workItems = []

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set('view engine','ejs')

app.get('/', (req,res) => {

    let day = date.getDate()

    res.render("list", {listTitle: day, newListItems: items})
})

app.post('/',(req,res) => {
    let item = req.body.newItem
    if(req.body.list === "Work"){
        workItems.push(item)
        res.redirect("/Work")
    }else{
        items.push(item)
        res.redirect('/')
    }

})

app.get("/Work",(req,res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/Work",(req,res) => {
    let item = req.body.newItem
    workItems.push(item)
    res.redirect('/Work')

})

app.get("/about", (req,res) => {
    res.render("about")
})

app.listen( process.env.PORT || 3000 , () => {
    console.log("Running on 3000 port");
})