let data = [
    {
        name: "Viktor Orban",
        desc: "Prim-ministrul Magyarorszagului",
        ungur_energy: 10,
        img: "img/viktor_orban.jpg",
        id: 1
    },
    {
        name: "Zoli Gyurcsik",
        desc: "CEO Autozol; tatal lui Dennis Gyurcsik; negru",
        ungur_energy: 50,
        img: "img/gyurcsik_zoltan.jpg",
        id: 2
    },
    {
        name: "Zoli cu elicopterul",
        desc: "Supranumit \"Epsteinul Oradiei\", acest Zoli foarte puternic isi duce numeroasele lui femei cu elicopterul",
        ungur_energy: 1000,
        img: "img/zoli_cu_elicopterul.jpg",
        id: 3
    },
    {
        name: "Sara Sandor",
        desc: "1/2 ungura, curba",
        ungur_energy: 2,
        img: "img/sandor_sara.jpg",
        id: 4
    },
    {
        name: "Dennis Gyurcsik",
        desc: "100% ungur, practic ungurul default, cand te gandesti la ungur la acest om te gandesti",
        ungur_energy: 2,
        img: "img/gyurcsik_dennis.jpg",
        id: 5
    },
    {
        name: "Mark Trefi",
        desc: "Camarad CanSatist, acest ungur s-a remarcat prin singura sa contributie, un poster, si prin dragostea sa pentru pateuri",
        ungur_energy: 30,
        img: "img/mark_trefi.jpeg",
        id: 6
    },
    {
        name: "Daniel Erzse",
        desc: "Taticul nostru, Erzse este o capra cand vine vorba de lucru. Cat despre ungurime, lasa de dorit...",
        ungur_energy: 1,
        img: "img/daniel_erzse.jpg",
        id: 7
    },
    {
        name: "Jean Gaoaza",
        desc: "Sincer nici nu stiu ce cauta aici, dar se zvoneste pe strazi ca ar avea ceva awakening de ungur",
        ungur_energy: 0,
        img: "img/jean_gaoaza.jpeg",
        id: 8
    },
    {
        name: "Mariá Szeràc",
        desc: "Aceasta ungura are o poveste tragica, legenda spunand ca ar fi fost UCISA si readusa la viata ca ungur de catre notoriul Jean Gaoaza",
        ungur_energy: 80,
        img: "img/sarac_maria.png",
        id: 9
    }
];

let score = 0;
let active = [1];
let prompts_left = 0;

for(let index=1; index<=data.length; index++){
    active[index]=1;
    prompts_left++;
}

let prompt1 = assign();
let prompt2 = assign();

while (prompt1 === prompt2) {
    prompt2 = assign();
}

if(window.innerHeight > window.innerWidth){
    alert("Pentru cea mai buna experienta, foloseste modul Landscape")
}

document.getElementById("name1").textContent = prompt1.name;
document.getElementById("desc1").textContent = prompt1.desc;
document.getElementById("image1").src = prompt1.img;
document.getElementById("name2").textContent = prompt2.name;
document.getElementById("desc2").textContent = prompt2.desc;
document.getElementById("image2").src = prompt2.img;


function assign() {
    if(prompts_left==0){
        window.location.href = "win.html";
        for(let index=1; index<=data.length; index++){
            active[index]=1;
            prompts_left++;
        }
    }
    let random_id=Math.floor(Math.random() * data.length);
    if(active[random_id]==1){
        prompts_left--;
        active[random_id]=0;
        return data[random_id];
    }else{
        return assign();
    }
}

function makeGuess(guess) {
    if(window.innerHeight > window.innerWidth){
        alert("Pentru cea mai buna experienta, foloseste modul Landscape")
    }
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
        window.location.href = "index.html";
        score = 0;
        prompt1 = assign();
        prompt2 = assign();
        /*while (prompt1 === prompt2) {
            prompt2 = assign();
        }*/
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
