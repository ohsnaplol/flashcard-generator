module.exports = BasicCard;

function BasicCard(front, back) {
  // makes adding new keyword optional
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back)
  }
  this.front = front
  this.back = back
}
