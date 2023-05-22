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

function showOnlyFirstCommand() {
    var inputs = ['a1', 'b1', 'a2', 'b2', 'a3', 'b3', 's1', 'a4', 'b4'];

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

function sinartisi(x, y) {
    var z = 2 * (x + y);
    return [x, y, z];
}

function checkInputValue(inputId, followUp, condition, errorText) {
    var inputElement = document.getElementById(inputId);
    var terminal = document.getElementById('terminal' + inputId);
    var result = document.getElementById('result');

    if (condition) {
        showElementById('terminal' + followUp);
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

    var a2 = document.getElementById('a2');
    var b2 = document.getElementById('b2');

    var a3 = document.getElementById('a3');
    var b3 = document.getElementById('b3');

    var s1 = document.getElementById('s1');

    var a4 = document.getElementById('a4');
    var b4 = document.getElementById('b4');

    checkInputValue('a1', 'b1', Number(a1.value) != 0, "Συμπλήρωσε έναν πραγματικό αριθμό εκτός του 0");
    checkInputValue('b1', 'a2', Number(b1.value) != 0 && b1.style.display != 'none', "Συμπλήρωσε έναν πραγματικό αριθμό εκτός του 0");
    checkInputValue('a2', 'b2', Number(a2.value) == Number(a1.value) && document.getElementById('terminala2').style.display == 'table-row', "Προσπάθησε ξανά. <br> Βρίσκεσαι στο κυρίως πρόγραμμα");
    checkInputValue('b2', 'a3', Number(b2.value) == Number(b1.value) && document.getElementById('terminalb2').style.display == 'table-row', "Προσπάθησε ξανά. <br> Βρίσκεσαι στο κυρίως πρόγραμμα");
    checkInputValue('a3', 'b3', Number(a3.value) == 19 && document.getElementById('terminala3').style.display == 'table-row', "Ξαναπροσπάθησε. <br> Βρίσκεσαι στο κυρίως πρόγραμμα<b>;</b>");
    checkInputValue('b3', 's1', Number(b3.value) == 3 && document.getElementById('terminalb3').style.display == 'table-row', "Ξαναπροσπάθησε. <br> Βρίσκεσαι στο κυρίως πρόγραμμα<b>;</b>");
    checkInputValue('s1', 'a4', Number(s1.value) == (Number(a1.value) + Number(b1.value)) * 2 && document.getElementById('terminals1').style.display == 'table-row', "Έλεγξε τον υπολογισμό της συνάρτησης");
    checkInputValue('a4', 'b4', Number(a4.value) == Number(a1.value) && document.getElementById('terminala4').style.display == 'table-row', "Είσαι λίγο πριν το τέλος! <br> Επηρεάστηκε η τιμή του α στο κυρίως<br>πρόγραμμα<b>;</b>");
    checkInputValue('b4', 'result', Number(b4.value) == Number(b1.value) && document.getElementById('terminalb4').style.display == 'table-row', "Σχεδόν τελείωσες την άσκηση. Προσπάθησε ξανά! <br> Επηρεάστηκε η τιμή του β στο κυρίως<br> πρόγραμμα<b>;</b>");

    if (document.getElementById('b4').style.backgroundColor == 'green') {
        var result = document.getElementById('result');
        result.style.color = 'white';
        result.innerHTML = `
            <span style="color:#008CBA">---------------------<b>Σημείωση</b>------------------</span><br>
            Παρατηρήστε ότι οι μεταβλητές <b>α</b> και <b>β</b> του<br>
            κυρίως προγράμματος δεν επηρεάστηκαν <br>
            από το υποπρόγραμμα της <b>Συνάρτησης</b> <br>
            που έδινε κάποιες νέες τιμές στα <b>α</b> και </b>β</b> <br>
            όπου η ισχύς των τιμών αυτών,<br>
            τελείωνε με την ολοκλήρωση εκτέλεσης <br>
            της συνάρτησης. <br>
            <br> Τα </b> πλεονεκτήματα </b> της περιορισμένης<br>
            εμβέλειας είναι η απόλυτη αυτονομία όλων<br>
            των υποπρογραμμάτων και η δυνατότητα να<br>
            χρησιμοποιείται οποιοδήποτε όνομα, χωρίς<br>
            να ενδιαφέρει αν το ίδιο χρησιμοποιείται<br>
            σε άλλο υποπρόγραμμα. <br>
        `;
    }
    
}