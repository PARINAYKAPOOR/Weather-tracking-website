

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// Set the view engine to 'hbs'
app.set('view engine', 'hbs');

// Set the views directory to 'template_path'
app.set('views', template_path);

// Register partials
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render('index');
});

app.get("/About", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error');
});

app.listen(port, () => {
    console.log(`Listening to port at ${port}`);
});

