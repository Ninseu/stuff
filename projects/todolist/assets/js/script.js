//check off speicifc todos by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo txt from input
		var todoText = ($(this).val());
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
	}
});

//fading-out/in the input text through plus sign
$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle(300);
});
