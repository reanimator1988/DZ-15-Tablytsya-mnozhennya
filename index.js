"use strict";

const table = document.createElement('table');
const rows = 10;
const cols = 10;

for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
        const square = document.createElement('td');
        square.textContent = (i + 1) * (j + 1);
        row.appendChild(square);
    }
    table.appendChild(row);
}
document.body.appendChild(table);