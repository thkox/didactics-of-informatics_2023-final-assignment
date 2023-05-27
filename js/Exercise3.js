function hideElementById(id) {
    var element = document.getElementById(id);
    if (element) {
        element.style.display = 'none';
    }
}

function showElementById(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'table-row';
    }
}

function resetInputElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = "white";
        element.style.color = "black";
        element.disabled = false;
    }
}

function highlightLine(lineId) {
    var line = document.getElementById(lineId);
    if (line) {
        line.style.backgroundColor = "#b9d6f2";
    }
}

function unhighlightLine(lineId) {
    var line = document.getElementById(lineId);
    if (line) {
        line.style.backgroundColor = "white";
    }
}

function showOnlyFirstCommand() {
    var inputs = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3'];

    inputs.forEach(function (inputId) {
        resetInputElement(inputId);
        if (inputId != 'a1') {
            hideElementById('terminal' + inputId);
        }
    });
    document.getElementById('result').innerHTML = "";
    document.getElementById('result').style.color = "white";
}

function resetClick() {
    showOnlyFirstCommand();
}

function onPageLoad() {
    resetClick();

    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetClick);

    var checkButton = document.getElementById('check');
    checkButton.addEventListener('click', checkResults);

    highlightLine('linea1');

}

window.addEventListener('load', onPageLoad);

function visualValidation(inputElement) {
    inputElement.disabled = true;
    inputElement.style.backgroundColor = "green";
    inputElement.style.color = "white";
}

function visualError(inputElement) {
    inputElement.style.backgroundColor = "orange";
    inputElement.style.color = "black";
}


function checkInputValue(inputId, followUp, condition, errorText) {
    var inputElement = document.getElementById(inputId);
    var terminal = document.getElementById('terminal' + inputId);
    var result = document.getElementById('result');

    if (condition) {
        showElementById('terminal' + followUp);
        unhighlightLine('line' + inputId);
        highlightLine('line' + followUp);
        visualValidation(inputElement);
        result.innerHTML = "";
    } else if (Number(inputElement.value) != 0 && terminal.style.display == 'table-row') {
        visualError(inputElement);
        result.innerHTML = errorText;
        result.style.color = "orange";
    }
}

function checkResults() {
    var a1 = document.getElementById('a1');
    var b1 = document.getElementById('b1');
    var c1 = document.getElementById('c1');

    var a2 = document.getElementById('a2');
    var b2 = document.getElementById('b2');
    var c2 = document.getElementById('c2');

    var a3 = document.getElementById('a3');
    var b3 = document.getElementById('b3');
    var c3 = document.getElementById('c3');

    checkInputValue('a1', 'b1', Number(a1.value) != 0, "Συμπλήρωσε έναν πραγματικό αριθμό εκτός του 0");
    checkInputValue('b1', 'c1', Number(b1.value) != 0 && b1.style.display != 'none', "Συμπλήρωσε έναν πραγματικό αριθμό εκτός του 0");
    checkInputValue('c1', 'a2', Number(c1.value) != 0 && c1.style.display != 'none', "Συμπλήρωσε έναν πραγματικό αριθμό εκτός του 0");
    checkInputValue('a2', 'b2', Number(a2.value) == Number(a1.value) && document.getElementById('terminala2').style.display == 'table-row', "Προσπάθησε ξανά. <br> Βρίσκεσαι στο κυρίως πρόγραμμα");
    checkInputValue('b2', 'c2', Number(b2.value) == Number(b1.value) && document.getElementById('terminalb2').style.display == 'table-row', "Προσπάθησε ξανά. <br> Βρίσκεσαι στο κυρίως πρόγραμμα");
    checkInputValue('c2', 'a3', Number(c2.value) == Number(c1.value) && document.getElementById('terminalc2').style.display == 'table-row', "Προσπάθησε ξανά. <br> Βρίσκεσαι στο κυρίως πρόγραμμα");
    checkInputValue('a3', 'b3', Number(a3.value) == (Number(a2.value) - Number(b2.value) + Number(c2.value)) && document.getElementById('terminala3').style.display == 'table-row', "Προσπάθησε ξανά. <br> Η Τελική τιμή της μεταβλητής α επιστρέφει<br>από τη διαδικασία με την παράμετρο x");
    checkInputValue('b3', 'c3', Number(b3.value) == (Number(a3.value) * Number(b2.value)) && document.getElementById('terminalb3').style.display == 'table-row', "Προσπάθησε ξανά. <br>Η Τελική τιμή της μεταβλητής β επιστρέφει<br>από τη διαδικασία με την παράμετρο y");
    checkInputValue('c3', 'result', Number(c3.value) == (Number(c2.value) + 5) && document.getElementById('terminalc3').style.display == 'table-row', "Προσπάθησε ξανά. <br>Η Τελική τιμή της μεταβλητής γ επιστρέφει<br>από τη διαδικασία με την παράμετρο z");

    if (document.getElementById('c3').style.backgroundColor == 'green') {
        var result = document.getElementById('result');
        result.style.color = 'white';
        result.innerHTML = `
            <span style="color:#008CBA"><b>Μπράβο! <br> Ολοκλήρωσες σωστά την Δραστηριότητα</b></span><br><br>
            Ενώ η λειτουργία των Συναρτήσεων είναι πιο περιορισμένη,<br>
            η Διαδικασία είναι σαν μέρος λειτουργίας του κυρίως <br>
            προγράμματος. Στη Δραστηριότητα αυτή έγινε κλήση της <br>
            διαδικασίας με πέρασμα τιμών μέσω μιας λίστας παραμέτρων, <br>
            έγιναν υπολογισμοί και επέστρεψαν νέες τιμές στις <br>
            μεταβλητές α, β, γ. <br>

        `;
    }
}