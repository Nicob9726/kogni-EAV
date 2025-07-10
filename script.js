function startModule(module) {
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (module === 'memory') {
        const sequence = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9)).join('');
        app.innerHTML = `<p>Merke dir diese Zahl:</p><h2>${sequence}</h2>`;
        setTimeout(() => {
            app.innerHTML = '<p>Gib die Zahl ein:</p><input id="userInput"><button onclick="checkMemory(\'' + sequence + '\')">OK</button>';
        }, 3000);
    }

    else if (module === 'reaction') {
        const colors = ['Rot', 'Blau', 'Grün'];
        const chosen = colors[Math.floor(Math.random() * colors.length)];
        app.innerHTML = '<p>Drücke die richtige Farbe!</p><h2>' + chosen + '</h2>';
        colors.forEach(color => {
            app.innerHTML += `<button onclick="checkReaction('${color}', '${chosen}')">${color}</button>`;
        });
    }

    else if (module === 'math') {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const result = a + b;
        app.innerHTML = `<p>Was ist ${a} + ${b}?</p><input id="mathInput"><button onclick="checkMath(${result})">OK</button>`;
    }

    else if (module === 'goNoGo') {
        const showGo = Math.random() > 0.5;
        app.innerHTML = `<p>Drücke nur, wenn GO angezeigt wird!</p><h2>${showGo ? 'GO' : 'NO'}</h2><button onclick="checkGo(${showGo})">Drücken</button>`;
    }

    else if (module === 'pattern') {
        app.innerHTML = '<p>Welche Zahl folgt: 2, 4, 6, ?</p><input id="patternInput"><button onclick="checkPattern()">OK</button>';
    }
}

function checkMemory(correct) {
    const input = document.getElementById('userInput').value;
    if (input === correct) {
        alert('Richtig!');
        startModule('memory');
    } else {
        alert('Falsch. Die richtige Zahl war: ' + correct);
    }
}

function checkReaction(clicked, correct) {
    if (clicked === correct) {
        alert('Richtig!');
        startModule('reaction');
    } else {
        alert('Falsch! Richtige Farbe war: ' + correct);
    }
}

function checkMath(result) {
    const input = parseInt(document.getElementById('mathInput').value);
    if (input === result) {
        alert('Richtig!');
        startModule('math');
    } else {
        alert('Falsch. Ergebnis war: ' + result);
    }
}

function checkGo(correct) {
    if (correct) {
        alert('Richtig gedrückt!');
        startModule('goNoGo');
    } else {
        alert('Fehler – es stand NO!');
    }
}

function checkPattern() {
    const input = parseInt(document.getElementById('patternInput').value);
    if (input === 8) {
        alert('Richtig!');
        startModule('pattern');
    } else {
        alert('Falsch. Richtig wäre: 8');
    }
}
