


let i = document.querySelector("#Ok");
let yes = document.querySelector("#yes");
let like = document.querySelector("#like")

let price = parseInt(document.getElementById('price').innerHTML);
let prix = parseInt(document.getElementById('prix').innerHTML);
let prezo = parseInt(document.getElementById('prezo').innerHTML);


const score = document.getElementById('sum');
score.innerHTML = price + prix + prezo;

let num = document.querySelector('#num');
let number = document.querySelector('#number');
let numero = document.querySelector('#numero');





// Card 1



i.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor){
        i.style.backgroundColor = ''
    } else {
        i.style.backgroundColor = 'red'
    }
})

let del = document.querySelector("#delete");
del.addEventListener('click', (e) => {
    del.parentNode.remove();
    score.innerHTML = parseInt(score.innerHTML) - (price*parseInt(num.innerHTML));
    
})

let plus = document.querySelector('#plus');
plus.addEventListener('click', (e) => {
    num.innerText = parseInt(num.innerText) + 1;
    score.innerHTML = parseInt(score.innerHTML) + price
});

let mines = document.querySelector('#mines');
mines.addEventListener('click', (e) => {
    if(parseInt(num.innerText) > 0){
    num.innerText = parseInt(num.innerText) - 1;
    score.innerHTML = parseInt(score.innerHTML) - price
}
});

// Card 2

yes.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor){
        yes.style.backgroundColor = ''
    } else {
        yes.style.backgroundColor = 'red'
    }
})

let sup = document.querySelector("#del");
sup.addEventListener('click', (e) => {
    sup.parentNode.remove();
    score.innerHTML = parseInt(score.innerHTML) - (prix*parseInt(number.innerHTML));
    
})

let add = document.querySelector('#add');
add.addEventListener('click', (e) => {
    number.innerText = parseInt(number.innerText) + 1;
    score.innerHTML = parseInt(score.innerHTML) + prix
}); 


let take = document.querySelector('#take');
take.addEventListener('click', (e) => {
    if(parseInt(number.innerText) > 0){
    number.innerText = parseInt(number.innerText) - 1;
    score.innerHTML = parseInt(score.innerHTML) - prix
}
});

// Card 3

like.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor){
        like.style.backgroundColor = ''
    } else {
        like.style.backgroundColor = 'red'
    }
})

let none = document.querySelector("#none");
none.addEventListener('click', (e) => {
    none.parentNode.remove();
    score.innerHTML = parseInt(score.innerHTML) - (prezo*parseInt(numero.innerHTML));
    
})

let ajout = document.querySelector('#ajout');
ajout.addEventListener('click', (e) => {
    numero.innerText = parseInt(numero.innerText) + 1;
    score.innerHTML = parseInt(score.innerHTML) + prezo
}); 


let moins = document.querySelector('#moins');
moins.addEventListener('click', (e) => {
    if(parseInt(numero.innerText) > 0){
    numero.innerText = parseInt(numero.innerText) - 1;
    score.innerHTML = parseInt(score.innerHTML) - prezo
}
});


