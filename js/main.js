var newMember;

function myWelcomeMessage(){
    newMember= prompt("Welcome! what is your name?");
    alert("Wow! " + newMember + " " + "we are glad to have you on Soft meals Chocolate and Coffee Shop. Feel free to explore on our web page for better experience on your future tour campaign. Thank You!");
}

console.log(myWelcomeMessage());

function changePics(object, url){
    object.src= url;
}