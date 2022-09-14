//all our quotes for now

const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.'
];

//empty array to store the words inputed
let words = [];
let wordIndex = 0;

let sartTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

//start logic

document.getElementById('start-btn').addEventListener('click', () => {
    //get a quote at random from our array

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    

    //put quote int0 an array of words
    words = quote.split(' '); //has to have a space so it splits when space is reached.

    wordIndex = 0;  // --resets word index to 0 not sure id it is necessary, bit maybe we will be reducing array not just checking indexes.

    //UI updates
    const spanWords = words.map((word)=> {return `<span> ${word}</span`}); //an array to store each word from the quote  --we have added span elements to the wuote paragraph in html
    quoteElement.innerHTML = spanWords.join(' ');   //display the quote --needs a space as well to know what seperates diff indices
    quoteElement.childNodes[0].className = 'highlight'; //we give a class to the indexed span element

    
    


    

})