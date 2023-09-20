function convertTemp(celsius) {
    return celsius * 9 /5 + 32
}

function getReason(ruleGrade, ruleAbsence) {
    if (!ruleGrade && !ruleAbsence) {
        return "both"
    } else if (!ruleGrade) {
        return "grade average"
    } else if (!ruleAbsence) {
        return "Absence"
    }
    return ""
}

document.getElementById("convert").onclick = function () {
    let celsius = document.getElementById("temp_celsius").value
    let far = convertTemp(celsius);
    document.getElementById("temp_fahr").innerHTML = far
}

document.getElementById("anos_copa").innerHTML = "";

for (let year = 2022; year < 2051; year += 4) {
    document.getElementById("anos_copa").innerHTML += "<li>" + year + "</li>";
}



document.getElementById("calculate").onclick = function() {
    let grade1 = Number(document.getElementById("grade1").value)
    let grade2 = Number(document.getElementById("grade2").value)
    let absences = document.getElementById("absences").value

    let ruleGrade = ((grade1 + grade2) / 2) >= 6.5
    let ruleAbsence = absences < 7;
    if (ruleGrade && ruleAbsence) {
        document.getElementById("result").innerHTML = "Passed"
    } else {
        let reason = getReason(ruleGrade, ruleAbsence)
        document.getElementById("result").innerHTML = "Failed " + reason
    }
}


var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

document.getElementById("course_sales").innerHTML = ""
let sum = 0
sales.forEach(sale => {
    if (sale.refundRequested == null) {
        document.getElementById("course_sales").innerHTML += "<tr><td>" + sale.student + "</td><td>" + sale.date + "</td><td>" + sale.amount + "</td></tr>"
        sum += sale.amount
    }
});

document.getElementById("total_sold").innerHTML = sum;

let data = new Date();
document.getElementById("hours").innerHTML = data.getMinutes()
