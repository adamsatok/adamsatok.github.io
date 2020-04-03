$(document).ready(function () {
	var highlight;
	$(".box").hover(function(){
		$(this).css("background-color", "rgb(204, 0, 0)");
	}, function(){
		$(this).css("background-color", "#8c8c8c");
	});

	$(".subsection").hover(function(){
		var highlightable = true;
		switch (this.id) {
			case "Postmates": highlight = Postmates;
			break;
			case "Amazon": highlight = Amazon;
			break;
			case "Zazzle": highlight = Zazzle;
			break;
			case "Influitive": highlight = Influitive;
			break;
			case "GameTheory": highlight = GameTheory;
			break;
			case "Cannon Blast": highlight = CannonBlast;
			break;
			case "Ball Dash": highlight = BallDash;
			break;
			case "Education": highlightable = false;
			break;
			case "Leadership": highlightable = false;
			break;
		}
		
		$(this).css("border-width", "0 0 0 5px");
		if (highlightable){
			$(highlight).css("background-color", "rgb(204, 0, 0)");
		}
	}, function(){
		$(this).css("border-width", "0 5px 0 0");
		$(this).css("margin", "0");
		$(highlight).css("background-color", "#8c8c8c");
	});
});

Postmates = "#Python, #Golang, #SQL, #Git, #Linux, #Git, #AWS, #Kube, #gRPC"
Amazon = "#Python, #JS, #HTML, #CSS, #SQL, #Git, #Linux, #AWS, #React"
Zazzle = "#C3, #SQL, #HTML, #CSS, #JS, #Net, #Git, #AWS, #Jenkins, #Linux, #gRPC";
Influitive = "#Ruby, #JS, #HTML, #CSS, #SQL, #RubyonRails, #Linux, #Git, #Vim, #Postgres, #Docker";
GameTheory = "#Python, #Git, #Linux"
CannonBlast = "#C3, #Unity, #Git";
BallDash = "#Swift, #Git, #SpriteKit";
Education = "#C, #C2, #Linux, #Vim, #Git";
Leadership = "";