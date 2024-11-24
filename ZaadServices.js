fetch('https://official-joke-api.appspot.com/random_joke')
  .then(function(response) {
    return response.json(); // Converts the response to JSON format
  })
  .then(function(data) {
    console.log(`${data.setup} - ${data.punchline}`); // Logs the joke to the console
  })
  .catch(function(error) {
    console.log("Error fetching the joke:", error); // Logs an error message if something goes wrong
  });
