"use strict";
/* eslint-disable */

let BookShelf = [];
function add(evt) {
    let book =myLibrary.Books.get(evt.target.parentNode.value);
    BookShelf.push(book);
    updateBookShelf(book);
}

function updateBookShelf(book) {

    console.log(book);
    let table = document.getElementById("shelf");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.book.title;
    let td2 = document.createElement("td");
    td2.innerHTML =book.dueDate;
    row.append(td1);
    row.append(td2);
    table.append(row);
}

let currentStudent;

function pullInfo() {
    let student = myLibrary.Members.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Sorry, your name is Not found in the Memebership List,Please Ragester first before proceeding. Thanks");
        return;
    }

    currentStudent = student;
    displayInfo();
}

function displayInfo() {
    document.getElementById("info").innerHTML = `Hello ${currentStudent.name}, Welcome Back to the Library`;
}

function borrowBook() {
    if(!currentStudent){
        alert("Please Enter valid membership name first.")
        return;
    }
    for (let item of BookShelf) {
         currentStudent.borrow(item);
         alert(`Thanks for Borrowing book, you borrowed ${item.book.title} books`)
    }

    // alert(`Thanks for Borrowing book, you borrowed ${currentStudent.BookShelf.title} books`)
    displayInfo();
    resetBookShelf();
}

function returnBook(){
    if(currentStudent){
        for (let item of currentStudent.borrowed_Book) {
           let charge=currentStudent.return_Book(item.dueDate);
            alert(`your overdue charge is ${charge}`);
    }
}
    resetBookShelf();
    currentStudent.borrowed_Book=[];
}
function resetBookShelf(){
    let table = document.getElementById('shelf');
    let rows = document.querySelectorAll('#shelf>tr')
    for(let i=rows.length; i>0; i--){
        table.deleteRow(i);
    }
    BookShelf=[]; 
}