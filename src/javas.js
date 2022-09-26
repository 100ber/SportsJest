var a=1;
$(document).ready(function(){


$("#modbtn").click(function(){
if(a==1){a=0;
$("#mode").css("background-image","linear-gradient(to right,red,purple,black)");}
else{
a=1;
$("#mode").css("background-image","linear-gradient(to right,red,black");
}
});



});


$(function() {
$('#toggle-two').bootstrapToggle({
  on: 'E-Sports Mode',
  off: 'Sports Mode',
  width : "25vh",
  height : "5vh",
  onstyle :"danger",
  offstyle :"success"
});
})

