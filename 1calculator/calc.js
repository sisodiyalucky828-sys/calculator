let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
// console.log(screen1)
// console.log(screen2)
let btns = document.getElementById("btns")


// console.log(btns)
 let expression = "";

 btns.addEventListener("click",(e)=>{
    if(e.target.tagName !== "BUTTON")
        return;

const value = e.target.innerText;
      
 if (value ==="Ac"){
    expression = "";
    screen1.value="0";
    screen2.value="";
    return;
 }
  if(value==="ce"){
    expression=expression.slice(0,-1);
    screen1.value = expression;
    return;
  }
  if(value==="sq"){
    if(expression==="")return;
    let num=Number(expression);
    let sqr = num*num;
    screen1.value=sqr;
    screen2.value=`${num}`;
    expression=sqr.toString();
    return;

}


  
  if(value==="="){
    try{
        let result=eval(expression);
        screen2.value  = result;

    } catch{
        screen2.value = "Error";
    }
    return;
  }
  expression+=value;
  screen1.value = expression;
 })
