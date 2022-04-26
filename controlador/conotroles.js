const linkModel = require("../mural/modelo")


module.exports = Controlers = {


    HOME: function( req , resp ){

        resp.render("index")
    },

    SEARCHTITLE: async function (req , resp){

        const titulo = req.params.titulo;
        
        try{

            let doc = await linkModel.findOne({titulo})

            if(doc){

                return resp.redirect(doc.url)
            }
            else{

                resp.send("Nenhum titulo encontrado")
            }
        }
        catch(erro){
            console.log(erro)
        }

    },

    All: async function( req , resp ){
        
        const findAll = await linkModel.find({})
        resp.send(findAll)
    },

    ADD: async function( req , resp){

        const doc = await new linkModel({

            titulo: req.body.titulo,
            url:req.body.url,
            descri:req.body.descri,
        })
        doc.save();
        resp.send("Link adicionado ao banco")
    }
}

