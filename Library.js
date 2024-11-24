const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const libraryFile = 'library.json';

function loadLibraryData(){
    try{
        if (fs.existsSync('library.json')){
            const data = fs.readFileSync('library.json', 'utf8');
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }
    catch(error){
        console.error("Error reading the file:", error);
        return [];
    }
}

function saveLibraryData(library) {
    try {
      const data = JSON.stringify(library, null, 2); // Convert object to JSON string
      fs.writeFileSync('library.json', data, 'utf8'); // Write to file
    } catch (error) {
      console.error("Error writing to the file:", error);
    }
  }
  


function mainMenu() {
    console.log("\nLibrary Management System:");
    console.log("1. Add Books");
    console.log("2. View Books");
    console.log("3. Update Books");
    console.log("4. Remove Books");
    console.log("5. Search Books");
    console.log("6. Exit");
    rl.question("Choose an option: ", (option) => {
      switch (option) {
        case "1":
          addBooks();
          break;
        case "2":
          viewBooks();
          break;
        case "3":
          updateBooks();
          break;
        case "4":
          removeBooks();
          break;
        case "5":
          searchBooks();
          break;
        case "6":
          console.log("Exiting the Library System. Goodbye!");
          rl.close();
          break;
        default:
          console.log("Invalid input! Please try again.");
          mainMenu();
      }
    });
}

function addBooks(){
    rl.question("Enter the the title of the Book: ", (bookTitle)=>{
        rl.question("Enter the author's name: ", (authorName)=>{
            rl.question("Enter the category of the Book: ", (bookCategory)=>{
                let book ={
                    title: bookTitle,
                    author: authorName,
                    category: bookCategory
                };
                let library = loadLibraryData();
                library.push(book);
                saveLibraryData(library);
                console.log("Book added Successfully.");
                mainMenu();
            });
        });
    });
}

function viewBooks() {
    const library = loadLibraryData(); // Load data directly here
    if (library.length === 0) {
      console.log("No books in the library.");
    } else {
      console.log("\nLibrary contents:");
      library.forEach((book, index) => {
        console.log(`\nBook ${index + 1}:`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Category: ${book.category}`);
        mainMenu();
      });
    }
}


loadLibraryData(); // Load data at the start
mainMenu();