PROBLEMA:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

1 - Creare container
    1.1 - Creare div per contenere le immagini
    1.2 - Inserire div con all'interno l'immagine
    1.4 - Ripetere la procedura per tutte le immagini
    1.3 - Assegnare una classe diversa alla prima immagine da visualizzare
    1.5 - Inserire due button
2 - Stilizzare il container
    2.1 - Stilizzare i due button
3 - Creare un array che contiene tutte le immagini
4 - Creare un ciclo for che fa scorrere le immagini
5 - Creare un evento per ciascun bottone che permette al click di andare avanti o tornare indietro
    5.1 - Utilizzare la classe diversa spostandola tra un'immagine e l'altra per poter andare avanti o indietro
    5.2 - Creare una condizione if in modo che le immagini non vadano avanti dopo l'ultima immagine o indietro dopo la prima immagine
