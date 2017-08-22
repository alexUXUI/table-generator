
/**
* HTML5 table generator algorithm
* What does it need to do, exactly?
*
* It's a function that takes some table data and
* returns HTML5 table markup:
*
* f(tableData) => HTML5 table
*
* What are the steps to completion?
*
* 1) Create a new HTML5 table
* 2) For each object, create a new table row
* 3) for each Object Key, create a new table cell, put in table row
* 4) Put table rows in the HTML5 tableModule
* 5) Append table to DOM
*/

var { tableData } = require('./tableData');
var { inspect } = require('util');

function tableModule() {

  let newTable = document.createElement('table');
  let tableHeader = document.createElement('thead');
  let rows = [];

  const createHTMLTable = () =>
    Promise.resolve(
      document
        .body
        .appendChild(newTable)
        .appendChild(tableHeader)
    );

  const createTableArray = tableData => {
    tableData.map(element => rows.push(Object.values(element)));
    return Promise.resolve(rows);
  }

  const markupRows = tableArray => {
    tableArray.map(rowArray =>{
      let rowHTML = document.createElement('tr');
      for(var i = 0; i < rowArray.length; i++) {
        let cell = document.createElement('td');
        cell.innerHTML = rowArray[i];
        rowHTML.appendChild(cell);
      }
      document.body.appendChild(rowHTML);
    });
    return Promise.resolve(tableArray);
  }

  createHTMLTable()
    .then(createTableArray(tableData)
    .then(markupRows))
}

module.exports = tableModule;
