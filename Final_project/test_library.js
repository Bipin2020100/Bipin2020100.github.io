// "use strict";

/* eslint-disable */


class Student{
    constructor(name){
        this.name=name,
        this.borrowed_Book=[]
    }

    borrow(book){
        this.borrowed_Book.push(book);
    }
    return_Book(returnDate=new Date()){
        let charge=0.0;
        for (let book of this.borrowed_Book){
            charge +=book.computeCharge(returnDate);
        }
        return charge;
    }

}

class Loan{
    constructor(book,dueDate){
        this.book=book,
        this.dueDate=dueDate
    }
    computeCharge(returnDate){
        if(returnDate>this.dueDate){
            let overDueDate=Math.round((returnDate - this.dueDate)/1000*60*60*24);
            let charge=overDueDate*this.book.fine_perday;
            if (charge>this.book.maxFine){
                return this.book.maxFine;
            }else{
                return charge;
            }
        }
        return 0;
    }
    
}


class Book{
    constructor(title="Info",maxFine=20,fine_perday=0.5){
        this.title=title,
        this.maxFine=maxFine,
        this.fine_perday=fine_perday
    }
}


class Library{
    constructor(Books,Members){
        this.Books=Books;
        this.Members=Members;
    }

    addBook(newBook){
        this.Books.set(newBook);
    }
    addMember(newStudent){
        this.Members.set(newStudent.name,newStudent);
    }
}

let samplebook=[
    new Book("365 Ways To Raise Your Frequency"),
    new Book("Atomic Habit"),
    new Book("The Power Of Happiness",30,1),
    new Book("Power Of Now"),
    new Book("The Subtle Art Of Not Giving A F_ck"),
    new Book("The_Alchemist")

]

const Books = new Map();
Books.set("365 Ways To Raise Your Frequency", new Loan(samplebook[0],new Date(2020,08,01)));
Books.set("Atomic Habit", new Loan(samplebook[1],new Date(2020,07,01)));
Books.set("The Power Of Happiness",new Loan(samplebook[2],new Date(2020,06,01)));
Books.set("Power Of Now",new Loan(samplebook[3],new Date(2020,05,01)));
Books.set("The Subtle Art Of Not Giving A F_ck",new Loan(samplebook[4],new Date(2020,05,01)));
Books.set("The_Alchemist",new Loan(samplebook[5],new Date(2020,05,01)));

const Members = new Map();
Members.set("Aman", new Student("Aman"));
Members.set("Sol", new Student("Sol"));
Members.set("Bipin", new Student("Bipin"));
Members.set("Hamid", new Student("Hamid"));

const myLibrary = new Library(Books, Members);

// console.log(Members.get("Aman"));



// let Members=[new Student("Aman")];
// let myLabrary= new Library(Books,Members);
// let jack=new Student("Jack");
// myLabrary.addMember(jack);
// myLabrary.addBook();
// jack.borrow(new Loan(Books[1],new Date(2020,08,01)));
// jack.borrow(new Loan(Books[1],new Date(2020,08,01)));
// jack.borrow(new Loan(Books[0], new Date(2020,07,01)));

// console.log(jack);
// console.log(jack.return_Book());


