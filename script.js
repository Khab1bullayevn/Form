// Variables
let login = document.getElementById('login');
let password = document.getElementById('password');
let logBtn = document.getElementById('logBtn');
let box = document.getElementById('box');
let showBtn = document.getElementById('btnShow');
let hideBtn = document.getElementById('btnHide');

// Variables // end

// Show password

    function Show() { 
        if(showBtn.click) {
        showBtn.addEventListener('click' , function() {
            password.setAttribute('type','text');
            showBtn.style.display = 'none';
            hideBtn.style.display = 'block'
        })
    }}
    Show();
    
   // Show password // end

    // Log out and login in the application

let enterBtn = document.getElementById('boxHide');
let quitBtn = document.getElementsByClassName('btnbtnbtn')[0];
  function enterApp() {  
if(quitBtn.click){
        quitBtn.addEventListener('click',function() {
            box.style.display = 'none';
            enterBtn.style.display = 'block'
        })
    }
    if(enterBtn.click) {
        enterBtn.addEventListener('click',function() {
            box.style.display = 'block';
            enterBtn.style.display = 'none'
            password.value = ''
            login.value = ''
        })
    }
}
enterApp();

    // Log out and login in the application // end

// Main idea

let especially = document.getElementById('especially');
let formGet = document.getElementById('formGet')


// Main idea // end

// Hide password

function Hide() {
    if(hideBtn.click) {
        hideBtn.addEventListener('click',function() {
            password.setAttribute('type','password');
            hideBtn.style.display = 'none';
            showBtn.style.display = 'block'
        })
    }
}
Hide();

// Hide password // end

// gmailPlus
// function logValue() {
//     let valueLog = login.value
//     if(logBtn.click) {
//         logBtn.addEventListener('click',function() {
//             especially.setAttribute('href',`https://${valueLog}@gmail.com`)
//         })
//     }
// }
// logValue();
// gmailPlus // end


