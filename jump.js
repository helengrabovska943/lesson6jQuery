
//Coz it's balls destiny
alert("We like to move it, move it!")

//Let's make rugby ball move
$(document).ready(function(){
	$(".img3").click(function(){
	    $(this).animate( { left: '50px' }, 1000 );
		$(this).animate( { top: '200px' }, 1000 );
	});
}); 

//Time to volleyball ball to do smth
$(document).ready(function(){
	$(".img2").click(function(){
	    $(this).animate( { bottom: '30px' }, 1000 );
		 $(this).animate( { right: '30px' }, 1000 );
	});
});

//Basketball ball, you turn
$(document).ready(function(){
	$(".img1").click(function(){
	    $(this).animate( { bottom: '50px' }, 1000 );
		$(this).animate( { right: '50px' }, 1000 );
	});
});

$(document).ready(function(){
    $(".img1").click(function(){
        var bball = $(".img1");
        bball.animate({height: '400px', opacity: '0.4'}, "slow");
        bball.animate({width: '400px', opacity: '0.8'}, "slow");
    });
});


