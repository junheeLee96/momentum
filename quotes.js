


const quotes = [
    {
        quote: "The way to get started is to quit talking and begin"
        , author: "Walt Disney",
    }
    ,
    {
        quote: "Life is what happen when you're busy making other place"
        , author: "John Lennon",
    },
    {
        quote: "33333333333333ly"
        , author: "33333333333ne",
    },
        {
        quote: "444444444444"
        , author: "s44444444gustine",
    },
            {
        quote: "T555555555555555"
        , author: "s55555555555ugustine",
    },
                {
        quote: "666666666"
        , author: "6666666 Augustine",
    },
                    {
        quote: "77777777"
        , author: "saint Augustine",
    },
                        {
        quote: "T888"
        , author: "8888 Augustine",
    },
    {
        quote: "9-last"
        , author: "9 Augustine",
    },
        {
        quote: "10-the last"
        , author: "10 Augustine",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuot = quotes[Math.floor(Math.random() * quotes.length)];











quote.innerText = todayQuot.quote;
author.innerText = todayQuot.author;






