document.querySelector(".button").addEventListener("click",function(e){

e.preventDefault();

document.querySelector("#preview").scrollIntoView({

behavior:"smooth"

});

});