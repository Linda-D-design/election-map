var politician = {};
 
politician.name = "";
 
politician.electionResults = null;
 
politician.totalVotes = 0;

var createPolitician = function(name, partyColor){
 
    var politician = {}; 
    politician.name = name;
    politician.partyColor = partyColor;
    politician.electionResults = null;
   politician.totalVotes = 0;
  
  politician.tallyUpTotalVotes = function(){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 };
    
    return politician;
 };
 
var oprah = createPolitician("Oprah",[132, 17, 11]);

var robin = createPolitician("Robin",[245, 141, 136]);


oprah.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

robin.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]
oprah.electionResults [9] = 1;
robin.electionResults [9] = 28;
oprah.electionResults [4] = 17;
robin.electionResults [4] = 38;
oprah.electionResults [43] = 11;
robin.electionResults [43] = 27;
console.log(oprah.electionResults);
console.log(robin.electionResults);
  
var setStateResults = function(state){
    theStates[state].winner = null;
 
    if (oprah.electionResults[state] > robin.electionResults[state]) {       theStates[state].winner = oprah; 
    } else if (oprah.electionResults[state] < robin.electionResults[state]) {        theStates[state].winner = robin;
}
var stateWinner = theStates[state].winner;
 
if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
  theStates[state].rgbColor = [11,32,57];
}

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];


stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = oprah.name;
candidate2Name.innerText = robin.name;
 
candidate1Results.innerText = oprah.electionResults[state];
candidate2Results.innerText = robin.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = oprah.name;
candidate2Name.innerText = robin.name;
 
candidate1Results.innerText = oprah.electionResults[state];
candidate2Results.innerText = robin.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
};

oprah.tallyUpTotalVotes();
robin.tallyUpTotalVotes();
 
console.log(oprah.totalVotes);
console.log(robin.totalVotes);
console.log("Oprah's color is: " + oprah.partyColor);
console.log("Robin's color is: " + robin.partyColor);

var winner = "???";
 
if (oprah.totalVotes > robin.totalVotes){
    winner = oprah.name;
}else if (oprah.totalVotes < robin.totalVotes){
    winner = robin.name;
}else{
    winner = "DRAW."
}
 
console.log("AND THE WINNER IS..." + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = oprah.name;
row.children[1].innerText = oprah.totalVotes;
row.children[2].innerText = robin.name;
row.children[3].innerText = robin.totalVotes;
row.children[5].innerText = winner;

