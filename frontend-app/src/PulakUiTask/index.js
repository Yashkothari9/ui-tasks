var modal1 = document.getElementById("modalSignIn1");

var openModalLink1 = document.getElementById("openModal1");

var closeModalSpan1 = document.getElementsByClassName("closeBox")[0];



openModalLink1.onclick = function(){
    modal1.style.display = "flex";
}

closeModalSpan1.onclick = function(){
    modal1.style.display = "none";
}

var modal2 = document.getElementById("modalSignIn2");

var openModalLink2 = document.getElementById("openModal2");

var closeModalSpan2 = document.getElementsByClassName("closeBox")[1];



openModalLink2.onclick = function(){
    modal2.style.display = "flex";
}

closeModalSpan2.onclick = function(){
    modal2.style.display = "none";
}