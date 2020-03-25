const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * SESSION
 */
routes.post('/sessions', SessionController.store);
/**
 * PROFILE
 */
routes.get('/profile', ProfileController.index);

/**
 * ONGS
 */
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

/**
 * INCIDENTS
 */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.destroy);

module.exports = routes;