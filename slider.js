// Array with Object
let quotes=[
    {
        id:1,
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
        
    },
    {
        id:2,
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        id:3,
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        id:4,
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        id:5,
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        id:6,
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        id:7,
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        id:8,
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        id:9,
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        id:10,
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        id:11,
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
]

function generatequote(){
     let randomnumber=Math.floor(Math.random()*10)
     console.log(randomnumber);
     console.log(quotes[randomnumber]);
     document.getElementById("quote-title").innerHTML =`"${quotes[randomnumber].quote}"`
     document.getElementById("author").innerHTML =`-${quotes[randomnumber].author}`
     document.getElementById("profession").innerHTML =`${quotes[randomnumber].profession}`
    }

let index=0;
function prevquote(){
    index=(index==0)?(quotes.length-1):((index-1)%quotes.length);
    loaddata(index);
}
function nextquote(){
    index=(index+1)%quotes.length;
    loaddata(index);
}
function loaddata(id){
    console.log(quotes[id]);
    document.getElementById("quote-title").innerHTML =`"${quotes[id].quote}"`
    document.getElementById("author").innerHTML =`-${quotes[id].author}`
    document.getElementById("profession").innerHTML =`${quotes[id].profession}`
}
loaddata(index);
