var randomQuotsArray = [
    { "title" : "Mae West" ,
    "quote" : "You only live once, but if you do it right, once is enough."
    },
    { "title" : "Mahatma Gandhi" ,
    "quote" : "Be the change that you wish to see in the world."
    },
    { "title" : "Robert Frost" ,
    "quote" : "In three words I can sum up everything I've learned about life: it goes on."
    },
    { "title" : "J.K. Rowling" ,
    "quote" : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    },
    { "title" : "Albert Camus" ,
    "quote" : "Don'’'t walk in front of me… I may not follow ,Don'’'t walk behind me… I may not lead ,Walk beside me… just be my friend"
    },
    { "title" : "Mark Twain" ,
    "quote" : "If you tell the truth, you don't have to remember anything."
    },
    { "title" : "Elbert Hubbard" ,
    "quote" : "A friend is someone who knows all about you and still loves you."
    },
];

// function randomQuote() {
//     var random = Number.parseInt(Math.random()*randomQuotsArray.length);
//     console.log(random);
//     document.getElementById("quoteDesc").innerHTML = `\"${randomQuotsArray[random].quote}\"`;
//     document.getElementById("quoteTitle").innerHTML = `--${randomQuotsArray[random].title}`;
    
// }

// function randomQuote() {
//     var random = Math.floor(Math.random() * randomQuotsArray.length);
//     console.log(random);
//     document.getElementById("quoteDesc").innerHTML = `\"${randomQuotsArray[random].quote}\"`;
//     document.getElementById("quoteTitle").innerHTML = `--${randomQuotsArray[random].title}`;
// }


var lastRandom = -1;
function randomQuote() {
    var random = Number.parseInt(Math.random() * randomQuotsArray.length);
    if (random !== lastRandom ) 
    {
        lastRandom = random ;
        document.getElementById("quoteDesc").innerHTML = `\"${randomQuotsArray[random].quote}\"`;
        document.getElementById("quoteTitle").innerHTML = `--${randomQuotsArray[random].title}`;
        console.log(random);
    }
    else randomQuote();
    
}