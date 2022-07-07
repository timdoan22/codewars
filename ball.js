Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

function Ball(type) {
	this.ballType = type
  if (this.ballType === undefined) {
    this.ballType = 'regular'
  }
}


ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType)     //=> "regular"
console.log(ball2.ballType)     //=> "super"