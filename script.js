function startMofunction checkMemory(correct) {
    const input = document.getElementById('userInput').value;
    alert(input === correct ? 'Richtig!' : 'Falsch. Die richtige Zahl war: ' + correct);
    setTimeout(() => startModule('memory'), 100);
}

function checkReaction(clicked, correct) {
    alert(clicked === correct ? 'Richtig!' : 'Falsch! Richtige Farbe war: ' + correct);
    setTimeout(() => startModule('reaction'), 100);
}

function checkMath(result) {
    const input = parseInt(document.getElementById('mathInput').value);
    alert(input === result ? 'Richtig!' : 'Falsch. Ergebnis war: ' + result);
    setTimeout(() => startModule('math'), 100);
}

function checkGo(correct) {
    alert(correct ? 'Richtig gedrückt!' : 'Fehler – es stand NO!');
    setTimeout(() => startModule('goNoGo'), 100);
}

function checkPattern() {
    const input = parseInt(document.getElementById('patternInput').value);
    alert(input === 8 ? 'Richtig!' : 'Falsch. Richtig wäre: 8');
    setTimeout(() => startModule('pattern'), 100);
}
