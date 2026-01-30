function calculateBMI() {
    // 1. Get values from the inputs
    const feet = parseFloat(document.getElementById('height-feet').value);
    const inches = parseFloat(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // 2. Validate input (check if weight is entered)
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    // 3. Apply your formula
    // Height in meters = (feet * 0.3048) + (inches * 0.0254)
    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);
    
    // BMI = weight / (heightInMeters * heightInMeters)
    const bmi = weight / Math.pow(heightInMeters, 2);

    // 4. Display the result (rounded to 1 decimal place)
    const bmiOutput = bmi.toFixed(1);
    document.getElementById('bmi-value').innerText = bmiOutput;

    // 5. Determine the status
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