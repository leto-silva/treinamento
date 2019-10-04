const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController  = require('./controllers/SpotController');
//const Teste = require('./controllers/Teste');
 
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
//routes.post('/teste',Teste.mensagem);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
 //routes.post('/spots', SpotController.store);

module.exports = routes;

