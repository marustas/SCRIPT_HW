let x = 0;
let y = 0;
let z = 0;
let t = 0;
let result = 0;
let calc = document.getElementById('calculus');
calc.addEventListener('click', function onClick() {
    let test1 = band1.style.backgroundColor;
    let test2 = band2.style.backgroundColor;
    let test3 = band3.style.backgroundColor;
    let test4 = band4.style.backgroundColor;
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
            y = 1000;
            break;
        case 'yellow':
            y = 10000;
            break;
        case 'green':
            y = 100000;
            break;
        case 'blue':
            y = 1000000;
            break;
        case 'violet':
            y = 10000000;
            break;
        case 'grey':
            y = 100000000;
            break;
        case 'white':
            y = 1000000000;
            break;
        default:
            y = 0;
            break;
    }

    switch (test3) {
        case 'brown':
            z = 10;
            break;
        case 'red':
            z = 100;
            break;
        case 'orange':
            z = 10 ^ 3;
            break;
        case 'yellow':
            z = 10 ^ 4;
            break;
        case 'green':
            z = 10 ^ 5;
            break;
        case 'blue':
            z = 10 ^ 6;
            break;
        case 'violet':
            z = 10 ^ 7;
            break;
        case 'grey':
            z = 10 ^ 8;
            break;
        case 'white':
            z = 10 ^ 9;
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

    switch (test4) {
        case 'red':
            t = 2;
            break;
        case 'green':
            t = 0.5;
            break;
        case 'blue':
            t = 0.25;
            break;
        case 'violet':
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
            t = 1;
            break;
    }
    result = (x * 10 + y) * z;
    console.log((x * 10 + y) * z);
    document.getElementById("num").innerHTML = result;
    document.getElementById("tolr").innerHTML = t;
});