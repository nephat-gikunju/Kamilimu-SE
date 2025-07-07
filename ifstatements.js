const prompt = require('prompt-sync')();
let order = prompt("Welcome to my hotel what drink do you want  coffee or Tea ").toLowerCase();
if (order ==="coffee"){
    type = prompt("Black or white coffee").toLowerCase();
    if (type ==="black"){
        console.log("black coffee coming your way ");

    }
    else if (type ==="white"){
        console.log("white coffee coming your way");

    }
    else{
        console.log("can't understand you choice");
    }
}
else if (order ==="tea"){
    type = prompt("green or herbal").toLowerCase
    if (type ==="green"){
        console.log("green tea on the way");
    }
    else if(type ==="herbal"){
        console.log("herbal coffee coming your way")
    }

}
else {
    console.log("cant understand your request")
}
