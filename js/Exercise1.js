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
    resetInputElement('a2');
    resetInputElement('b2');
    resetInputElement('s1');
    resetInputElement('a3');
    resetInputElement('b3');

    hideElementById('terminal2');
    hideElementById('terminal3');
    hideElementById('terminal4');
    hideElementById('terminal5');
    hideElementById('terminal6');
    hideElementById('terminal7');
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

function sinartisi(x, y) {
    var a, b, x, y, z;
    x = x + y;
    z = 2 * x;
    a = 19;
    b = 3;
    return x, y, z;
}


function checkResults() {
    var a1 = document.getElementById('a1');
    var b1 = document.getElementById('b1');

    var a2 = document.getElementById('a2');
    var b2 = document.getElementById('b2');
    var s1 = document.getElementById('s1');

    var a3 = document.getElementById('a3');
    var b3 = document.getElementById('b3');

    //print the a1 to the p with id result
    document.getElementById('result').innerHTML = Number(a1.value);

    //check if the a1 is not 0 and if it is not 0 then show the terminal2
    if (Number(a1.value) != 0) {
        showElementById('terminal2');
        visualValidation(a1);
    } else {
        visualError(a1);
        document.getElementById('result').innerHTML = "Συμπλήρωσε έναν ακέραιο αριθμό εκτός του 0";
    }

    //check if the b1 is not 0 and if it is not 0 then show the terminal3
    if (Number(b1.value) != 0 && b1.style.display != 'none') {
        showElementById('terminal3');
        visualValidation(b1);
    } else if (Number(b1.value) != 0 && document.getElementById('terminal2').style.display == 'table-row') {
        visualError(b1);
        document.getElementById('result').innerHTML = "Συμπλήρωσε έναν ακέραιο αριθμό εκτός του 0";
    }

    //check if the a2 is equal to a1 and if it is equal then show the terminal4
    if (Number(a2.value) == Number(a1.value) && document.getElementById('terminal3').style.display == 'table-row') {
        showElementById('terminal4');
        visualValidation(a2);
    }
    else if ( Number(a2.value) !=0 && document.getElementById('terminal3').style.display == 'table-row') {
        visualError(a2);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }


    //check if the b2 is equal to b1 and if it is equal then show the terminal5
    if (Number(b2.value) == Number(b1.value) && document.getElementById('terminal4') && Number(b1.value) != 0 ) {
        showElementById('terminal5');
        visualValidation(b2);
    }
    else if (Number(b2.value) != 0 && document.getElementById('terminal4').style.display == 'table-row') {
        visualError(b2);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }

    //check if the s1 is equal to (a1+b1)*2 and if it is equal then show the terminal6
    if (Number(s1.value) == (Number(a1.value) + Number(b1.value)) * 2 && document.getElementById('terminal5').style.display == 'table-row') {
        showElementById('terminal6');
        visualValidation(s1);
    }
    else if (Number(s1.value) != 0 && document.getElementById('terminal5').style.display == 'table-row') {
        visualError(s1);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }

    //check if the a3 is equal to a1 and if it is equal then show the terminal7
    if (Number(a3.value) == Number(a1.value) && document.getElementById('terminal6').style.display == 'table-row') {
        showElementById('terminal7');
        visualValidation(a3);
    }
    else if (Number(a3.value) != 0 && document.getElementById('terminal6').style.display == 'table-row') {
        visualError(a3);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }


    //check if the b3 is equal to b1 and if it is equal then show the terminal8
    if (Number(b3.value) == Number(b1.value) && document.getElementById('terminal7').style.display == 'table-row') {
        visualValidation(b3);
    }
    else if (Number(b3.value) != 0 && document.getElementById('terminal7').style.display == 'table-row') {
        visualError(b3);
        document.getElementById('result').innerHTML = "Λάθος απάντηση";
    }
}


