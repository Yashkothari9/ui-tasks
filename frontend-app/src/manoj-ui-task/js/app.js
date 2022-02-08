var signin = document.querySelector('#sign-in-button');
var signinModalBg = document.querySelector('.signin-modal-bg');
var signinModalClose = document.querySelector('.signin-modal-close')

signin.addEventListener('click',function(){
    signinModalBg.classList.add('signin-bg-active');
});

signinModalClose.addEventListener('click',function(){
    signinModalBg.classList.remove('signin-bg-active');
});



var getStarted = document.querySelector('#get-started-button');
var getStartedModalBg = document.querySelector('.getstarted-modal-bg');
var getStartedModalClose = document.querySelector('.getstarted-modal-close')

getStarted.addEventListener('click',function(){
    getStartedModalBg.classList.add('getstarted-bg-active')
});

getStartedModalClose.addEventListener('click',function(){
    getStartedModalBg.classList.remove('getstarted-bg-active')
});

