const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const wikiRoutes = require('./wikiRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
	origin: '*'
}));
app.use('/', express.static(path.join(__dirname, '/wiki-viewer-frontend/build')));

wikiRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Express server listening on port ' + port);
});

module.exports = app;