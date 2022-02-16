function GetValues()
{
    let loan = GetInitialValues(new LoanModel());
    let loanCalculator = new LoanCalculator(loan);
    DisplayContent(loanCalculator);

}


function GetInitialValues(LoanModel)
{
    LoanModel.LoanAmount = document.getElementById("loanAmount").value,
    LoanModel.Balance = document.getElementById("loanAmount").value,
    LoanModel.Term = document.getElementById("term").value,
    LoanModel.InterestRate = document.getElementById("rate").value/100;
    return LoanModel;
    
}

function DisplayContent(loanCalculator)
{
    let tBody=document.getElementById("tableresult");
    let template=document.getElementById("tableTemplate");
    tBody.innerHTML="";
    let term = loanCalculator.Loan.Term;
    let month = 1;

    while(month<=term)
    {
        let tableRow = document.importNode(template.content,true);
        let rowCols = tableRow.querySelectorAll("td");
        FillOutTableData(rowCols,loanCalculator,month);
        tBody.appendChild(tableRow);
        month++;
    }

    let totalCost = (parseFloat(loanCalculator.Loan.LoanAmount)+parseFloat(loanCalculator.Loan.TotalInterest)).toFixed(2);

    document.getElementById("resultMonthlyP").innerHTML="$"+loanCalculator.Loan.Payment;
    document.getElementById("totalPrincipal").innerHTML="$"+loanCalculator.Loan.LoanAmount;
    document.getElementById("totalInterest").innerHTML="$"+loanCalculator.Loan.TotalInterest;
    document.getElementById("totalCost").innerHTML="$"+totalCost;

}

function FillOutTableData(rowCols, loanCalculator,month)
{

    var i= 0;
    while(true)
    {
        loanCalculator.GetValues();
        rowCols[i].textContent=month;
        rowCols[i+1].textContent="$"+loanCalculator.Loan.Payment;
        rowCols[i+2].textContent="$"+loanCalculator.Loan.Principal;
        rowCols[i+3].textContent="$"+loanCalculator.Loan.Interest;
        rowCols[i+4].textContent="$"+loanCalculator.Loan.TotalInterest;
        rowCols[i+5].textContent="$"+loanCalculator.Loan.Balance;
        break;
    }
}

//Classes-----------------------------------------------------------------------------------

class LoanCalculator
{   
    constructor(LoanModel)
    {
        this.Loan = LoanModel;
    }

    GetMonthlyPayment()
    {
        let rate = this.GetMonthlyRate();
        let monthlyPayment =  (rate*this.Loan.LoanAmount)/(1-(1+rate)**-60);
        return monthlyPayment.toFixed(2);
    }

    GetMonthlyRate()
    {
        let rate = (1 + this.Loan.InterestRate)**(1/12);
        return rate-1;
    }

    GetInterest()
    {
        let rate = this.GetMonthlyRate();
        let output = rate * this.Loan.Balance;
        return output.toFixed(2);

    }
    GetValues()
    {
        this.Loan.Payment=this.GetMonthlyPayment();
        this.Loan.Interest=this.GetInterest()
        this.Loan.Principal=(this.Loan.Payment-this.Loan.Interest).toFixed(2);
        this.Loan.TotalInterest=(parseFloat((this.Loan.TotalInterest + parseFloat(this.Loan.Interest)).toFixed(2)));
        this.Loan.Balance=(this.Loan.Balance-this.Loan.Principal).toFixed(2);
    }

}

class LoanModel
{
    constructor()
    {
        this.LoanAmount;
        this.Term;
        this.InterestRate=0; 
        //---------  
        this.Payment; 
        this.Principal;
        this.Interest;
        this.TotalInterest=0;
        this.Balance;
    } 
}

