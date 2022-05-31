let order = prompt('What order?', 5);
order = Number(order)
let deckSize = order * order + order + 1 // 5*5 + 5 + 1 = 31
let objPerCard = order + 1
alert(`There will be ${objPerCard} things on each card, and a total of ${deckSize} cards in the deck.`)
