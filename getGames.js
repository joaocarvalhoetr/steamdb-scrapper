const axios = require('axios');
const cheerio = require('cheerio');

async function getGames() {
    let games = [];
    let webpage = "https://steam250.com/2024";

    // You are going to get all the divs with id from 1 to 50. inside each div, open the first div and open the a tag. Get the href link and save it to the array. Get in that a the value of the "data-title" attribute and save it to the array.

    try {
        let response = await axios.get(webpage);
        let $ = cheerio.load(response.data);

        for (let i = 1; i <= 50; i++) {
            let game = $(`#${i} > div > a`).attr('href');
            let title = $(`#${i} > div > a`).attr('data-title');
            games.push([game.split('/')[4], title]);
        }
    } catch (error) {
        console.log(error);
    }

    // Format it to JSON

    return games;
}

module.exports = { getGames };
