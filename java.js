const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);
    console.log(bmiValue);

    bmiInputEl.value = bmiValue;//bmi value data from the input are disp0layed in a bmi result input field inHTML

    console.log(bmiValue);

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal weight";
    }else if (bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Overweight";
    }else if (bmiValue <= 30){
        weightConditionEl.innerText = "Obesity";
    }//Then we manipulate the weigght condition text based on a if else statments and their values//
}




btnEl.addEventListener("click", calculateBMI)