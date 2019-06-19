// from data.js save as new variable
var tableData = data;
console.log(data);

// References index.html
var tbody = d3.select("tbody");
// Create tables in html
// tableData.forEach((UFOsighting) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOsighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
// });

// Event listener
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    // Check if input matches a value in data.js
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    // Create tables in html
    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}); // End submit function

    // var list = d3.select(".summary");

