const row = document.createElement("div");

for (let i = 1; i <= 100; i++) {

    let box = document.querySelector(".box");

    //    CREATI ELEMENTI IN HTML
    const col = document.createElement("div");
    const h3 = document.createElement("h3");
    const flexbox = document.createElement("div");

    h3.textContent = i;

    //    AGGIUNTE CLASSI AGLI ELEMENTI CREATI
    row.classList.add("row");
    flexbox.classList.add("d-flex", "justify-content-center", "align-items-center");

    //    ORGANIZZATO GLI ELEMENTI
    flexbox.append(h3);
    col.append(flexbox);
    row.append(col);
    box.append(row);

    //    COLORE DI DEFAULT PER CELLE
    let bgColor = "standard-color";

    //    STYLE PER CELLE SPECIALI
    if (i % 3 === 0) {
        h3.textContent = ("Fizz");
        bgColor = "blue";
    }
    if (i % 5 === 0) {
        h3.textContent = ("Buzz");
        bgColor = "yellow";
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        h3.textContent = ("FizzBuzz");
        bgColor = "red";
    }

    col.classList.add("col-7", "ratio", "ratio-1x1", "my_border", bgColor /* "d-flex", "justify-content-center", "align-items-middle" */);



}