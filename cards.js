$(document).ready(async function(){

    const BASE_URL = "https://deckofcardsapi.com/api/deck/"
    
    let resp = await $.ajax({
        method: "GET",
        url: `${BASE_URL}new/shuffle/?deck_count=1`
    });
    
    let deckId = resp.deck_id;
    console.log(deckId)
    $("#draw-card").on("click", async function(evt){
        console.log('Clicked!')
        let card = await $.ajax({
            method: "GET",
            url: `${BASE_URL}${deckId}/draw/?count=1`
        })
        console.log(card)
        $("#show-cards").append(`<li><img src="${card.cards[0].images.png}" alt="card"></li>`)
    })

})