var BasicCard = require('./BasicCard.js')
var ClozeCard = require('./ClozeCard.js')

var myBasicCard = new BasicCard('marcello', 'galvan')

console.log(myBasicCard.front)
console.log(myBasicCard.back)

var myClozeCard = new ClozeCard('Sebastian sings the song "Under the Sea" in The Little Mermaid', 'Sebastian')

console.log(myClozeCard.cloze)
console.log(myClozeCard.fullText)
console.log(myClozeCard.partial)

var myClozeCard = new ClozeCard('Sebastian sings the song "Under the Sea" in The Little Mermaid', 'Sebaschin')
