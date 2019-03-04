

$(document).ready(async function(){

    const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
    
    let allPkm = await $.ajax({
        method: "GET",
        url: `${BASE_URL}?offset=0&limit=964`
    });

    ourPkms = []

    for (let i = 0; i < 3; i++){
        randNum = (Math.floor(Math.random()*965))
        ourPkms.push($.ajax({
            method: "GET",
            url: `${BASE_URL}/${allPkm.results[randNum].name}`
        }));
    }

    ourPkms[0] = await ourPkms[0]
    ourPkms[1] = await ourPkms[1]
    ourPkms[2] = await ourPkms[2]

    for (let pkm of ourPkms){
        $("body").append(`
        <div>
        <h3>${pkm.name}</h3>
        <img src="${pkm.sprites.front_default}">
        </div>
        `)
    }

    console.log()
})