const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

let checkInterval = false;
// 1800 * 60 = 30 min;
let tempsInitial = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles: ${nbDeCycles}`;

// Math.trunc permet d'enlever les chiffres après la virgule
// % : Modulo qui est le reste d'une division
affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
  tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
}`;

affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
  tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
}`;

btnGo.addEventListener("click", () => {
  if (checkInterval === false) {
    checkInterval = true;

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
      tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
    }`;

    // settimeout une action qui se fait qu'une seule fois, setInterval une action qui se repete
    // toutes les "second argument"
    let timer = setInterval(() => {
      if (pause === false && tempsInitial > 0) {
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
        tempsInitial = 1800;
        tempsDeRepos = 300;
        nbDeCycles++;
        cycles.innerText = `Nombre de cycles: ${nbDeCycles}`;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepops % 60}` : tempsDeRepos % 60
        }`;
      } else if (pause === false && tempsInitial === 0) {
        tempsDeRepos--;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      }
    }, 1000)
    // Reset
    btnReset.addEventListener('click',()=>{
        clearInterval(timer);
        checkInterval = false;
        tempsInitial = 1800;
        tempsDeRepos = 300;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepops % 60}` : tempsDeRepos % 60
        }`;
    })
  } else {
    return;
  }
  
});

btnPause.addEventListener("click", () => {
  if (pause === false) {
    btnPause.innerText = "Reprendre";
  } else if (pause === true) {
    btnPause.innerText = "Pause";
  }
  pause = !pause;
});
