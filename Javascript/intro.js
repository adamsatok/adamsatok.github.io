var delaylen = 500;
var spreadlen = 500;
function animateIntro(){
		$(".animatedBox").animate({height: "150px"}, delaylen);
        $(".thickBorder").delay(delaylen).animate({width: "580px",borderWidth: "0"}, spreadlen);
        $(".animatedBox").animate({width: "580px"}, spreadlen); 
        $(".introSubtext").delay(delaylen+spreadlen).animate({opacity: "1"}, spreadlen); 
    }
 window.onload = function(){animateIntro();};
