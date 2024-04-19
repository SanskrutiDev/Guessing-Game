const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max) +1;

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random ) {
        console.log("You are right!congrats!,random number was : "+ random);
        break;
    }else if (guess < random){
        guess = prompt("your gues was too small,please try again");

    }else {
        guess = prompt("your gues was too large,please try again");
    }
    

}