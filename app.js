const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/hello', function (req, res) {
    return res.send('Hello');
});

app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    return res.json(bet());
});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

function bet() {
    const numbers = generate(5, 1, 50);
    const stars = generate(2, 1, 12);
    return { numbers, stars };
}

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});