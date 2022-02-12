function GetValues()
{
    let loan = GetInitialValues(new LoanModel());
    GetMonthlyPayment(loan);
}

function LoanModel()
{
    this.LoanAmount;
    this.Term;
    this.InterestRate;
}

function GetInitialValues(LoanModel)
{
    LoanModel.LoanAmount = document.getElementById("loanAmount").value,
    LoanModel.Term = document.getElementById("term").value,
    LoanModel.InterestRate = document.getElementById("rate").value
    return LoanModel;
    
}

function GetMonthlyPayment(loan)
{
    //Calcular cuota préstamo = (Monto * (TEM x (1 + TEM) ^ n)) / ((1 + TEM) ^ n) - 1)
    let monthlyPayment = 

}
