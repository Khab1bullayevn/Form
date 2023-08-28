window.addEventListener('DOMContentLoaded', () => {
    const entering = document.getElementsByClassName('entering')[0]
    setTimeout(() => {
        entering.style.opacity = '0'
        entering.style.display = 'none'
        entering.style.overflow = 'hidden'
        entering.style.position = 'fixed'
        setTimeout(() => {
        entering.style.display = 'none'
        entering.style.opacity = '0'
        entering.style.overflow = 'hidden'
        entering.style.position = 'fixed'

        }, 1500)
        
    }, 3000)
})




let body = document.getElementsByTagName('body')[0]
let nav = document.getElementsByClassName('navbar')[0]
let btnTwo = document.getElementsByClassName('btnTwo')[0]
let estimater = document.getElementsByClassName('estimater')[0]
let thatCartScale = document.getElementsByClassName('thatCartScale')[0]
let circleBoxForImg = document.getElementsByClassName('circleBoxForImg')[0]
let like2 = document.getElementsByClassName('like2')[0]
let like1 = document.getElementsByClassName('like1')[0]
let modal = document.getElementsByClassName('modal')[0]
let send = document.getElementsByClassName('sendMassage')[0]
let enteres = document.getElementsByClassName('nameOfUser')[0]
let entere2 = document.getElementsByClassName('emailOfUser')[0]
let entere3 = document.getElementsByClassName('subjectOfUser')[0]
let close = document.getElementsByClassName('btn-close')[0]
let understanded = document.getElementsByClassName('btn-primary')[0]







example = estimater.textContent;
function collectLike() {
    if(btnTwo.click) {
        btnTwo.addEventListener('click',function() {
            estimater.textContent = +example + 1;
            like1.style.display = 'none';
            like2.style.display = 'block'
            estimater.style.marginTop = '-31px'
        })
    }
}
collectLike();

function errorModal() {
if(like2.click) {
    like2.addEventListener('click',function() {
            modal.style.display = 'block';
            like1.style.display = 'block'
            body.style.overflow = 'hidden'
    })
}}
errorModal();
function closes() {
if(close.click && understanded.click) {
    close.addEventListener('click' , function() {
        modal.style.display = 'none';
        body.style.overflow = 'visible'

    }
    )
}

understanded.addEventListener('click' , function() {
    modal.style.display = 'none';
    body.style.overflow = 'visible'
})

}
closes();


