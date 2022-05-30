import React from 'react'
import GruppenTag from './components/GruppenTag'
import GruppenDialog from './components/GruppenDialog'
import Modell from './model/Shopping'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.initialisieren()
        this.state = {
            aktiveGruppe: null,
            showGruppenDialog: false,
            showSortierDialog: false,
            einkaufenAufgeklappt: true,
            erledigtAufgeklappt: false
        }
    }

    initialisieren() {
        let Aufbau = Modell.gruppeHinzufuegen("Aufbauspiele")
        let Aufbau2 = Aufbau.artikelHinzufuegen("Total War Warhammer")
        Aufbau2.gekauft = true
        let Aufbau3 = Aufbau.artikelHinzufuegen("Total War Warhammer 3")
        Aufbau3.gekauft = false
        let Aufbau4 = Aufbau.artikelHinzufuegen("Total War Three Kindoms Royal Edition")
        Aufbau4.gekauft = false
        let Aufbau5 = Aufbau.artikelHinzufuegen("Total War A Troy Saga")
        Aufbau5.gekauft = false
        Aufbau.artikelHinzufuegen("Total War Warhammer 2 + DLC´s")
        let Horror = Modell.gruppeHinzufuegen("Horrorgames")
        let Horror2 = Horror.artikelHinzufuegen("Dreadout 2")
        Horror2.gekauft = false
        let Horror3 = Horror.artikelHinzufuegen("Dreadout")
        Horror3.gekauft = true
        let Horror4 = Horror.artikelHinzufuegen("Song of Horror Complete Edition")
        Horror4.gekauft = false
        let Horror5 = Horror.artikelHinzufuegen("Remothered Tormented Fathers")
        Horror5.gekauft = false
        let game2 = Horror.artikelHinzufuegen("Elden Ring")
        game2.gekauft = true
        Horror.artikelHinzufuegen("Visage")
        let Soulslike = Modell.gruppeHinzufuegen("Soulslikegames")
        let game3 = Soulslike.artikelHinzufuegen("Nioh")
        game3.gekauft = true
        Soulslike.artikelHinzufuegen("Nioh 2")
        let Soulslike2 = Soulslike.artikelHinzufuegen("Darksouls Remastered")
        Soulslike2.gekauft = true
        let Soulslike3 = Soulslike.artikelHinzufuegen("Darksouls 2")
        Soulslike3.gekauft = true
        let Soulslike4 = Soulslike.artikelHinzufuegen("Darksouls 3")
        Soulslike4.gekauft = true
        let Soulslike5 = Soulslike.artikelHinzufuegen("Immortal Unchained")
        Soulslike5.gekauft = false
        let Soulslike6 = Soulslike.artikelHinzufuegen("Salt and Santuary")
        Soulslike6.gekauft = false
    }


    einkaufenAufZuKlappen() {
        let neuerZustand = !this.state.einkaufenAufgeklappt
        this.setState({einkaufenAufgeklappt: neuerZustand})
    }

    erledigtAufZuKlappen() {
        let neuerZustand = !this.state.erledigtAufgeklappt
        this.setState({erledigtAufgeklappt: neuerZustand})
    }

    // ToDo: diese Methode als 'checkHandler' an GruppenTag und ArtikelTag durchreichen
    artikelChecken = (artikel) => {

        artikel.gekauft = !artikel.gekauft
        let aktion
        if (artikel.gekauft == true) {
            aktion = "erledigt"
        } else {
            aktion = "reaktiviert"
        }
        Modell.informieren("${artikel.name} ist ${aktion)")
        this.setState(this.state)

    }

    artikelHinzufuegen() {
        // ToDo: implementiere diese Methode
        let eingabe = document.getElementById("artikelEingabe")
        if (eingabe.value.trim().length > 0) {
            Modell.aktiveGruppe.artikelHinzufuegen(eingabe.value)
            this.setState(this.state)
        }
        eingabe.value = ""
        eingabe.focus()
    }

    setAktiveGruppe(gruppe) {
        Modell.aktiveGruppe = gruppe
        Modell.informieren("[App] Gruppe \"" + gruppe.name + "\" ist nun aktiv")
        this.setState({aktiveGruppe: Modell.aktiveGruppe})
    }

    render() {
        let nochZuKaufen = []
        if (this.state.einkaufenAufgeklappt == true) {
            for (const gruppe of Modell.gruppenListe) {
                nochZuKaufen.push(<GruppenTag
                    key={gruppe.id}
                    gruppe={gruppe}
                    gekauft={false}
                    aktiv={gruppe == this.state.aktiveGruppe}
                    aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
                    checkHandler={this.artikelChecken}/>)
            }
        }


        let schonGekauft = []
        if (this.state.erledigtAufgeklappt) {
            for (const gruppe of Modell.gruppenListe) {
                schonGekauft.push(<GruppenTag
                    key={gruppe.id}
                    gruppe={gruppe}
                    gekauft={true}
                    aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
                    checkHandler={this.artikelChecken}/>)
            }
        }

      let gruppenDialog = ""
      if (this.state.showGruppenDialog) {
        gruppenDialog = <GruppenDialog
            gruppenListe={Modell.gruppenListe}
            onDialogClose={() => this.setState({showGruppenDialog: false})}/>
      }

        return (
            <div id="container">
                {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
                <header>
                    <h1>Gamelist for Pc</h1>
                    <label
                        className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
                        <span className="mdc-text-field__ripple"></span>
                        <input className="mdc-text-field__input" type="search"
                               id="artikelEingabe" placeholder="Artikel hinzufügen"
                               onKeyPress={e => (e.key == 'Enter') ? this.artikelHinzufuegen() : ''}/>
                        <span className="mdc-line-ripple"></span>
                        <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
                           tabIndex="0" role="button"
                           onClick={() => this.artikelHinzufuegen()}>add_circle</i>
                    </label>
                </header>
                <hr/>
                <main>
                    <section>
                        <h2>Noch zu kaufen
                            <i onClick={() => this.einkaufenAufZuKlappen()} className="material-icons">
                                {this.state.einkaufenAufgeklappt ? 'expand_more' : 'expand_less'}
                            </i>
                        </h2>
                        <dl>
                            {nochZuKaufen}
                        </dl>
                    </section>
                    <hr/>
                    <section>
                        <h2>Schon gekauft
                            <i onClick={() => this.erledigtAufZuKlappen()} className="material-icons">
                                {this.state.erledigtAufgeklappt ? 'expand_more' : 'expand_less'}
                            </i>
                        </h2>
                        <dl>
                            {schonGekauft}
                        </dl>
                    </section>
                </main>
                <hr/>

        <footer>
          <button className="mdc-button mdc-button--raised"
                  onClick={() => this.setState({showGruppenDialog: true})}>
            <span className="material-icons">bookmark_add</span>
            <span className="mdc-button__ripple"></span> Gruppen
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">sort</span>
            <span className="mdc-button__ripple"></span> Sort
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">settings</span>
            <span className="mdc-button__ripple"></span> Setup
          </button>
        </footer>

        {gruppenDialog}
      </div>
    )
  }
}

export default App
