const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 5000

let count = 0;

app.use(express.static('public'));


app.get("/", function (req, res) {
	res.json({ "message": "Check docs not made", "example": "https://api.pellinuz.repl.co/api?type=genshin" });
});


app.get('/api', (req, res) => {
	const type = req.query.type;
	if (type === 'examples') {
		//media
		const imageLinks = [
			`https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg`,
			`http://www.clker.com/cliparts/e/1/d/1/1513780035272509829example-stamp-vector.med.png`
		];

		const randomIndex = Math.floor(Math.random() * imageLinks.length);

		//random number
		const min = 1000000;
		const max = 9999999;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		res.json({ message: imageLinks[randomIndex], color: `${randomNumber}` });

	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})