/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu
function gruppeFinden (gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    if (gruppenIndex == -1){
        console.warn("Gruppe" + gruppenName + " nicht gefunden")
        return null
    }else {
        return gruppenListe [gruppenIndex]
    }
}
// Aufgabe 2

function gruppeHinzufuegen (name){
let gleicheGruppe
    let gruppenIndex = gruppenListe.indexOf(name)
    if (gruppenIndex == -1){
        let neueGruppe = name
        gruppenListe.push(neueGruppe)
         aktiveGruppe = neueGruppe
            console.debug("Gruppe " + neueGruppe + " hinzugefügt")
            return neueGruppe
    }else {
        console.warn("Gruppe " + name + " existiert schon!")
    return null
    }

}
// Aufgabe 3
function gruppeUmbenennen (alterName, neuerName){
  let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null){
        let gruppenIndex = gruppenListe.indexOf(alterName)
gruppenListe [gruppenIndex] = neuerName
    }
    console.debug("Gruppe wurde von " + alterName + " nach " + neuerName + " umbenannt")
    }
// Aufgabe 4
function gruppeEntfernen (gruppenName){
    let entfernGruppe = gruppeFinden(gruppenName)
    if (gruppeFinden != null){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
        gruppenListe.splice(gruppenIndex,1)
        console.debug("Gruppe"  +  gruppenName + " wurde entfernt")
    }else {
        console.warn("Gruppe"  + gruppenName + " konnte NICHT entfernt werden")
    }
}





export {
    gruppenListe, aktiveGruppe,
    gruppeFinden,  gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}