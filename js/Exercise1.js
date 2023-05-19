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
    resetInputElement('a1');
    resetInputElement('b1');
    resetInputElement('c1');
    resetInputElement('a2');
    resetInputElement('b2');
    resetInputElement('c2');
    resetInputElement('a3');
    resetInputElement('b3');
    resetInputElement('c3');
    resetInputElement('a4');
    resetInputElement('b4');
    resetInputElement('c4');

    hideElementById('terminal2');
    hideElementById('terminal3');
    hideElementById('terminal4');
    hideElementById('terminal5');
    hideElementById('terminal6');
    hideElementById('line1');
    hideElementById('line2');
    hideElementById('line3');
}

// This function is called when the reset button is clicked.
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

window.addEventListener('load', onPageLoad);  // This is the event/method that is called when the page is loaded.

function visualValidation(inputElement) {
    inputElement.disabled = true;
    inputElement.style.backgroundColor = "green";
    inputElement.style.color = "white";
}

function visualError(inputElement) {
    inputElement.style.backgroundColor = "red";
    inputElement.style.color = "white";
}

function diadikasia(x,y,z) {
    x = x - y + z;
    y = x * y;
    return x, y, z;
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

    var a4 = document.getElementById('a4');
    var b4 = document.getElementById('b4');
    var c4 = document.getElementById('c4');
    
    //print the a1 to the p with id result
    document.getElementById('result').innerHTML = Number(a1.value);

    
    //Check if values are correct
    if (Number(a1.value) != 0) {
        showElementById('terminal2');
        visualValidation(a1);
    } else {
        visualError(a1);
        document.getElementById('result').innerHTML = "Συμπλήρωσε έναν ακέραιο αριθμό εκτός του 0";
    }

    if (Number(b1.value) != 0) {
        showElementById('terminal3');
        visualValidation(b1);
    } else {
        visualError(b1);
        document.getElementById('result').innerHTML = "Συμπλήρωσε έναν ακέραιο αριθμό εκτός του 0";
    }

    if (Number(c1.value) != 0) {
        showElementById('line1');
        showElementById('line2');
        showElementById('line3');
        visualValidation(c1);
        document.getElementById('line3-a1').innerHTML = Number(a1.value);
        document.getElementById('line3-b1').innerHTML = Number(b1.value);
        document.getElementById('line3-c1').innerHTML = Number(c1.value);
        showElementById('terminal4');
    }
    else {
        visualError(c1);
        document.getElementById('result').innerHTML = "Συμπλήρωσε έναν ακέραιο αριθμό εκτός του 0";
    }

    a2value, b2value, c2value = diadikasia(Number(a1.value), Number(b1.value), Number(c1.value));

    if (Number(a2.value) == a2value && Number(b2.value) == b2value && Number(c2.value) == c2value) {
        showElementById('terminal5');
        visualValidation(a2);
        visualValidation(b2);
        visualValidation(c2);
    }
    else {
        visualError(a2);
        visualError(b2);
        visualError(c2);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }

    b3valuea3value, c3value, a3value = diadikasia(Number(b2.value), Number(c2.value), Number(a2.value));

    if (Number(a3.value) == a3value && Number(b3.value) == b3value && Number(c3.value) == c3value) {
        showElementById('terminal6');
        visualValidation(a3);
        visualValidation(b3);
        visualValidation(c3);
    }
    else {
        visualError(a3);
        visualError(b3);
        visualError(c3);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }

    c4value, a4value, b4value = diadikasia(Number(c3.value), Number(a3.value), Number(b3.value));

    if (Number(a4.value) == a4value && Number(b4.value) == b4value && Number(c4.value) == c4value) {
        visualValidation(a4);
        visualValidation(b4);
        visualValidation(c4);
    }
    else {
        visualError(a4);
        visualError(b4);
        visualError(c4);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }
}


