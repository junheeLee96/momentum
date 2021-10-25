
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY =  "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);

}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername ===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(saveUsername);
}

/*

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.ariaValueMax;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)

}





const saveUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




*/


