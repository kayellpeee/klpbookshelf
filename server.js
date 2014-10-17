var express = require('express');

var app = express();

app.use('/Fitzgerald', express.static(__dirname + '/Fitzgerald/Winter Dreams.pdf'));
app.use('/Hemingway', express.static(__dirname + '/Hemingway/BanalStory.pdf'));
app.use('/JackLondon', express.static(__dirname + '/Jack London/The Jacket (The Star-Rover).pdf'));
app.use('/Misc', express.static(__dirname + '/Miscelaneous/Ralph Waldo Emerson - The American Scholar.pdf'));
app.use('/Poe', express.static(__dirname + '/Poe/Ligeia.pdf'));

app.listen(4000);