$("h1").css("color","red");
$("h1").css("font-size","5rem");

$("h1").addClass("big-title");



$("h1").click(function()
{
  $("h1").css("color","purple");
}
);

$("input").keypress(function(event)
{
    $("h1").text(event.key);
}
);
