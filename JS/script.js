const row = document.createElement("div");

for (let i = 1; i <= 100; i++) {

    let box = document.querySelector(".box");
    const col = document.createElement("div");
    const h3 = document.createElement("h3");

    h3.textContent = i;

    col.classList.add("col-7", "ratio", "ratio-1x1", "bg-light", "my_border");
    row.classList.add("row");

    col.append(h3);
    row.append(col);
    box.append(row);

    let a = (i * 3);

    if (i % 3 === 0) {
        h3.textContent = ("Fizz");

    }
    if (i % 5 === 0) {

    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        h3.textContent = ("FizzBuzz");

    }



}