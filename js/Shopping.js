import {gruppenListe} from "../lektion6/js/lektion6.js";
import Artikel from "../src/model/Artikel.js";

class shopping{
    gruppenListe
    aktiveGruppe
}
function gruppeFinden (gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    if (gruppenIndex == -1){
        console.warn("Gruppe" + gruppenName + " nicht gefunden")
        return null
    }else {
        return gruppenListe [gruppenIndex]
    }
}

function artikelHinzufuegen(name){

}
    let vorhandenerArtikel = this.artikelFinden(name, false)
    if (!vorhandenerArtikel) {
        let neuerArtikel = new Artikel(name, this.artikelListe.length)
        this.artikelListe.push(neuerArtikel)
        // App.informieren(`[${this.name}] Artikel "${name}" hinzugefügt`)
        return neuerArtikel
    } else {
        // App.informieren(`[${this.name}] Artikel "${name}" existiert schon!`, true)
    }


function gruppeUmbenennen (alterName, neuerName){
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null){
        let gruppenIndex = gruppenListe.indexOf(alterName)
        gruppenListe [gruppenIndex] = neuerName
    }
    console.debug("Gruppe wurde von " + alterName + " nach " + neuerName + " umbenannt")
}

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
export {}