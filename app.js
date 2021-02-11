//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}

//UI Constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');

    //Create rows element
    const row = document.createElement('tr');

    //Insert colums
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href ="#" class="delete">X</a></td> `;

    list.appendChild(row);
}


//Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create DIV
    const div = document.createElement('div');

    //Add class
    div.className = `alert  ${className}`;

    //Add text
    div.appendChild(document.createTextNode(message));

    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    //Insert form before DIV
    container.insertBefore(div, form);

    //Remove alert after 2.5 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 2500);
}


//Clear fields 
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


//Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function(e) {

        //Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        const book = new Book(title, author, isbn);

        //Instantiate UI 
        const ui = new UI();

        //Validation
        if (title === '' || author === '' || isbn === '') {
            //Error Alet
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            //Add book to list
            ui.addBookToList(book);

            //Clear input fields
            ui.clearFields();

        }
        e.preventDefault();

    });