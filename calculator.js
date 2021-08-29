let buffer = "0";
let rinningTotal = 0;
let previosOperator;


let screen = document.querySelector('.screen')


function buttonClick(value){

    console.log(value)
    
    
    if (isNaN(value) === false){
        if (buffer === "0"){
            buffer = value
            screen.innerText = buffer
        }
        else{
            screen.innerText += value
        }
    }

    else{
        switch(value){

            case "C":
                buffer = "0"
                screen.innerText = "0"
                rinningTotal = 0
                break;
            case "=":
                if(previosOperator === null){
                    return;
                }
                flushOperation(parseInt(screen.innerText))
                
                break; 
            case "+":
            case "-":
            case '×':
            case "÷":
                symbol(value)
                screen.innerText = 0
                break;
        }
    }
    
}



function symbol(symbol){
    if (buffer === "0")
    return

    console.log("hello")
    a = parseInt(screen.innerText) 

    if (rinningTotal === 0){
        rinningTotal = a
    }
    else{

    }
    previosOperator = symbol;

    buffer = "0";
}

function flushOperation(intbuffer) {
    
    
        if(previosOperator === "+"){
            rinningTotal += intbuffer
        }
        else if (previosOperator === "-"){
            rinningTotal -= intbuffer
        }
        else if (previosOperator === "×"){
            rinningTotal *= intbuffer
        }
        else if (previosOperator === "÷"){
            rinningTotal /= intbuffer
        }
        screen.innerText = rinningTotal
        
    
    
}

function init(){

    document.querySelector('.calc-buttons')
    .addEventListener('click' ,function(event){
    buttonClick(event.target.innerText);    


    })

    

}

init()