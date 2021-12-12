const joursSemaine = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

let ajd = new Date();
let options = {weekday:'long'};
let jourActuel = ajd.toLocaleDateString('fr-FR', options);
 // console.log(jourActuel, ajd);

 // On prend la première lettre et on la met en majuscule et on lui rajoute le reste du mot ex pour mardi = M et on rajoute ardi
 jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);
 
 // joursSemaine.slice = on découpe en morceaux le tableau
 // Il nous faut un début et une fin, le début ce sera l'index de notre jour actuelle
 // .concat = On va concaténer le tableau que nous retourne slice avec ce que le premier tableau n'a pas
 let tabJoursEnOrdre =joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat
 (joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
 //console.log(tabJoursEnOrdre);

 export default tabJoursEnOrdre;