/* ESERCIZIO 1 */

/* function numInt (n2,n2) {
    if ((n1===50)|| (n2===50) || (n1+n2===50)){
        return "true"
    } else {
        return "false"
    }
}

console.log(numInt(30,40)); */

/* ESERCIZIO 2 */

/* function removeC (stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.length) {
      return stringa;
    } else {
      return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
    }
  }

console.log(removeC("alessio",10)) */

/* ESERCIZIO 3 */

/* function num (n1,n2) {
    if (((n1 >= 40&&n1 <= 60)||(n1 >= 70&&n1 <= 100))&&((n2 >= 40&&n2 <= 60)||(n2 >= 70&&n2 <= 100))) {
        return "true"
    } else {
        return "false"
    }
}

console.log(num(50,101)); */

/* ESERCIZIO 4 */

/* soluzione1 */
/* function cities (n) {
    let itemMin = n.toLowerCase();
    let item = itemMin.split('');
    if (((item[0] == "l")&&(item[1] == "o")&&(item[2] == "s"))||((item[0] == "n")&&(item[1] == "e")&&(item[2] == "w"))) {
        return n
    } else {
        return "false"
    };
}

console.log(cities("New York"));
 */

/* soluzione2 */
/* function controllaNome(nomeCitta) {
    if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
      return nomeCitta;
    } else {
      return false;
    }
  }console.log(controllaNome("New Milano")) */

/* ESERCIZIO 5 */

/* let array = [2,4,8,5,1];
let tot = 0;

function somma(){
    for (let i = 0; i < array.length; i++) {
    tot += array[i];
    }
    return tot
}

console.log(somma(tot)); */

/* ESERCIZIO 6 */

/* let numeri=[2,5,6,8,9,10];

function controllaNumeri(){
    for ( let i=0; i< numeri.length; i++){
        if(!numeri.includes(1) && !numeri.includes(3)){
            return true
        }else {
            return false
        }
    }
}
console.log(controllaNumeri()); */

/* ESERCIZIO 7 */

/* function angle(deg){
    if(deg > 0 && deg <= 90){
    return "Acuto";
  } else if 
    (deg > 90 && deg < 180){
      return "Ottuso";
    }  else if 
       (deg === 90){
        return "Retto";
    }else if
        (deg === 180){
          return"Piatto";
    } else {
        return "Valore non valido";
        }
  }
console.log(angle(100)); */

/* ESERCIZIO 8 */

/* function acronimo(name){
let array = name.split(' ');
let arrAcron = "";
let arrAcronUp = "";

for (let i = 0; i < array.length; i++) {
    arrAcron += array[i].charAt(0);
    arrAcronUp = arrAcron.toUpperCase();
}
    return arrAcronUp
}

console.log(acronimo("fabbrica italiana automibili torino")); */