/* Global node server #Patrizio */


/* Variabili */
var express = require('express');
var serverp = require('parse-server').ParseServer;
var config = require('config');
var app = express();
var http_server = require('http').createServer(app);
var ParseDashboard = require('parse-dashboard');

/* Funzioni */

var parse_server = new serverp({
       databaseURI: config.get('databaseURI'),
       cloud: config.get('cloud'),
       appId: config.get('appId'),
       masterKey: config.get('masterKey'),
       fileKey: config.get('fileKey'),
       serverURL: 'http://localhost:' + config.get('port') + '/parse'
});
var parse_dashboard = new ParseDashboard({
      "apps":[{ appId: config.get('appId'),
       masterKey: config.get('masterKey'),
       serverURL: 'http://localhost:' + config.get('port') + '/parse',
       appName: 'Music Map Test Server', }],
      "iconsFolder":"icons"
});

/* Socket emitter and receivers */
/* RICORDATI DI FARLO STASERA SE NO COL CAZZO CHE IMPLEMENTI LA CHAT! */



/* Express statement */

app.use('/parse', parse_server);
app.use('/dashboard', parse_dashboard);
app.get('/', function(req, res) {
  res.status(200).send('Parse Server avviato. Installa la Dashboard per modificare le tabelle. <3');
  res.status(200).send('Parse Dashboard installata ed avviata! <3');
});

/* Server listener */
var server = app.listen(config.get('port'), '0.0.0.0', function() {
  console.log('Server in ascolto su http://%s:%s', server.address().address,
    server.address().port);
});
