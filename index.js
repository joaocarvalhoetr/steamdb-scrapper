// Importing the getGames function from the getGames.js file
const { getGames } = require('./getGames');

//Express app 

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }
);

app.get('/get_games', async (req, res) => {
    let games = await getGames();  
    res.json(games); 
});
