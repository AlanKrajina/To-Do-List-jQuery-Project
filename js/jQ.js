// http://api.jquery.com/on/

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

/*	
	if($(this).css("color") === "rgb(128,128,128)"){
	
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
		}
		else {
			$(this).css({
				color:"gray",
				textDecoration:"line-through"
			});
		}
*/
});



// click on X to delete Todo, event stops bubbling, parent retrievs LI that is enclosing span, after fading we removed LI

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
	// grabbing the value of text from input
	let todoText = $(this).val();
	//reseting input to empty
	$(this).val("");
	// create new li and add to ul
	$("ul").append("<li><span>X </span>"+ todoText +"</li>")
	}
})