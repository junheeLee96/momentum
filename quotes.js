


const quotes = [
    {
        quote: "The way to get started is to quit talking and begin"
        , author: "by Walt Disney",
    }
    ,
    {
        quote: "Life is what happen when you're busy making other place"
        , author: "by John Lennon",
    },
    {
        quote: "Some people can't believe in themselves until someone else believes in them first."
        , author: "by Sean Maguire, Good Will Hunting",
    },
        {
        quote: "It's only after we've lost everything that we're' free to do anything"
        , author: "by Fight Club, Tyler Durden",
    },
            {
        quote: "It is not our abilities that sho what we truly are.... it is our choices"
        , author: "by Dumbledore, Harry Potter and the Chanber of Secrets",
    },
                {
        quote: "Every man dies, not every man really lives"
        , author: "by Braveheart",
    },
                    {
        quote: "Ikonw what i have to do now. I've got to keep breathing because tomorrow the sun will rise"
        , author: "by Cast Away",
    },
                        {
        quote: "The hardes choices require the strong wills."
        , author: "by Thanos",
    },
    {
        quote: "The merit of an action lines in finishing it to the end "
        , author: "by Genghis Khan",
    },
        {
        quote: "Never underestimate your own ignorance."
        , author: "by Albert Einstein",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuot = quotes[Math.floor(Math.random() * quotes.length)];











quote.innerText = todayQuot.quote;
author.innerText = todayQuot.author;






