/***************** CODING CHALLENGE 2*/
/*John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.*/

var avgJohnTeam = (116 + 0 + 200) / 3;
var avgMikeTeam = (116 + 0 + 200) / 3;
var avgMaryTeam = (116 + 0 + 200) / 3;

if (avgJohnTeam > avgMikeTeam && avgJohnTeam > avgMaryTeam) {
    console.log("John's team is the winner with an average score of " + avgJohnTeam + ".");
} else if(avgMikeTeam > avgJohnTeam && avgMikeTeam > avgMaryTeam){
    console.log("Mike's team is the winner with an average score of "+ avgMikeTeam + ".");
} else if(avgMaryTeam > avgJohnTeam && avgMaryTeam > avgMikeTeam){
    console.log("Mary's team is the winner with an average score of "+ avgMaryTeam + ".");
} else{
    console.log("The teams have the same average score.");
}
