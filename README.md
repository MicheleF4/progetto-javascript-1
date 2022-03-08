<p align="center"><img src="README_images/logo.png" width="50"></p>
<h1 align="center">Progetto JavaScript Basics - Counter</h1>

<h3 align="center">Antonio Michele Fano</h3>

<br>
<br>

Il progetto è disponibile al seguente [link](https://michelef4.github.io/counter/).

<br>

- [Introduzione al design e alle funzionalità](#introduzione-al-design-e-alle-funzionalità)
  - [Versione Desktop](#versione-desktop)
  - [Versione Mobile](#versione-mobile)
- [Architettura sito](#architettura-sito)
- [Architettura SASS](#architettura-sass)
- [Installazione node-sass](#installazione-node-sass)
- [Creazione del file style.css](#creazione-del-file-stylecss)
- [Linguaggi utilizzati](#linguaggi-utilizzati)
- [Contatti](#contatti)
- [Socials](#socials)

<br>
<br>

## Introduzione al design e alle funzionalità

<br>

Ho creato e curato personalmente gli elementi grafici con Figma.

Lo sfondo l'ho creato utilizzando l'immagine disponibile al seguente [link](https://unsplash.com/photos/4IrVnSpwk48).

- ### Design:

  - Il Design contiene elementi grafici futuristici.
    Il contatore presenta un display al centro, un pulsante con funzione di decremento a sinistra, un pulsante con funzione di incremento a destra e un pulsante addizionale di reset.

  - Il display è dinamico e interagisce con i bottoni al fine di creare un effetto "realistico". Ruota a seconda del bottone cliccato. Durante il reset l'animazione cambia.

  - In alto, prima del contatore c'è un elemento prettamente estetico e quindi non funzionale. Rappresenta una serie di pulsanti animati per simulare un'interfaccia moderna "touch".

<br>
<br>

### Versione Desktop

La versione Desktop mostra il contatore nella sua massima risoluzione e il layout è predisposto come segue nell'immagine:

![alt text](/README_images/wide_screenshot.png)

<br>
<br>

### Versione Mobile

La versione mobile è ottimizzata per l'uso sul telefono. Il layout cambia diventando più compatto e funzionale. Il display sale di posizione lasciando lo spazio in basso a tutti i vari pulsanti.

<p align="center">
<img src="README_images/mobile_screenshot.png" width="280">
</p>

<br>

---

<br>

## Architettura sito

- All'interno della cartella "assets" troveremo:
  - css
    - `style.comp.css`
    - `style.css`
    - `style.prefix.css`
  - favicon
    - diversi file favicon per i browser
  - img
    - immagini
  - js
    - il file JavaScript: `script.js`
  - sass
    - abstracts
      - animations
      - responsive-breakpoints
      - variables
    - base
      - base
      - utilities (utility classes)
    - pages
      - home
    - `main.scss` (con la funzione di `@import`)
  - `package.json`
  - `package-lock.json`

<br>
<br>

## Architettura SASS

Il file `main.scss` importa tutti gli altri file (animations, responsive-breakpoints, variables ecc).

Questo metodo permette di suddividere per categoria il codice, aumentandone la leggibilità e l'ordine.

All'interno della cartella SASS troveremo le seguenti sottocartelle:

- abstracts
- base
- pages

<br>
<br>

## Installazione node-sass

Durante la creazione del progetto ho utilizzato:

- Node.js
- NPM

All'interno della cartella assets è presente il file `package.json` quindi aprite Git Bash e dalla cartella assets eseguire:

```console
npm install node-sass --save-dev
```

<br>
<br>

## Creazione del file style.css

La creazione del file `style.css` avviene in 3 fasi utilizzando i seguenti scripts:

- `compile:sass`
- `prefix:css`
- `compress:css`

Questi scripts sono inseriti all'interno dello script `build:css`.

<br>

Lo script `build:css` utilizza `npm-run-all` ed esegue molteplici npm-scripts in modo parallelo o sequenziale.

- Maggiori info: https://www.npmjs.com/package/npm-run-all

<br>

Per utilizzare `prefix:css` bisogna installare `autoprefixer`.

- Maggiori info: https://www.npmjs.com/package/autoprefixer

<br>
<br>

## Linguaggi utilizzati

Il progetto è stato realizzato utilizzando:

- JavaScript
- CSS
- HTML

<br>

---

<br>

## Contatti

Antonio Michele Fano

:email: Email: michelefanolab@gmail.com

Link del progetto: https://michelef4.github.io/counter/

<br>
<br>

## Socials

Facebook: https://www.facebook.com/michele.fano.5

Instagram: https://www.instagram.com/michelefano

Sito: https://michelef4.github.io/
