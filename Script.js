const roles = [

    "Software Developer",

    "QA Automation Engineer",

    "Cloud Enthusiast",

    "Python Developer",

    "Networking Enthusiast"

];

let roleIndex = 0;

let charIndex = 0;

let currentRole = "";

let isDeleting = false;

function typeEffect(){

    currentRole = roles[roleIndex];

    const typing = document.getElementById("typing");

    if(!isDeleting){

        typing.textContent = currentRole.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentRole.length){

            isDeleting = true;

            setTimeout(typeEffect,1000);

            return;

        }

    }

    else{

        typing.textContent = currentRole.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 50 : 120);

}

typeEffect();
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}