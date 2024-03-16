const {express, router, bodyParser, carregaView} = require("./dependencias")

router.get('/', (req, res)=>{
    res.render(carregaView("index"))
})
router.post("/main", (req, res)=>{
    let form = req.body
    console.log(form)
    res.redirect('/sucesso')
})
module.exports=router