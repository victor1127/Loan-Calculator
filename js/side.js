function GetValues()
{
    let loan = GetInitialValues(new LoanModel());
    let calculator = new LoanCalculator(loan);
    let test = calculator.GetMonthlyPayment();
}

function LoanModel()
{
    this.LoanAmount;
    this.Term;
    this.InterestRate;
}
//loanAmortiguacion
function GetInitialValues(LoanModel)
{
    LoanModel.LoanAmount = document.getElementById("loanAmount").value,
    LoanModel.Term = document.getElementById("term").value,
    LoanModel.InterestRate = document.getElementById("rate").value
    return LoanModel;
    
}

function DisplayContent(LoanCalculator)
{
    let monthlyPayment = document.getElementById("resultMonthlyP");
    monthlyPayment.innerHTML=
}



//Classes-----------------------------------------------------------------------------------

class LoanCalculator
{
    constructor(LoanModel)
    {
        this.LoanAmount = LoanModel.LoanAmount;
        this.TotalPrincipal = LoanModel.LoanAmount;
        this.Term = LoanModel.Term;
        this.InterestRate = LoanModel.InterestRate/100;
        this.MonthlyPayment;
        this.TotalInterest;
        this.TotalCost;
        this.Principal;
        this.InterestRate;
        this.Balance;
    }

    GetMonthlyPayment()
    {
        let rate = this.GetMonthlyInterestPercentage();
        let monthlyPayment =  (rate*this.LoanAmount)/(1-(1+rate)**-60);
        return monthlyPayment.toFixed(2);
    }

    GetMonthlyInterestPercentage()
    {
        let rate = (1 + this.InterestRate)**(1/12);
        return rate-1;
    }

}