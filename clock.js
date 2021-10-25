/*
const clock = document.querySelector("#clock");



function Clock(){
    setInterval(function(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const second = date.getSeconds();
        clock.innerText = `${hours < 10 ? `0${hours}`
        :hours}:${minutes < 10 ? `0${minutes}` 
        :minutes}:${second < 10 ? `0${second}`:second}`;
    },1000);
}


Clock();
*/

/*
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText =`${date.getHours() <10 ? `0${date.getHours()}`:date.getHours()}:${date.getMinutes() <10 ? `0${date.getMinutes()}`:date.getMinutes()}:${date.getSeconds() <10 ? `0${date.getSeconds()}`:date.getSeconds()}`;
}

getClock();
setInterval(getClock,1000);
*/




const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //padStart(2,"0") : 2자리로 채우되, 2자리가 안될 경우 앞에를 0으로 채운다. 비슷한 것으로 padEnd()도 잇음.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${second}`;
}

getClock();
setInterval(getClock,1000);
