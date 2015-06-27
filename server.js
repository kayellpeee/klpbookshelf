var express = require('express');

var app = express();
var port = process.env.PORT || 4000;

var bookshelf = {
  Fitzgerald: [
    'BabylonRevisited',
    'WinterDreams'
  ],
  JackLondon: [
    'TheJacket(TheStarRover)',
    'TheSeaWolf'
  ],
  Hemingway: [
    'ACleanWellLightedPlace',
    'ADaysWait',
    'BanalStory',
    'CrossCountryStory',
    'HilsLikeWhiteElephants',
    'HomageToSwitzerland'
  ],
  Misc: [
    'PoliticsAndTheEnglishLanguage_Orwell',
    'BartlebyTheScrivener_Melville',
    'BillyBuddSailor_Melville',
    'TheLaughingMan_Salinger',
    'AnOutpostOfProgress_Conrad',
    'TheAmericanScholar_Emerson',
    'ThePrisonerInTheThemeParkPt1_Sesser',
    'ThePrisonerInTheThemeParkPt2_Sesser'
    ],
  Poe: [
    'Ligeia',
    'TellTaleHeart',
    'TheFallOfTheHouseOfUsher',
    'TheMasqueOfTheRedDeath',
    'TheMurdersInRueMorgue',
    'WilliamWilson'
  ]
};

var grabBook = function(req, res, author){
  var selection = Math.floor(Math.random() * bookshelf[author].length);
  res.redirect('/' + author + '/' + bookshelf[author][selection]);
};

app.get('/Fitzgerald', function(req, res){
  grabBook(req, res, 'Fitzgerald');
});

app.get('/JackLondon', function(req, res){
  grabBook(req, res, 'JackLondon');
});

app.get('/Hemingway', function(req, res){
  grabBook(req, res, 'Hemingway');
});

app.get('/Misc', function(req, res){
  grabBook(req, res, 'Misc');
});

app.get('/Poe', function(req, res){
  grabBook(req, res, 'Poe');
});

app.use('/Fitzgerald/BabylonRevisited', express.static(__dirname + '/Fitzgerald/Babylon Revisited.pdf'));
app.use('/Fitzgerald/WinterDreams', express.static(__dirname + '/Fitzgerald/Winter Dreams.pdf'));

app.use('/JackLondon/TheJacket(TheStarRover)', express.static(__dirname + '/Jack London/The Jacket (The Star-Rover).pdf'));
app.use('/JackLondon/TheSeaWolf', express.static(__dirname + '/Jack London/The Sea-Wolf.pdf'));

app.use('/Hemingway/ACleanWellLightedPlace', express.static(__dirname + '/Hemingway/A Clean, Well-Lighted Place.pdf'));
app.use('/Hemingway/ADaysWait', express.static(__dirname + '/Hemingway/A Day\'s Wait.pdf'));
app.use('/Hemingway/BanalStory', express.static(__dirname + '/Hemingway/Banal Story.pdf'));
app.use('/Hemingway/CrossCountryStory', express.static(__dirname + '/Hemingway/Cross-Country Snow.pdf'));
app.use('/Hemingway/HilsLikeWhiteElephants', express.static(__dirname + '/Hemingway/Hills Like White Elephants.pdf'));
app.use('/Hemingway/HomageToSwitzerland', express.static(__dirname + '/Hemingway/Homage to Switzerland.pdf'));

app.use('/Misc/PoliticsAndTheEnglishLanguage_Orwell', express.static(__dirname + '/Miscelaneous/George Orwell - Politics and the English Language.pdf'));
app.use('/Misc/BartlebyTheScrivener_Melville', express.static(__dirname + '/Miscelaneous/Herman Melville - Bartleby the Scrivener.pdf'));
app.use('/Misc/BillyBuddSailor_Melville', express.static(__dirname + '/Miscelaneous/Herman Melville - Billy Budd, Sailor.pdf'));
app.use('/Misc/TheLaughingMan_Salinger', express.static(__dirname + '/Miscelaneous/J.D. Salinger - The Laughing Man.pdf'));
app.use('/Misc/AnOutpostOfProgress_Conrad', express.static(__dirname + '/Miscelaneous/Joseph Conrad - An Outpost of Progress.pdf'));
app.use('/Misc/TheAmericanScholar_Emerson', express.static(__dirname + '/Miscelaneous/Ralph Waldo Emerson - The American Scholar.pdf'));
app.use('/Misc/ThePrisonerInTheThemeParkPt1_Sesser', express.static(__dirname + '/Miscelaneous/Sesser - Singapore, The Prisoner in the Theme Park pt1.pdf'));
app.use('/Misc/ThePrisonerInTheThemeParkPt2_Sesser', express.static(__dirname + '/Miscelaneous/Sesser - Singapore, The Prisoner in the Theme Park pt2r.pdf'));

app.use('/Poe/Ligeia', express.static(__dirname + '/Poe/Ligeia.pdf'));
app.use('/Poe/TellTaleHeart', express.static(__dirname + '/Poe/Tell-Tale Heart.pdf'));
app.use('/Poe/TheFallOfTheHouseOfUsher', express.static(__dirname + '/Poe/The Fall of the House of Usher.pdf'));
app.use('/Poe/TheMasqueOfTheRedDeath', express.static(__dirname + '/Poe/The Masque of the Red Death.pdf'));
app.use('/Poe/TheMurdersInRueMorgue', express.static(__dirname + '/Poe/The Murders In The Rue Morgue.pdf'));
app.use('/Poe/WilliamWilson', express.static(__dirname + '/Poe/William Wilson.pdf'));

app.use('/KLP/resume', express.static(__dirname + '/KLP/resume.pdf'));

app.get('/*', function(req, res){
  res.send('<h1>Keenan\'s Bookshelf</h1><h3>Welcome! How this works:</h3><p>Any request to the following urls will serve up a random pdf of a book/story the author wrote. /Misc is grab bag</p><ul><li>/Fitzgerald</li><li>/JackLondon</li><li>/Hemingway</li><li>/Poe</li><li>/Misc</li></ul>');
});

app.listen(port);
console.log('listening on port ', port, '…');
