// Part 1
// 1.
let favoriteNumber = 8;
let URL = "http://numbersapi.com";

async function numbers1() {
    let res = await $.getJSON(`${URL}/${favoriteNumber}?json`);
    console.log(res);
}

numbers1();

// 2
async function numbers2() {
    let favoriteNumbers = [2, 4, 5, 11];
    let res = await $.getJSON(`${URL}/${favoriteNumbers}?json`)
    console.log(res);
}

numbers2();

// 3
async function numbers3() {
    let facts = await Promise.all(Array.from({length:4}, () => {return $.getJSON(`${URL}/${favoriteNumber}?json`);}));
    facts.forEach(fact => {
        $("body").append(`<h1>${fact.text}</h1>`)});
}

numbers3();
