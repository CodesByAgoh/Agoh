
$(document).ready(function(){
  function animation(){
    $('.memoji2').animate({
      top: "-40px"
    },1000,function(){
      $('.memoji2').animate({
        top: "5px"
      },800,animation)
    })
  }
  animation()
});



// querySelectorAll().ready(function(){

// });


var string = "I'm agoh kelechi";
var agoh = string.split("");
var el = document.getElementById("agoh");
(function animate() {
  agoh.length > 0 ? el.innerHTML += agoh.shift() :
  clearTimeout(running);
  var running = setTimeout(animate, 160);
})();
