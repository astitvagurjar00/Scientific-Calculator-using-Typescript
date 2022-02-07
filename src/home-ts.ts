
/**
 * function creating for backspace operation 
 * @param calc {user input}
 * 
 */
function backspace(calc): void {                                            
    let size:number = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size-1);
}

let checkBoxinitial:boolean=false; /** variable for checking that checkbox is checked or not */

function checkBox():void{    /**function to check DEG function is on or not */
    let checkbox = document.getElementById("btn")! as HTMLInputElement;
    let CheckBox = document.getElementById("CheckBox")! as HTMLInputElement;
    if(checkbox.checked == true){
        CheckBox.style.backgroundColor = "lightblue";
        checkBoxinitial=true;
    }
    else{
        CheckBox.style.backgroundColor = "white";
        checkBoxinitial=false;
    }
    console.log(checkBoxinitial);
}
 
/**
 *  function to perform x^2 operation
 * @param {user input} calc 
 */
function powerSq(calc):void{
    let num:number=Number(calc.display.value);
    calc.display.value = Math.pow(num,2);
}

/**
 * function for finding inverse of number
 * perform 1/x operation
 * @param {user input} calc 
 */
function inverseNum(calc):void{
    let num:number = Number(calc.display.value);
    calc.display.value = 1/num;
}

/**
 * function to convert positive number into negetive or negetive number to positive
 * perform +/- operation 
 * @param {user input} calc 
 */
function changeSign(calc):void{
    let num:number=Number(calc.display.value);
    if (num<0){
        num = num*(-1);
        calc.display.value = num;
    }
    else{
        num = num*(-1);
        calc.display.value = num;
    }
}

/**
 * function to find the modlo division 
 * perform |x| operration 
 * @param {user input} calc 
 */
function changeToPositive(calc):void{
    let num:number = Number(calc.display.value);
    if (num<0){
        num = num*(-1);
    }
    calc.display.value = num;
}

let temp:number;
/**
 * function to perform memory operation
 * @param {user input} calc 
 * @param {when button clicked then passed value of button} value 
 */
function memoryFunction(calc, value:string):void{

    let num:number = Number(calc.display.value);
    console.log("clicked");
    //let temp:number;
    /** if to clear memory value  */
    if(value == "MC"){
         temp = 0;
    }
    /**else if to display stored value  */
    else if (value == "MR"){
        calc.display.value = temp; 
    }
    /**else if to add user input with stored value */
    else if(value == "M+"){
        calc.display.value = num+temp;
    }
    /**else if to subtract user input from stored value */
    else if(value == "M-"){
        calc.display.value = num-temp;
    }
    /**else if to replace stored value to user input */
    else if (value == "MS"){
        temp = num;
    }
    /**other wise perfom else part */
    else{
        calc.display.value = "Undefined"
    }
}

/**
 * 
 * @param {user input} calc 
 * @param {when button clicked then passsed valueof button} value 
 */
function trignoFunc(calc,value:string):void{

    let temp:number;     /**temperory variable to perform calculation */
    let num:number = Number(calc.display.value);  /**stores user input */
    console.log("clicked");
    /**
     * check if value equals sin then find sin of user input 
     */
    if(value == "sin"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.sin(num);
        }
        else{
            temp = Math.sin(num);
            temp = 57.2958*num;
        }
        calc.display.value = temp;
    }
    /**
     * check if value equals cos then find cos of user input 
     */
    else if(value == "cos"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.cos(num);
        }
        else{
            temp = Math.cos(num);
            temp = 57.2958*num;
        }
        calc.display.value = temp;
    }
    /**
     * check if value equals tan then find tan of user input 
     */
    else if(value == "tan"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.tan(num);
        }
        else{
            temp = Math.tan(num);
            temp = 57.2958*num;
        }
        calc.display.value = temp;
    }
    /**
     * check if value equals cosec then find cosec of user input 
     */
    else if(value == "cosec"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.sin(num);
            temp = 1/temp;
        }
        else{
            temp = Math.sin(num);
            temp = 57.2958*num;
            temp = 1/temp;
        }
        calc.display.value = temp;
    }
    /**
     * check if value equals sec then find sec of user input 
     */
    else if(value == "sec"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.cos(num);
            temp = 1/temp;
        }
        else{
            temp = Math.cos(num);
            temp = 57.2958*num;
            temp = 1/temp;
        }
        calc.display.value = temp;
    }
    /**
     * check if value equals cot then find cot of user input 
     */
    else if(value == "cot"){
        /** this condition checks answer should be in radian or degree */
        if(checkBoxinitial == false){
            temp = Math.tan(num);
            temp = 1/temp;
        }
        else{
            temp = Math.tan(num);
            temp = 57.2958*num;
            temp = 1/temp;
        }
        calc.display.value = temp;
    }
    else{
        calc.display.value = "Undefined";
    }
}

/**
 * function to perform all function dropdown operations
 * @param {user input} calc 
 * @param {when button clicked teh passed value of button} value 
 */
function funcFunction(calc,value:string):void{
    
    let temp:number;
    let num:number = Number(calc.display.value);
    console.log("clicked");

    /**if value is abs then find absolute value of a number */
    if(value == "abs"){
        temp = Math.abs(num);
    }

    /** returns the value of a number rounded to the nearest integer. */
    else if(value == "round"){
        temp = Math.round(num);
    }
    /**returns the largest integer less than or equal to a given number. */
    else if(value == "floor"){
        temp = Math.floor(num);
    }
    /** function always rounds a number up to the next largest integer. */
    else if(value == "ceil"){
        temp = Math.ceil(num);
    }
    /**otherwise perform else part */
    else{
        temp = 0;
    }

    calc.display.value = temp;

}

/* Creating function to calculate factorial of element */
function calculate(calc):void {
     
    /* Check if function include ! character then
    calculate factorial of number */
    if(calc.display.value.includes("!")) {
         
        let size:number = calc.display.value.length;
        let n:number = Number(calc.display.value.substring(0, size-1));
        let f:number = 1;
         
        for(let i:number = 2; i <= n; i++)
            f = f*i;
        calc.display.value = f;
    }
     
    /* If function include % character then calculate
    the % of number */
    else if(calc.display.value.includes("mod")) {
         
        const myArray:number = (calc.display.value.split("mod"));
        let num:number = myArray[0] % myArray[1];
        calc.display.value = num;
    }

    else   
        /* Otherwise evaluate and execute output */
        calc.display.value = eval(calc.display.value);
        console.log("watch");
}