/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
let pizza = {
  pizza: "Meine lieblingspizza",
  art: "Doppel Salami",
  belag: ["Salami, Käse"],
  skala: 10,
  gerneIsst: true
}
  console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ghibli = {
    name: "Studio Ghibli",
    gruendung: 1985,
    medium: "Anime"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug(Object.keys(ghibli))
  console.debug(Object.values(ghibli))
  console.debug(Object.entries(ghibli))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  let kuenstler = {
    Name: "Avril Lavigne",
    Alter: "37 Jahre",
    Wohnort: "Los Angeles",
    Beruf: "Sängerin",
    Genre: "Rock und Pop",
    Erstes_Album: "4.Juni 2002",
    Name_des_Albums: "Let Go",
    Beziehungsstatus: "Verheiratet",
    Live_Albums: "1",
    Musik_Videos: "39",
    Singles: "32",
    Studio_Ablums: "7",
    Songs_insgesamt: "91",
    Danke: "Aufgabe hat Spaß gemacht"
  }
  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()