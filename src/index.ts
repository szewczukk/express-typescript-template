import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello, world! No joke.');
});

app.listen(3000);
