const fetch = require('node-fetch');

module.exports = function(app){
	app.route('/api').get((req, res) => {
		const { input } = req.query;
		wikiQuery(input).then(queryRes => res.send(queryRes)).catch(console.error);
	})

	wikiQuery = async (input) => {
		const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=%${input}&format=json`);
		const body = await response.json();
		console.log(body);
		return body.query.search;
	}
}