# <img src="README_images/logo.png" width="30"> Progetto JavaScript - Counter

## Antonio Michele Fano

Breve introduzione al design e alle funzionalità.

- ### Design:

  - Il Design contiene elementi grafici futuristici.
    Il contatore presenta un Display al centro, un pulsante con funzione di decremento a sinistra, un pulsante con funzione di incremento a destra e un pulsante addizionale di reset.

  - Il Display è dinamico e interagisce con i bottoni al fine di creare un effetto "realistico". Ruota a seconda del bottone cliccato. Durante il reset l'animazione cambia.
  - In alto, prima del contatore c'è un elemento prettamente estetico e quindi non funzionale. Rappresenta una serie di pulsanti animati per simulare un'interfaccia moderna "touch".

## Versione Desktop

La versione Desktop mostra il contatore nella sua massima risoluzione e il layout è predisposto come segue nell'immagine:

![alt text](/README_images/wide_screenshot.png)

## Versione Mobile

La versione mobile è ottimizzata per l'uso sul telefono. Il layout cambia diventando più compatto e funzionale. Il display sale di posizione lasciando lo spazio in basso a tutti i vari pulsanti.

<img src="README_images/mobile_screenshot.png" width="280">

## Architettura sito

- All'interno di assets troveremo:
  - css
    - 3 file .css
  - favicon
    - diversi file favicon per i browser
  - img
    - immagini
  - js
    - il file JavaScript: script.js
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

## Configurazione SASS (node_modules)

All'interno della cartella assets è presente il file `package.json` quindi aprite Git Bash e dalla cartella assets eseguire:

```console
npm install node-sass --save-dev
```
