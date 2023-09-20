

document.getElementById("shipments").onchange = function () {
    let date = new Date();

    document.getElementById("order_date").innerHTML = formatDate(date)
    let shipment = getShipmentFromValue(getSelectedValue("shipments"));
    console.log(date + Number(shipment.leadTime))
    document.getElementById("delivery_date").innerHTML = formatDate(addDays(date, shipment.leadTime));
    document.getElementById("delivery_fee").innerHTML = shipment.fee;
}


function getSelectedValue(id) {
    var selectField = document.getElementById(id);
    var selectedOption = selectField.options.selectedIndex;
    return selectField.options[selectedOption].innerHTML;
}

var shipments =
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

function getShipmentFromValue(value) {
    let a = value.split(' ');
    switch (a[0]) {
        case "Standard":
            return shipments.standard;
        case "Express":
            return shipments.express;
        default:
            alert("alert")
            break;
    }
}

function formatDate(date1) {
    let dd = new Date(date1);
    return pad(dd.getFullYear()) + "-" + pad(dd.getMonth()) + "-" + pad(dd.getDate())
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}

function addDays(date, days) {
    theDayOfTheMonthOnNextWeek = date.getDate() + days;
    return date.setDate(theDayOfTheMonthOnNextWeek)
}

var phones =
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
    }
};

document.getElementsByName("product").forEach(product => {
    console.log(product)
    product.onchange = setPhoneInfo
})

function setPhoneInfo() {
    let checkedPhone = phones[getSelectedByName("product")]
    document.getElementById("phone_image").src = checkedPhone.imageUrl;
    document.getElementById("phone_name").innerHTML = checkedPhone.name;
    document.getElementById("phone_price").innerHTML = checkedPhone.price + " " + checkedPhone.currency;
}




function getSelectedByName(name) {
    var phones = document.getElementsByName(name);
    for (var a = 0;  a < phones.length; a++) {
        if (phones[a].checked) {
            return phones[a].value;
        }
    }
}




//4


document.getElementById("start_stop").onclick = startStopTimer;
document.getElementById("reset").onclick = resetTimer;
stopper = null;
start = null
function startStopTimer() {
    if(stopper == null) {
        start = start == null ? new Date().getTime() : start;
        stopper = setInterval(addTime, 1)
    } else {
        clearInterval(stopper);
        stopper = null;
    }
}

function addTime() {
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = now - start;

    // Time calculations for days, hours, minutes and seconds
    var hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));
    var milSeconds = padMilSeconds(Math.floor(distance % 1000));

    document.getElementById("stopwatch").innerHTML =  hours
    document.getElementById("stopwatch").innerHTML += ":" + minutes
    document.getElementById("stopwatch").innerHTML += ":" + seconds
    document.getElementById("stopwatch").innerHTML += " " + milSeconds

}

function resetTimer() {
    if(stopper == null) {
        start = null
        document.getElementById("stopwatch").innerHTML =  "00:00:00 000"
    } else {
        start = new Date().getTime()
    }

    
}

function padMilSeconds(milSeconds) {
    if(milSeconds < 10) {
        return "00" + milSeconds
    } else if (milSeconds < 100) {
        return "0" + milSeconds
    } else {
        return milSeconds
    }
    
}