const Database = require ('./db')
const saveOrphanage = require('./saveOrphanage')


Database.then(async db => {

    // Inserir dados na Tabela
 /*   await saveOrphanage(db, {
        lat: "-29.92025",
        lng: "-51.2009069",
        name: "Lar de AMOR",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "519935141253",
        images: [
            "https://static.vakinha.com.br/uploads/vakinha/image/208800/images__3_.jpg?ims=700x410",
            "https://ogimg.infoglobo.com.br/in/15158578-c4f-1de/FT1086A/652/2015-785883685-s1518a-copy.jpg_20150126.jpg",
            "https://digitaispuccampinas.files.wordpress.com/2016/05/orfanato.jpg",
            "https://www.rbsdirect.com.br/imagesrc/14401300.jpg?w=1200&h=630&a=c&version=1575255600",
            "https://www.feiradesantana.ba.gov.br/imagens/noticias/19102019155913.jpg",
            "https://colegiosolido.com.br/upload/images/2019/projeto_social_2019_03.jpg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"

    })*/

    // Consultar dados da Tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
    
})