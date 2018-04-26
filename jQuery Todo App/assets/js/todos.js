//Check off specific Todos by clicking:
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Removing the entire Todo when clicking on the X/trashcan button,
//i.e. fade out and delete. The first thing we do is listen
//for a click on any of the Xs/trashcan button (which is a <span>)
//Note: to prevent the <li> click handler from triggering
//when we click on the <span> (which is inside the <li>), what we
//can do is actually tell the event inside of the <span> to not
//trigger anymore on its parent elements. Do this by adding an
//"event" (or any other name) object inside of the <span> click
//listener and add an event called event.stopPropagation (a jQuery
//method that will stop the event from bubbling up, i.e. continue
//triggering to its parent elements - so it will fire on the <span>
//but it won't continue to the <li> click listener, or any of the
//other elements, e.g. <ul>, <div>).
$("ul").on("click", "span", function(event) {
	//remove the <li> clicked
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding new Todos
//The first thing to do is add a listener to the text input
//that fires when we hit <enter> (we can use .keypress or .on):
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//Grab new Todo from input and clear input area. Start by
		//saving it to a variable ("todoText"). use the .val()
		//to extract the value (the new Todo) out.
		var todoText = $(this).val();
		//Clear the input.
		$(this).val("");
		//Create a new <li> for new Todo and add to the <ul>.
		//Use the .append() method.
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}	
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});
