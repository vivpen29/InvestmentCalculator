function calculateData (inputData) {

    let initialInvestment = parseInt(inputData.req.initialInvestment);
    let annualInvestment = parseInt(inputData.req.annualInvestment);
    let interestRate = parseFloat(inputData.req.interestRate);
    let duration = parseInt(inputData.req.duration);

    let prevYearInvestmentVal = initialInvestment;
    let prevYearTotalInterest = 0;
    let returnArr = [];
    for (let i = 1; i <= duration; i++) {
        const year = i;
        let invCapital = initialInvestment + (annualInvestment * i);
        let interestPerYear = (prevYearInvestmentVal * interestRate)/100;
        let totalInterest = prevYearTotalInterest + interestPerYear;
        let invVal = invCapital + totalInterest;

        returnArr.push({
            year: year,
            invVal: invVal,
            interestPerYear: interestPerYear,
            totalInterest: totalInterest,
            invCapital: invCapital
        });

        prevYearTotalInterest = totalInterest;
        prevYearInvestmentVal = invVal;
    }

    return returnArr;
}

export default function Result ({inputData}) {
    const dataRow = calculateData(inputData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {dataRow.map((row, i) => {
                    return <tr key={i} className="center">
                                <td>{row.year}</td>
                                <td>${Math.round(row.invVal).toLocaleString()}</td>
                                <td>${Math.round(row.interestPerYear).toLocaleString()}</td>
                                <td>${Math.round(row.totalInterest).toLocaleString()}</td>
                                <td>${row.invCapital.toLocaleString()}</td>
                           </tr>
                })}
            </tbody>
        </table>
    );
}