
/**
* HTML5 table generator algorithm
* What does it need to do, exactly?
*
* It's a program that takes some table data and
* returns HTML5 table markup:
*
* f(tableData: [Object]): Unit => table<HTML5>
*
* What are the steps to completion?
*
* 1) Create a new HTML5 table, append to DOM @see createHTMLTable()
* 2) For each object, create a new table row @see createTableArray()
* 3) for each Object Key, create a new table cell, put in table
* and append row to table DOM node @see markupRows()
*/

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

/**
* @todo this function could and should be broken down into
* two functions. One to create table rows and their respective table cells.
* And another to append those rows to the DOM.
*/

const markupRows = tableArray => {
  tableArray.map(rowData => {
    let rowHTML = document.createElement('tr');
    rowData.map((element, index, array) => {
      let cell = document.createElement('td');
      cell.innerHTML = array[index];
      rowHTML.appendChild(cell);
    });
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
