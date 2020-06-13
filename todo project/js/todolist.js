//check off specific todos by clicking
// here we are selecting ul tag then inside we use li tag bcz jQuery only applied on existing element
//so we choose ul and when we create new li in input it also uses the property of on click listener
// also use on() instead of click() to set features in coming elements
$("ul").on("click", "li",function () {
	$(this).toggleClass("completed");
});
//remove the todos when dustbin is clicked
$("ul").on("click","span", function (event) {
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
	event.stopPropagation();
});
// adding new element when we write something in the input text
$("input").keypress(function(event){
	if(event.which === 13)
	{
		var todotext= $(this).val();
		$(this).val("");
		// to add a new element in list ul
		// make html and append it
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+ todotext +"</li>");
	}
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle("slow");
});