// tady je místo pro náš program

const salary = (wage, hours, days) => {
    monthlyWage = wage * hours * days
    document.body.innerHTML = monthlyWage
}

const taxed = (monthlyWage, tax) => {
    afterTax = monthlyWage - (monthlyWage * tax / 100)
    document.body.innerHTML = afterTax
}

//funguje