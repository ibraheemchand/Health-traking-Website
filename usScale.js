function calculateBMI() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    
    if (!genderSelected) {
        alert("Please select your Gender before calculating!");
        return; 
    }

    const feet = parseFloat(document.getElementById('height-feet').value);
    const inches = parseFloat(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value); 

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

  
    const totalInches = (feet * 12) + inches;

    
    const bmi = (weight / Math.pow(totalInches, 2)) * 703;

    const bmiOutput = bmi.toFixed(1);
    document.getElementById('bmi-value').innerText = bmiOutput;

    let status = "";
    const statusElement = document.getElementById('bmi-status');

   
    if (bmi < 18.5) {
        status = "Underweight";
        statusElement.style.color = "orange";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal weight";
        statusElement.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
        statusElement.style.color = "orange";
    } else {
        status = "Obese";
        statusElement.style.color = "red";
    }

    statusElement.innerText = `Status: ${status}`;
}