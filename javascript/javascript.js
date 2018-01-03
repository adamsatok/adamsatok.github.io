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
			case "Mitre": highlight = Mitre;
			break;
			case "Metroland": highlight = Metroland;
			break;
			case "BrandSpark": highlight = BrandSpark;
			break;
			case "Ball Dash": highlight = BallDash;
			break;
			case "HatetheWait": highlight = HatetheWait;
			break;
			case "CubicleCoder": highlight = CubicleCoder;
			break;
			case "Education": highlight = Education;
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

Mitre = "#Ruby, #HTML, #CSS, #JS, #SQL, #RubyonRails, #PHP, #Linux, #Git, #SequelPro, #Vim";
Metroland = "#PHP, #HTML, #CSS, #JS, #SQL, #Python, #Yii, #Linux, #Git, #SequelPro, #Selenium, #Vim";
BrandSpark = "#PHP, #HTML, #CSS, #JS, #Java, #SQL, #Git";
BallDash = "#Swift, #Git"
HatetheWait = "#PHP, #HTML, #CSS, #JS, #SQL, #Git, #Linux, #Vim";
CubicleCoder = "#HTML, #CSS, #JS, #Git, #Linux, #Vim";
Education = "#C, #C2, #Linux, #Vim, #Git";
Leadership = "";