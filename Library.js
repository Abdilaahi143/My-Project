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
  


function mainMenu(){
    console.log("");
    console.log("1.Add Books");
    console.log("2.View Books");
    console.log("3.Update Books");
    console.log("4.Remove Books");
    console.log("5.Search Books");
    rl.question("Choose an option: ", (option)=>{
        if(option.toLowerCase() == 1){
            addBooks();
        }
        else if(option.toLowerCase() == 2){
            viewBooks();
        }
        else if(option.toLowerCase == 3){
            updateBooks();
        }
        else if(option.toLowerCase() == 4){
            removeBooks();
        }
        else if(option.toLowerCase() == 5){
            searchBooks();
        }
        else{
            console.log("invalid Input! Please try again:");
            console.logs();
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

function viewBooks(library){
    console.log("Library contents:", library);

}


loadLibraryData(); // Load data at the start
mainMenu();