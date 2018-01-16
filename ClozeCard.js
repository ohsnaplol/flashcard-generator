module.exports = ClozeCard;

function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze)
  }
  if (text.includes(cloze)) {
    this.cloze = cloze
    this.fullText = text
    this.partial = this.fullText.replace(this.cloze, '...')
  } else {
    throw 'Text does not contain the cloze'
  }
}
