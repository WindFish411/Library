const myLibrary = [];

//Book obj constructor
function Book(title, author, pages, hasRead, review) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.review = review;     
}

//Adds Book obj to array
function addBookToLibrary(title, author, pages, hasRead, review) {
   let newBook = new Book(title, author, pages, hasRead, review);
    myLibrary.push(newBook);
}   

//Add Book Form - Inside Dialog 
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let hasRead = document.getElementById("hasRead").checked ? "yes" : "no";
    let review = document.getElementById("review").value;

    addBookToLibrary(title, author, pages, hasRead, review);
    console.log(myLibrary)

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("hasRead").checked = false; // Uncheck the checkbox
    document.getElementById("review").value = "";
});


//Library Display
document.getElementById("display").addEventListener("click", function(){

    for(let i=0; i<myLibrary.length; i++){
      let book = myLibrary[i];

      let cardDiv = document.createElement("div");
      cardDiv.classList.add("card");  

      let titleSection = document.createElement("p");
      titleSection.textContent = "Title: " + book.title;
      cardDiv.appendChild(titleSection);

      let authorSection = document.createElement("p");
      authorSection.textContent = "Author: " + book.author;
      cardDiv.appendChild(authorSection);

      let pagesSection = document.createElement("p");
      pagesSection.textContent = "Pages: " + book.pages;
      cardDiv.appendChild(pagesSection);

      let hasReadSection = document.createElement("p");
      hasReadSection.textContent = "Have you read this book?: " + book.hasRead;
      cardDiv.appendChild(hasReadSection);

      let rewviewSection = document.createElement("p");
      rewviewSection.textContent = "Review: " + book.review;
      cardDiv.appendChild(rewviewSection);

      container.appendChild(cardDiv);

      //Toggle hasRead
      let toggleHasRead = document.createElement("button");
      toggleHasRead.textContent = "Change 'read' status.";

      cardDiv.appendChild(toggleHasRead);

      Book.prototype.hasRead = book.hasRead;
      toggleHasRead.addEventListener("click", function(){
          

          if(Book.prototype.hasRead === "yes"){
            Book.prototype.hasRead = "no";
            hasReadSection.textContent = "Have you read this book?: " + Book.prototype.hasRead ;
          }
          else{
            Book.prototype.hasRead = "yes";
            hasReadSection.textContent = "Have you read this book?: " + Book.prototype.hasRead ;
          }
      });

      //Remove book button
      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove book";

      cardDiv.appendChild(removeButton);  

      removeButton.addEventListener("click", function(){
          container.removeChild(cardDiv); 
      });
    }
});


//Dialog Code
const dialog = document.getElementById("dialog");
const showButton = document.getElementById("showDialog");
const closeBtn = document.getElementById("close");


showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
//End Dialogue
