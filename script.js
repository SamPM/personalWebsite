function displayJourney(step){
    switch(step) {
    case 1:
        displayStep1();
        break;
    case 2:
        displayStep2();
        break;
    case 3:
        displayStep3();
        break;
    case 4:
        displayStep4();
        break;
    default:
        displayStep5();
    }
}

function displayStep1(){
    //Display correct image
    document.getElementById("journey-img-mob").classList.remove("d-none");
    document.getElementById("journey-img-mob").classList.add("d-md-none", "d-block");
    var img = document.getElementById("journey-img");
    img.classList.remove("d-block");
    img.classList.add("d-none", "d-md-block");
    img.src = "journeyBar.png";
    img.style.width = "75vw";
    img.style.padding = "30px 0px 50px";
    //Display correct paragraph
    hideParagraphs();
    var para = document.getElementById("info-para");
    para.style.display = "inline";
    //Display progress bar
    enableBars();
    var bar1 = document.getElementById("bar1");
    bar1.disabled = true;
}

function displayStep2(){
    //Display correct image
    document.getElementById("journey-img-mob").classList.remove("d-md-none", "d-block");
    document.getElementById("journey-img-mob").classList.add("d-none");
    var img = document.getElementById("journey-img");
    img.classList.remove("d-none", "d-md-block");
    img.classList.add("d-block");
    img.style.display ="block-center";
    img.src = "bioIcon.png";
    img.style.width = "180px";
    img.style.padding = "15px 0px 30px";
    //Display correct paragraph
    hideParagraphs();
    var para = document.getElementById("bio-para");
    para.style.display = "inline";
    //Display progress bar
    enableBars();
    var bar2 = document.getElementById("bar2");
    bar2.disabled = true;
}

function displayStep3(){
    //Display correct image
    document.getElementById("journey-img-mob").classList.remove("d-md-none", "d-block");
    document.getElementById("journey-img-mob").classList.add("d-none");
    document.getElementById("journey-img-mob").display = "none";
    var img = document.getElementById("journey-img");
    img.classList.remove("d-none", "d-md-block");
    img.classList.add("d-block");
    img.style.display ="block-center";
    img.src = "compSciIcon.png";
    img.style.width = "180px";
    img.style.padding = "15px 0px 30px";
    //Display correct paragraph
    hideParagraphs();
    var para = document.getElementById("comp-para");
    para.style.display = "inline";
    //Display progress bar
    enableBars();
    var bar3 = document.getElementById("bar3");
    bar3.disabled = true;
}

function displayStep4(){
    //Display correct image
    document.getElementById("journey-img-mob").classList.remove("d-md-none", "d-block");
    document.getElementById("journey-img-mob").classList.add("d-none");
    document.getElementById("journey-img-mob").display = "none";
    var img = document.getElementById("journey-img");
    img.classList.remove("d-none", "d-md-block");
    img.classList.add("d-block");
    img.style.display ="block-center";
    img.src = "graduation.png";
    img.style.width = "180px";
    img.style.padding = "15px 0px 30px";
    //Display correct paragraph
    hideParagraphs();
    var para = document.getElementById("grad-para");
    para.style.display = "inline";
    //Display progress bar
    enableBars();
    var bar4 = document.getElementById("bar4");
    bar4.disabled = true;
}

function displayStep5(){
    //Display correct image
    document.getElementById("journey-img-mob").classList.remove("d-md-none", "d-block");
    document.getElementById("journey-img-mob").classList.add("d-none");
    document.getElementById("journey-img-mob").display = "none";
    var img = document.getElementById("journey-img");
    img.classList.remove("d-none", "d-md-block");
    img.classList.add("d-block");
    img.style.display ="block-center";
    img.src = "london.png";
    img.style.width = "180px";
    img.style.padding = "15px 0px 30px";
    //Display correct paragraph
    hideParagraphs();
    var para = document.getElementById("lond-para");
    para.style.display = "inline";
    //Display progress bar
    enableBars();
    var bar5 = document.getElementById("bar5");
    bar5.disabled = true;
}

function enableBars(){
    var bar1 = document.getElementById("bar1");
    bar1.disabled = false;
    var bar2 = document.getElementById("bar2");
    bar2.disabled = false;
    var bar3 = document.getElementById("bar3");
    bar3.disabled = false;
    var bar4 = document.getElementById("bar4");
    bar4.disabled = false;
    var bar5 = document.getElementById("bar5");
    bar5.disabled = false;
}

function hideParagraphs(){
    var para1 = document.getElementById("info-para");
    para1.style.display = "none";
    var para2 = document.getElementById("bio-para");
    para2.style.display = "none";
    var para3 = document.getElementById("comp-para");
    para3.style.display = "none";
    var para4 = document.getElementById("grad-para");
    para4.style.display = "none";
    var para5 = document.getElementById("lond-para");
    para5.style.display = "none";
}
