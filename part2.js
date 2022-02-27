let URL = 'https://deckofcardsapi.com/api/deck';

// 1.
async function cards1() {
    let res = await $.getJSON(`${URL}/new/draw/`)
    let {value, suit} = res.cards[0];
    console.log(`${value} of ${suit}`); 
}

cards1();

// 2
async function cards2() {
    let firstCard = await $.getJSON(`${URL}/new/draw/`);
    let deckID = firstCard.deck_id;
    let secondCard = await $.getJSON(`${URL}/${deckID}/draw/`);
    [firstCard, secondCard].forEach(card => {
        let {value, suit} = card.cards[0];
        console.log(`${value} of ${suit}`);
    });    
}

cards2();

// 3
async function cards3() {
    let $button = $("button");
    let $card = $("card");
    let deckId = await $.getJSON(`${URL}/new/shuffle/`);

    $button.on('click', async function() {
        let result = await $.getJSON(`${URL}/${deckId.deck_id}/draw/`);
            let cardImage = result.cards[0].image;
            let {value, suit} = result.cards[0];
            $card.text = value, suit
            console.log(value, suit);
                if (result.remaining == 0) $button.remove();
            $card.append(
                $('<img>', {
                    src: cardImage,
                })
            );
        });

}

cards3();
