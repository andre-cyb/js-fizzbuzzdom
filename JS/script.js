const row = document.createElement("div");

for (let i = 1; i <= 100; i++) {

    let box = document.querySelector(".box");
    const col = document.createElement("div");
    const h3 = document.createElement("h3");

    h3.textContent = i;
    col.classList.add("col-7", "ratio", "ratio-1x1", "my_border", "blue", /* "d-flex", "justify-content-center", "align-items-middle" */);
    row.classList.add("row");

    col.append(h3);
    row.append(col);
    box.append(row);

    let prova = document.querySelector(".row div");
    let a = (i * 3);





    if (i % 3 === 0) {
        h3.textContent = ("Fizz");
        /*prova.style.backgroundColor = ("#0bd6a1");*/
    }
    if (i % 5 === 0) {
        h3.textContent = ("Buzz");


    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        h3.textContent = ("FizzBuzz");
        /*prova.style.backgroundColor = ("#f0466f");*/

    }




}