var table = document.getElementById("myTable");
for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    for (var j = 1; j <= 10; j++) {
        var cell = document.createElement("td");
        var num = (i - 1) * 10 + j;
        cell.textContent = num;
        row.appendChild(cell);
    }
    table.appendChild(row);
}