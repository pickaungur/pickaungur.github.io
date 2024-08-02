let data = [
    {
        name: "Viktor Orban",
        desc: "Prim-ministrul Magyarorszagului",
        ungur_energy: 10,
        img: "img/viktor_orban.jpg"
    },
    {
        name: "Zoli Gyurcsik",
        desc: "CEO Autozol; tatal lui Dennis Gyurcsik; negru",
        ungur_energy: 50,
        img: "img/gyurcsik_zoltan.jpg"
    },
    {
        name: "Zoli cu elicopterul",
        desc: "Supranumit \"Epsteinul Oradiei\", acest Zoli foarte puternic isi duce numeroasele lui femei cu elicopterul",
        ungur_energy: 1000,
        img: "img/zoli_cu_elicopterul.jpg"
    },
    {
        name: "Sara Sandor",
        desc: "1/2 ungura, curva",
        ungur_energy: 2,
        img: "img/sandor_sara.jpg"
    },
    {
        name: "Dennis Gyurcsik",
        desc: "100% ungur, practic ungurul default, cand te gandesti la ungur la acest om te gandesti",
        ungur_energy: 2,
        img: "img/gyurcsik_dennis.jpg"
    }
];

let score = 0;
let prompt1 = assign();
let prompt2 = assign();

while (prompt1 === prompt2) {
    prompt2 = assign();
}

alert("Pentru cea mai buna experienta, foloseste modul Landscape")

document.getElementById("name1").textContent = prompt1.name;
document.getElementById("desc1").textContent = prompt1.desc;
document.getElementById("image1").src = prompt1.img;
document.getElementById("name2").textContent = prompt2.name;
document.getElementById("desc2").textContent = prompt2.desc;
document.getElementById("image2").src = prompt2.img;

function assign() {
    return data[Math.floor(Math.random() * data.length)];
}

function makeGuess(guess) {
    let correct = compare(prompt1, prompt2, guess);
    if (correct) {
        score++;
        prompt1 = prompt2;
        prompt2 = assign();
        while (prompt1 === prompt2) {
            prompt2 = assign();
        }
        document.getElementById("name1").textContent = prompt1.name;
        document.getElementById("desc1").textContent = prompt1.desc;
        document.getElementById("image1").src = prompt1.img;
        document.getElementById("name2").textContent = prompt2.name;
        document.getElementById("desc2").textContent = prompt2.desc;
        document.getElementById("image2").src = prompt2.img;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        alert("Esti prost. Scorul tau a fost: " + score);
        score = 0;
        prompt1 = assign();
        prompt2 = assign();
        while (prompt1 === prompt2) {
            prompt2 = assign();
        }
        document.getElementById("name1").textContent = prompt1.name;
        document.getElementById("desc1").textContent = prompt1.desc;
        document.getElementById("image1").src = prompt1.img;
        document.getElementById("name2").textContent = prompt2.name;
        document.getElementById("desc2").textContent = prompt2.desc;
        document.getElementById("image2").src = prompt2.img;
        document.getElementById("score").textContent = "Score: " + score;
    }
}

function compare(p1, p2, user_input) {
    let ungur_energy1 = p1.ungur_energy;
    let ungur_energy2 = p2.ungur_energy;
    let answer = '';

    if (ungur_energy1 === ungur_energy2) {
        answer = user_input;
    } else if (ungur_energy1 < ungur_energy2) {
        answer = '<';
    } else if (ungur_energy1 > ungur_energy2) {
        answer = '>';
    }

    return user_input === answer;
}
