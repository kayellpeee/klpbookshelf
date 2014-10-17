var express = require('express');

var app = express();
var port = process.env.PORT || 4000;

app.get('/Fitzgerald', function(req, res){
  var selection = Math.ceil(Math.random() * 2);
  res.redirect('/Fitzgerald/' + selection);
});

app.get('/JackLondon', function(req, res){
  var selection = Math.ceil(Math.random() * 2);
  res.redirect('/JackLondon/' + selection);
});

app.get('/Hemingway', function(req, res){
  var selection = Math.ceil(Math.random() * 6);
  res.redirect('/Hemingway/' + selection);
});

app.get('/Misc', function(req, res){
  var selection = Math.ceil(Math.random() * 6);
  res.redirect('/Misc/' + selection);
});

app.get('/Poe', function(req, res){
  var selection = Math.ceil(Math.random() * 6);
  res.redirect('/Poe/' + selection);
});

app.use('/Fitzgerald/1', express.static(__dirname + '/Fitzgerald/Babylon Revisited.pdf'));
app.use('/Fitzgerald/2', express.static(__dirname + '/Fitzgerald/Winter Dreams.pdf'));

app.use('/JackLondon/1', express.static(__dirname + '/Jack London/The Jacket (The Star-Rover).pdf'));
app.use('/JackLondon/2', express.static(__dirname + '/Jack London/The Sea-Wolf.pdf'));

app.use('/Hemingway/1', express.static(__dirname + '/Hemingway/A Clean, Well-Lighted Place.pdf'));
app.use('/Hemingway/2', express.static(__dirname + '/Hemingway/A Day\'s Wait.pdf'));
app.use('/Hemingway/3', express.static(__dirname + '/Hemingway/Banal Story.pdf'));
app.use('/Hemingway/4', express.static(__dirname + '/Hemingway/Cross-Country Snow.pdf'));
app.use('/Hemingway/5', express.static(__dirname + '/Hemingway/Hills Like White Elephants.pdf'));
app.use('/Hemingway/6', express.static(__dirname + '/Hemingway/Homage to Switzerland.pdf'));

app.use('/Misc/1', express.static(__dirname + '/Miscelaneous/George Orwell - Politics and the English Language.pdf'));
app.use('/Misc/2', express.static(__dirname + '/Miscelaneous/Herman Melville - Bartleby the Scrivener.pdf'));
app.use('/Misc/3', express.static(__dirname + '/Miscelaneous/Herman Melville - Billy Budd, Sailor.pdf'));
app.use('/Misc/4', express.static(__dirname + '/Miscelaneous/J.D. Salinger - The Laughing Man.pdf'));
app.use('/Misc/5', express.static(__dirname + '/Miscelaneous/Joseph Conrad - An Outpost of Progress.pdf'));
app.use('/Misc/6', express.static(__dirname + '/Miscelaneous/Ralph Waldo Emerson - The American Scholar.pdf'));

app.use('/Poe/1', express.static(__dirname + '/Poe/Ligeia.pdf'));
app.use('/Poe/2', express.static(__dirname + '/Poe/Tell-Tale Heart.pdf'));
app.use('/Poe/3', express.static(__dirname + '/Poe/The Fall of the House of Usher.pdf'));
app.use('/Poe/4', express.static(__dirname + '/Poe/The Masque of the Red Death.pdf'));
app.use('/Poe/5', express.static(__dirname + '/Poe/The Murders In The Rue Morgue.pdf'));
app.use('/Poe/6', express.static(__dirname + '/Poe/William Wilson.pdf'));

app.listen(port);
console.log('listening on port ', port, '…');
