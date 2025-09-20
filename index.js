"Use strict";
//varibole & typeof practice
    let name = "Naeem";
    let age= 20;
    let student= true;
    let bigInt = 01801950332081;
    let person ={
        firstName: "pranjit",
        LastName:"biswas"
    }
    let language =['Html','CSS','Javascript'];
    let x;
    let y = null;



    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof student);
    console.log(typeof bigInt);
    console.log(typeof person);
    console.log(typeof language);
    console.log(typeof x);
    console.log(typeof y);


    //Template Literal 

    console.log(`My name is ${name} and I'm ${age}years old `);

    //object 

    console.log(person.firstName);
    person.age =20;
    console.log(person);

    //Math ও Random Function
    let rndomNum =Math.floor(Math.random()*1000);
    console.log("Random Namber is:",rndomNum);
    
    //Prompt, Alert, Confirm 
    let userAge = prompt("How old are you?");
    let msg = confirm("Do you want to see yor age?");
    if(msg){
        alert(`You are ${userAge} yers old`)
    }


    //Mouse Events (HTML + JS)


    let title = document.getElementById('title');
    let btn = document.getElementById('btn');
   
    btn.addEventListener("click",()=>{
        title.style.color = "#fff";
        title.style.backgroundColor="red"
    })
    btn.addEventListener("mouseover",()=>{
        btn.style.color = "#fff";
        btn.style.backgroundColor="Yellow";
        btn.style.padding= "10px";
    });








