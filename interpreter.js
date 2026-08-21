//  ,.,     ,.,  ,,,,,                                                  ,.,
//  [ ]     [ ]+ ,-+.,]>   []]  ,-,,--.,    ,-++-,   ,., ,,,    .--.    [ ] ,.,
//  [ ]+-,  [   +  ,---,   .-.  ]   ,-, ]  [  ,-,,]  ] ] [ [   [ ,-.]   ] [+ +
//  [  [] ] [  ]  [ [] ],  [ ]  ] +   ] [  ] ,,[     ] ]-[ [   [ [,..   ] , [
//  [ ,,, < [.]   \.,.>,]  [,]  ].[   ]_[  ],[        +..+,.]   +.,.+   [+ >,[

const INPUT_BOX = getElementById("bf-input")
const OUTPUT_BOX = getElementById("bf-output")
class Tape = {
  constructor(ptr, ...values) {
    this.ptr = ptr;
    this.values = values;
  }
  
  [Symbol.iterator]() {
    return this.values[Symbol.iterator]();
  }
}
const tape = [0]
function evaluateBF(code, tape) {
  const string = code;
  let idx = 0;
  const sr_startpoints = []
  for(char of string) {
    switch (char) {
      case "+":
        tape[tape.ptr] = (tape[tape.ptr] + 1) % 256;
      case "-":
        tape[tape.ptr] = (tape[tape.ptr] - 1) % 256;
      case ">":
        tape.ptr += 1;
      case "<":
        tape.ptr -= 1;
      case "[":
        sr_startpoints.push(idx);
      case "]":
        if(tape[tape.ptr]) {
          idx = sr_startpoints;
        };
        else {
          sr_startpoints.pop();
        };
      case ".":
				switch (tape[tape.ptr]) {
					case 8:
						OUTPUT_BOX.innerHTML = OUTPUT_BOX.innerHTML.slice(0, -1);
					case 127:
						OUTPUT_BOX.innerHTML = "";
					default:
        		OUTPUT_BOX.innerHTML += String.fromCharCode(tape[tape.ptr]);
			case ",":
				// TODO: add input
  }
}
