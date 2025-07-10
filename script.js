
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
    alert(input === correct ? 'Richtig!' : 'Falsch. Die richtige Zahl war: ' + correct);
}

function checkReaction(clicked, correct) {
    alert(clicked === correct ? 'Richtig!' : 'Falsch! Richtige Farbe war: ' + correct);
}

function checkMath(result) {
    const input = parseInt(document.getElementById('mathInput').value);
    alert(input === result ? 'Richtig!' : 'Falsch. Ergebnis war: ' + result);
}

function checkGo(correct) {
    alert(correct ? 'Richtig gedrückt!' : 'Fehler – es stand NO!');
}

function checkPattern() {
    const input = parseInt(document.getElementById('patternInput').value);
    alert(input === 8 ? 'Richtig!' : 'Falsch. Richtig wäre: 8');
}
