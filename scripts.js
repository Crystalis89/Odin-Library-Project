// Write a constructor for making “Book” objects. We will revisit this in the project at the 
// end of this lesson. Your book objects should have the book’s title, author, 
// the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:
// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Note: It is almost always best to return things rather than putting console.log() 
// directly into the function. In this case, return the info string and log it after the 
// function has been called:
// console.log(theHobbit.info());

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true



/*
New book button that generates a dom create a new rectangle 
(or into a grid cell of static size)
Inside it will be a form to take input  for title, author, pagecount, and radio for status
https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

give book color options, including random if I can find a way to adjust text color to work with
populate the "book" with the input data, including adding it's array location.
add a button to the book to delete it, also allow editing if I feel like extra effort
Add a button on each book’s display to change its read status


*/

let bookdiv = document.createElement('div');
let bookwords = document.createElement('p')
let createbook = document.getElementById('form');
let bookscontainer = document.getElementById('bookscontainer')
let createbutton = document.createElement('button')
let createinput = document.createElement('input')
let changebutton = document.querySelectorAll('button')


 let library = [
{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkein",
    "pagecount": "295",
    "readstatus": "Read"
},

{
    "title": "Guards! Guards!",
    "author": "Terry Pratchett",
    "pagecount": "400",
    "readstatus": "Read"
}


];

function Book(title, author, pagecount, readstatus) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.readstatus = readstatus;
}

function addBookToLibrary(newbook) {
    return library.push(newbook)
}

createbook.addEventListener("submit", (event) => {
    event.preventDefault();

        //Need to check if book with id already made


    inputtitle = document.getElementById('title').value;
    inputauthor = document.getElementById('author').value;
    inputpagecount = document.getElementById('pagecount').value;
    inputreadstatus = getVal();
    
    if (library[0] !== '') {
        for (let i = 0; i < library.length; i++) {
            const dupcheck = library[i].title;
            if (dupcheck === inputtitle) {
                return
            }
            
        }

    }

    titlearray = "Title: " + inputtitle
    authorarray = "Author: " + inputauthor
    pagecountarray = "Pagecount: " + inputpagecount
    statusarray = "Status: " + inputreadstatus
  
  
    const book = new Book (inputtitle, inputauthor, inputpagecount, inputreadstatus) 
    addBookToLibrary(book)

    

    bookdiv.setAttribute('class', 'book')
    bookdiv.setAttribute('id', inputtitle )
    bookscontainer.appendChild(bookdiv.cloneNode())

    titlearray = "Title: " + inputtitle
    authorarray = "Author: " + inputauthor
    pagecountarray = "Pagecount: " + inputpagecount
    statusarray = "Status: " + inputreadstatus


    let compiledtext = [titlearray, authorarray, pagecountarray, statusarray]
    
    
    
    
    let pid = inputtitle + 'para';


    
   addcontent(inputtitle, compiledtext, pid)
   document.getElementById("form").reset();

})

function addtext(compiledtext, pid, targetbook, inputtitle) {

    let buttondiv = document.getElementById(inputtitle + 'buttondiv')

    for (let i = 0; i < 4; i++) {
    pidnum = pid + i
    let targetpara = document.getElementById(pidnum)

    targetpara.textContent=(compiledtext[i]) 



    }
    createbutton.setAttribute('class', 'deletebutton')
    createbutton.setAttribute('id', inputtitle + 'deletebutton')
    buttondiv.appendChild(createbutton.cloneNode())
    createinput.setAttribute('class', 'statuschange')
    createinput.setAttribute('id', inputtitle + 'statuschange')
    createinput.setAttribute('type', 'checkbox')
    buttondiv.appendChild(createinput.cloneNode())
}

function addcontent(inputtitle, compiledtext, pid) {
    let targetbook = document.getElementById(inputtitle)





    for (let i = 0; i < 4; i++) {
        const pidnum = pid + i;
        bookwords.setAttribute('class', 'bookwords')
        bookwords.setAttribute('id', pidnum)
        targetbook.appendChild(bookwords.cloneNode())
    }
    
    bookdiv.setAttribute('class', 'buttondiv')
    bookdiv.setAttribute('id', inputtitle + 'buttondiv' )
    targetbook.appendChild(bookdiv.cloneNode())

    // bookwords.setAttribute('class', 'bookwords')
    // bookwords.setAttribute('id', pid)
    // targetbook.appendChild(bookwords.cloneNode())

    

    // createbutton.setAttribute('class', 'buttondiv')
    // createbutton.setAttribute('id', inputtitle + 'buttondiv')
    // targetbook.appendChild(createbutton.cloneNode())
    // createinput.setAttribute('class', 'statuschange')
    // createinput.setAttribute('id', inputtitle + 'statuschange')
    // createinput.setAttribute('type', 'checkbox')
    // targetbook.appendChild(createinput.cloneNode())

    addtext(compiledtext, pid, targetbook, inputtitle)
    //and buttons so don't need an extra function

}

function getVal(elementName) {
	var radio = document.getElementsByName('readstatus');
    var check;
    for (var i = 0, length = radio.length; i < length; i++)
    {
        if (radio[i].checked)
        {
        return check = radio[i].value;
        break;
        }
    }
}

bookscontainer.addEventListener('click', (event) => {

    for (let i = 0; i < library.length; i++) {
        let statusid = event.target.parentElement.parentElement.id + 'statuschange' ;
        let deleteid = event.target.parentElement.parentElement.id + 'deletebutton' ;
        let statusbuttonid = event.target.parentElement.parentElement.id + 'para3'
        let paraid = document.getElementById(statusbuttonid)
        // let parentid = event.target.parentElement.id
      


        let titleid = event.target.parentElement.parentElement.id
        let titleindex = library.findIndex(i => i.title === titleid);
        let removalselect = document.getElementById(titleid);


        if (statusid === event.target.id) {
            if (library[i].readstatus === 'Read') {
                library[i].readstatus = 'Not Read'
                paraid.textContent=('Status: Not Read') 
            }

            else {
                library[i].readstatus = 'Read'
                paraid.textContent=('Status: Read') 
            }
        }
        
        if (deleteid === event.target.id) {
       
            removalselect.remove()
            library.splice(titleindex, 1)

            // library.filter(skill => skill.id !== id);
        // library.filter((book) => book.title !== titleid)



        }
    }



})

