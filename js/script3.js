
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
  },
  {
    "artist": "Jon Jones",
    "title": "Good fighter",
    "release_year": 2020,
    "formats": [ 
      "CD", 
      "USB Stick", 
      "LP"
    ],
    "gold": false
  },
   {
    "artist": "Chael Sonnen",
    "title": "GOAT",
    "release_year": 2021,
    "formats": [ 
      "Floppy Disk", 
      "LP"
    ],
    "gold": false
  },
     {
    "artist": "Shanna lua",
    "title": "Brazilian Rhythms",
    "release_year": 1999,
    "formats": [ 
      "CD", 
      "Vinyl"
    ],
    "gold": true
  }
];



function printOurMusic(){
  var i;
  for (i = 0; i < ourMusic.length; i++) {
    // add spaces after commas in the formats 
    ourMusic[i].formats = ourMusic[i].formats.toString();
    ourMusic[i].formats = ourMusic[i].formats.replace(/,/g, ", ");
    // show gold message if gold
    function showGoldStatus(){
    if(ourMusic[i].gold){
        return "<br><strong>Certified Gold </strong>";
        }
        return "";
    }
    // show all music loop
    document.getElementById("record").innerHTML += "<div class='box'><h3>Record "+ (i+1) + "</h3><br>" + "<strong>Artist </strong>" + ourMusic[i].artist +
                                              "<br><strong>Title </strong>" + ourMusic[i].title + "<br>" + "<strong>Release year: </strong>" + 
                                              ourMusic[i].release_year +"<br><strong>Formats: </strong>" + ourMusic[i].formats + showGoldStatus();
    
    }
}
printOurMusic();

