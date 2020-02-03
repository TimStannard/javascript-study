
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

document.getElementById("record").innerHTML = "<h2>Record</h2><br>" + "<strong>Artist </strong>" + ourMusic[0].artist + "<br>" +
                                              "<strong>Title </strong>" + ourMusic[0].title + "<br>";