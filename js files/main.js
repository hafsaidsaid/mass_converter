const inputKg = document.querySelector('#converter input[name="kilogram"]');
console.log(inputKg);
const inputHg = document.querySelector('#converter input[name="hiktogram"]');
console.log(inputHg);

const inputDag = document.querySelector('#converter input[name="decagram"]');
console.log(inputDag);

const inputGr = document.querySelector('#converter input[name="gram"]');
console.log(inputGr);

//1Kg = 10^3g
inputKg.addEventListener("keyup", () => {
    let valueI = parseFloat(inputKg.value);
    KgToUnits(valueI);
})

//kg to other units
function KgToUnits(val) {
    if (val != "" && typeof val == "number") {
        //1hg=10*kg
        console.log(val);
        inputHg.value = (val * 10).toFixed(2);
        //1dg=10^2*kg
        inputDag.value = (val * Math.pow(10, 2)).toFixed(2);
        //1G=10\3*g
        inputGr.value = (val * Math.pow(10, 3)).toFixed(2);
    }
}

//inputHg onkeyup
inputHg.addEventListener("keyup", () => {
    let valueI = parseFloat(inputHg.value);
    hgToUnits(valueI);
})

function hgToUnits(val) {
    if (val != "" && typeof val == "number") {
        //kg=hg*10^-1;
        inputKg.value = (val * Math.pow(10, -1)).toFixed(2);
        //da=10^1 * hg;
        inputDag.value = (val * Math.pow(10, 1)).toFixed(2);
        //g=10^2hg
        inputGr.value = (val * Math.pow(10, 2)).toFixed(2);
    }
}

//inputDag onkeyup
inputDag.addEventListener("keyup", () => {
    let valueI = parseFloat(inputDag.value);
    dagToUnits(valueI);
})

function dagToUnits(val) {
    if (val != "" && typeof val == "number") {
        //kg=dg*10^-2;
        inputKg.value = (val * Math.pow(10, -2)).toFixed(2);
        //hg=10^-1 * dag;
        inputHg.value = (val * Math.pow(10, -1)).toFixed(2);
        //g=10^1dag;
        inputGr.value = (val * Math.pow(10, 1)).toFixed(2);
    }
}

//inputGr onkeyup
inputGr.addEventListener("keyup", () => {
    let valueI = parseFloat(inputGr.value);
    gToUnits(valueI);
})

function gToUnits(val) {
    if (val != "" && typeof val == "number") {
        //kg=10^-3*g;
        inputKg.value = (val * Math.pow(10, -3)).toFixed(2);
        //hg=10^-2*g;
        inputHg.value = (val * Math.pow(10, -2)).toFixed(2);
        //dag=10^-1*g;
        inputDag.value = (val * Math.pow(10, -1)).toFixed(2);
    }
}

