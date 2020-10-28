// Importar dependencia/biblioteca, requisita uma dependencia 
const express = require('express');
const path = require('path');
const pages = require('./pages.js')


// Iniciando a dependencia/biblioteca
const server = express()


// Utilizando os arquivos ESTATICOS
server
// utilizar body do req
.use(express.urlencoded({ extened: true}))

.use(express.static('public'))  // Estou comunicando AONDE estão meus arquivos Estaticos 'public'
.set('views' , path.join(__dirname, "views")) // Configurar template engine
.set('view engine', 'hbs')


// Rotas ( caminhos ) da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligar o Servidor
server.listen(5500)