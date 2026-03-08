function calculate() {
    let vin = parseFloat(document.getElementById("vin").value);
    let r1 = parseFloat(document.getElementById("r1").value);
    let r2 = parseFloat(document.getElementById("r2").value);

    let vout = vin * (r2 / (r1 + r2));
    document.getElementById("result").innerText = "Output Voltage= " + vout.toFixed(2) + " V";
}