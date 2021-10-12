const row = document.createElement("div");

for (let i = 1; i <= 10; i++) {

    let box = document.querySelector(".box");
    const col = document.createElement("div");

    col.classList.add("col-7", "ratio", "ratio-1x1", "bg-light", "my_border");
    row.classList.add("row");
    row.append(col);
    box.append(row);

}