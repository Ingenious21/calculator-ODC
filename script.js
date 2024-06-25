function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function appendToDisplay(value) {
    document.getElementById("display").innerText += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("display").innerText);
        document.getElementById("display").innerText = result;
    } catch (e) {
        document.getElementById("display").innerText = "Error";
    }
}
