document.addEventListener('DOMContentLoaded', function() {

// ************** Corações **************
x=document.querySelector('.coracao1')
y=document.querySelector('.coracao2')
z=document.querySelector('.coracao3')

// Resposta 1
let icone1 = document.querySelector('.anim1') 
var animation1 = bodymovin.loadAnimation({
    container: icone1,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lucasfonseca19.github.io/app/coracao.json'
})
icone1.addEventListener('click',function(){
    animation1.playSegments([0,10],true);
    x.innerHTML = 4
})




// Resposta 2
let icone2 = document.querySelector('.anim2') 
var animation2 = bodymovin.loadAnimation({
    container: icone2,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lucasfonseca19.github.io/app/coracao.json'
})
icone2.addEventListener('click',function(){
    animation2.playSegments([0,10],true)
    y.innerHTML = 4
})
// Resposta 3

let icone3 = document.querySelector('.anim3') 
var animation3 = bodymovin.loadAnimation({
    container: icone3,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lucasfonseca19.github.io/app/coracao.json'
})
icone3.addEventListener('click',function(){
    animation3.playSegments([0,10],true)
    z.innerHTML = 1

})



})