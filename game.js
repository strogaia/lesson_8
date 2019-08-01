// покажет пэкмана
function renderPacman(l, t, e){
    var box = document.getElementById("box");
    if(e == "checkBomb" ){
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class="pacman explode"></div>`
        health -= 50;
        if(health <= 0){
            alert("GAME OVER!");
        }
    } else if( e == "checkCoin"){
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class="pacman"></div>`
        money +=5;
        if(money >=0){
            alert(money);
        }
    } else{
        box.innerHTML = `<div style="left: ${l}px; top: ${t}px;" class="pacman"></div>`
    }
}

function renderBomb(l, t){
    var box = document.getElementById("box");
    box.innerHTML += `<div style="left: ${l}px; top: ${t}px;" class="bomb"></div>`
}


function renderCoin(l, t){
    var box = document.getElementById("box");
    box.innerHTML += `<div style="left: ${l}px; top: ${t}px;" class="coin"></div>`
}

function moveRite(){
    if(pl <= 440){
    pl += 10
    }
}

function moveLeft(){
    if(pl >= 10){
    pl -= 10
    }
}

function moveUp(){
    if(pt >= 10){
        pt -= 10
    }
}

function moveDown(){
    if(pt <= 440)
    pt += 10
}

function checkBomb(){
    if((pl+50)==bl && pt==bt || 
        (pl-50)==bl && pt==bt ||
        pl==bl && (pt+50)==bt ||
        pl==bl && (pt-50)==bt){
        return "checkBomb";
    }
}

function checkCoin(){
    if( pl == cl && pt == ct){
       return "checkCoin";
   }
}

function move(){
    console.log(event.key)
    switch(event.key){
        case "ArrowUp": moveUp(); break;
        case "ArrowDown": moveDown(); break;
        case "ArrowRight": moveRite(); break;
        case "ArrowLeft": moveLeft();  break;
    }
    if(checkBomb()){
        renderPacman(pl, pt, "checkBomb" );
    }else{
        renderPacman(pl, pt);
    }
    if(checkCoin()){
        renderPacman(pl, pt, "checkCoin");
    }else{
         renderPacman(pl, pt);
    }
    renderCoin(cl, ct);
    renderBomb(bl, bt);

}
////////////////////////////////

var pl = 100
var pt = 100
var bl = 200
var bt = 200
var cl = 300
var ct = 400
var health = 100
var money = 0;
renderPacman(pl, pt);
renderBomb(bl, bt);
renderCoin(cl, ct);
