const { toASCII } = require("punycode");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expenses = [];

function addExpenses(){
    rl.question("Enter the description of the expense: ", function(description){
        rl.question("Enter the amount of the expense: ", function(amount){
            rl.question("Enter the category of the expense (e.g., food, transportation): ", function(category){
                let expense = {
                    description: description,
                    amount: parseFloat(amount),
                    category:category
                };

                expenses.push(expense);
                console.log("Expenses Recorded Successfully.")
                mainMenu();

            })
        });
    })
}


function viewExpenses(){
    console.log("your Expenses: ")
    expenses.forEach((expense, index) =>{
        console.log(`Expense ${index +1}. ${expense.description}, $${expense.amount}, ${expense.category}`);
    });
    mainMenu();
}

function calculateExpenses(){
    totalExpenses = expenses.reduce(function(sum, expense){
        return sum + expense.amount;
    },0);
    console.log(`Total Expenses : $${totalExpenses.toFixed(2)}`);
    mainMenu();
}

function filterExpenses(){
    console.log(`Your Expenses:`);
    expenses.forEach(function(expense,index){
        console.log(`Expense ${index+1}: ${expenses.description} |${expenses.category} | $${expenses.amount} `);

    });
}

function mainMenu(){
    console.log("What would you like to do: ");
    console.log("1.Add an expense");
    console.log("2.Calculate expenses");
    console.log("3.View expenses");
    console.log("4.Update expenses");
    console.log("5.Filter expenses");
    console.log("6.Exit the program");
    rl.question("Choose an option: ", function(option){
        if(option.toLowerCase() == 1){
            addExpenses();
        }
        else if(option.toLowerCase() == 2){
            calculateExpenses();
        }
        else if(option.toLowerCase() == 3){
            viewExpenses();
        }
        else if(option.toLowerCase == 4){
            updateExpenses();
        }
        else if(option.toLowerCase(x) == 5){
            filterExpenses();
        }
        else if(option.toLowerCase() == 6){
            rl.close();
            console.log("Good Bye🌹😁😁🌹")
        }
        else{
            console.log("Invalid Input! Please try again");
            mainMenu();
        }
    });

}



mainMenu();