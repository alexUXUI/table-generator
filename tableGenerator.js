
/**
* HTML5 table generator algorithm
* What does it need to do, exactly?
*
* It's a program that takes some table data and
* returns HTML5 table markup:
*
* f(tableData) => table<HTML5>
*
* What are the steps to completion?
*
* 1) Create a new HTML5 table @see createHTMLTable()
* 2) For each object, create a new table row @see createTableArray()
* 3) for each Object Key, create a new table cell, put in table row @see markupRows()
* 4) Put table rows in the HTML5 table body @see markupRows()
*/

var { inspect } = require('util');

const createHTMLTable = () => {
  let newTable = document.createElement('table');
  let tableBody = document.createElement('tbody');
  return Promise.resolve(
    document
      .body
      .appendChild(newTable)
      .appendChild(tableBody)
  );
};

const createTableArray = tableData => {
  let rows = [];
  tableData.map(element => rows.push(Object.values(element)));
  return Promise.resolve(rows);
};

const markupRows = tableArray => {
  tableArray.map(rowArray => {
    let rowHTML = document.createElement('tr');
    for(let i = 0; i < rowArray.length; i++) {
      let cell = document.createElement('td');
      cell.innerHTML = rowArray[i];
      rowHTML.appendChild(cell);
    }
    let targetTable = document.body.querySelector('tbody');
    targetTable.appendChild(rowHTML);
  });
  return Promise.resolve(tableArray);
};

const tableModule = tableData =>
  createHTMLTable(tableData)
    .then(createTableArray(tableData)
    .then(markupRows));

module.exports = tableModule;
