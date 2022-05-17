import Gruppe from './Gruppe.js'

class Shopping {
    gruppenListe = []
    aktiveGruppe = null
    meldungenAusgeben = true

    gruppeFinden(suchName, meldungAusgeben) {
        for (let gruppe of this.gruppenListe) {
            if (gruppe.name == suchName) {
                return gruppe
            }
        }
        if (meldungAusgeben) {
            this.informieren("[App] Gruppe \"" + name + "\" nicht gefunden", true)
        }
        return null
    }

    gruppeHinzufuegen(name) {
        let vorhandeneGruppe = this.gruppeFinden(name)
        if (vorhandeneGruppe == null) {
            let neueGruppe = new Gruppe(name, this.gruppenListe.length)
            this.gruppenListe.push(neueGruppe)
            this.aktiveGruppe = neueGruppe
            this.informieren("[App] Gruppe \"" + name + "\" hinzugefügt")
            return neueGruppe
        } else {
            this.informieren("[App] Gruppe \"" + name + "\" existiert schon!", true)
        }
    }

    gruppeEntfernen(name) {
        let loeschGruppe = this.gruppeFinden(name)
        if (loeschGruppe) {
            let index = this.gruppenListe.indexOf(loeschGruppe)
            this.gruppenListe.splice(index, 1)
            this.informieren("[App] Gruppe \"" + name + "\" entfernt"
            )
        } else {
            this.informieren("[App] Gruppe \"" + name + "\" konnte NICHT entfernt werden!", true)
        }

    }

    gruppeUmbenennen(alterName, neuerName) {
        let suchGruppe = this.gruppeFinden(alterName, true)
        if (suchGruppe) {
            suchGruppe.name = neuerName
            this.informieren("[App] Gruppe \"" + alterName + "\" umbenannt in \"" + neuerName + "\"")
        }
    }

    allesAuflisten() {
        console.debug("Einkaufsliste")
        console.debug("--------------------")
        for (const gruppe of this.gruppenListe) {
            console.debug("[" + gruppe.name + "]")
            gruppe.artikelAuflisten(true)
        }
    }

    informieren(nachricht, istWarnung = false) {
        if (this.meldungenAusgeben) {
            if (istWarnung) {
                console.log(nachricht)
            } else {
                console.debug(nachricht)
                // Todo: Speichern
            }
        }
    }
}

const App = new Shopping()

export default App
