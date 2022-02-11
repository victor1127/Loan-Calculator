class LoanModel
{
    constructor(loanAmount,term,interestRate)
    {
        this.LoanAmount=loanAmount;
        this.Term=term;
        this.InterestRate=interestRate;
    }

}


function GetInitialValues()
{
    let Loan = new LoanModel();
    Loan.loanAmount =  document.getElementById("loanAmount").value;
    Loan.Term =  document.getElementById("term").value;
    Loan.InterestRate =  document.getElementById("term").value;
    
}


