

$(document).ready(async function(){

    const BASE_URL = "http://numbersapi.com"

    let resp = await $.ajax({
        method: "GET",
        url: `${BASE_URL}/3,7,9,13?json`
    });
    
    console.log(resp)

    let multresp = []

    for(let i = 0; i < 4; i++){
        multresp.push(await $.ajax({
            method: "GET",
            url: `${BASE_URL}/27?json`
        }));
    }

    console.log(multresp)
})


$(document).ready(async function(){

    const BASE_URL = "https://deckofcardsapi.com/api/deck/"
    
    let resp = await $.ajax({
        method: "GET",
        url: `${BASE_URL}new/shuffle/?deck_count=1`
    });
    
    let deckId = resp.deck_id;
    let cards = []

    for (let i = 0; i < 2; i++){
        cards.push(await $.ajax({
            method: "GET",
            url: `${BASE_URL}${deckId}/draw/?count=1`
        }))
    }

    for (let card of cards){
        // console.log(card)
        console.log(`${card.cards[0].value} of ${card.cards[0].suit} from deck ${deckId}`)
    }
})