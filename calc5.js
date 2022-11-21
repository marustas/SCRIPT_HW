let x = 0;
let y = 0;
let z = 0;
let a = 0;
let t = 0;
let result = 0;
let calc = document.getElementById('calculus');
calc.addEventListener('click', function onClick() {
    let test1 = band1.style.backgroundColor;
    let test2 = band2.style.backgroundColor;
    let test3 = band3.style.backgroundColor;
    let test4 = band4.style.backgroundColor;
    let test5 = band5.style.backgroundColor;
    switch (test1) {
        case 'brown':
            x = 1;
            break;
        case 'red':
            x = 2;
            break;
        case 'orange':
            x = 3;
            break;
        case 'yellow':
            x = 4;
            break;
        case 'green':
            x = 5;
            break;
        case 'blue':
            x = 6;
            break;
        case 'violet':
            x = 7;
            break;
        case 'grey':
            x = 8;
            break;
        case 'white':
            x = 9;
            break;
        default:
            x = 0;
            break;
    }

    switch (test2) {
        case 'brown':
            y = 1;
            break;
        case 'red':
            y = 2;
            break;
        case 'orange':
            y = 3;
            break;
        case 'yellow':
            y = 4;
            break;
        case 'green':
            y = 5;
            break;
        case 'blue':
            y = 6;
            break;
        case 'violet':
            y = 7;
            break;
        case 'grey':
            y = 8;
            break;
        case 'white':
            y = 9;
            break;
        default:
            y = 0;
            break;
    }

    switch (test3) {
        case 'brown':
            a = 1;
            break;
        case 'red':
            a = 2;
            break;
        case 'orange':
            a = 3;
            break;
        case 'yellow':
            a = 4;
            break;
        case 'green':
            a = 5;
            break;
        case 'blue':
            a = 6;
            break;
        case 'violet':
            a = 7;
            break;
        case 'grey':
            a = 8;
            break;
        case 'white':
            a = 9;
            break;
        default:
            a = 0;
            break;
    }

    switch (test4) {
        case 'brown':
            z = 10;
            break;
        case 'red':
            z = 100;
            break;
        case 'orange':
            z = 1000;
            break;
        case 'yellow':
            z = 10000;
            break;
        case 'green':
            z = 100000;
            break;
        case 'blue':
            z = 1000000;
            break;
        case 'violet':
            z = 10000000;
            break;
        case 'grey':
            z = 100000000;
            break;
        case 'white':
            z = 1000000000;
            break;
        case 'gold':
            z = 0.1;
            break;
        case 'silver':
            z = 0.01;
            break;
        default:
            z = 1;
            break;
    }

    switch (test5) {
        case 'brown':
            t = 1;
            break;
        case 'red':
            t = 2;
            break;
        case 'green':
            t = 0.5;
            break;
        case 'blue':
            t = 0.25;
            break;
        case 'purple':
            t = 0.1;
            break;
        case 'grey':
            t = 0.05;
            break;
        case 'gold':
            t = 5;
            break;
        case 'silver':
            t = 10;
            break;
        default:
            t = 0;
            break;
    }
    result = (x * 100 + y * 10 + a) * z;
    if (result >= 1000 && result < 1000000) {
        result /= 1000;
        document.getElementById("num").innerHTML = result;
        document.getElementById("ohm").innerHTML = "kOhm";
    } else if (result >= 1000000 && result < 1000000000) {
        result /= 1000000;
        document.getElementById("num").innerHTML = result;
        document.getElementById("ohm").innerHTML = "MOhm";
    } else if (result >= 1000000000) {
        result /= 1000000000;
        document.getElementById("num").innerHTML = result;
        document.getElementById("ohm").innerHTML = "GOhm";
    } else {
        document.getElementById("num").innerHTML = result;
        document.getElementById("ohm").innerHTML = "Ohm";
    }
    document.getElementById("tolr").innerHTML = t;
    document.getElementById("percent").innerHTML = "%";
});