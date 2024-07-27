//This function calculates the mortgage repayment per month
function calculateRepayment(mortgageAmount, interestRate , year){
    //First we calculate the amount of months which shows the number of payments
    let numberOfPayments = year * 12;
    //We devide the number by 100 to get a decimal number and then by 12 for each month in a year
    let monthlyInterestRate = interestRate / 100 / 12;
    /*This part calculates the acutal amount of payment (based on the mortgage repayment formula)
    First we take the mortgage amount and multiply it by the monthly rate, and then
    devide it by the compounded effect of interest over the number of payments*/
    const monthlyPayment = mortgageAmount * monthlyInterestRate / (1 - Math.pow(1 + 
    monthlyInterestRate, -numberOfPayments));
    
        return monthlyPayment; //Returns the output which is the monthly amount to be paid
    } //The end of this function
    
    //Now we get the user input by asking questions using prompt
    //Asking for the mortgage amount
    let mortgageAmount = parseFloat(prompt("Please enter your mortgage amount: "));
    //Asking for anual interest rate
    let interestRate = parseFloat(prompt("Please enter your anual interest rate in %: "));
    //Asking for the period that user wants to make payments
    let year = parseInt(prompt("How many years are you willing to pay?"));
    
    //Now we calculate the monthly amount to pay using the calculateRepayment function
    let monthlyPayment = calculateRepayment(mortgageAmount, interestRate , year);
    
    //The result will be shown in the console
    console.log(`Your monthly mortgage payment is $${monthlyPayment.toFixed(2)}`);  