//  ,.,     ,.,  ,,,,,                                                  ,.,
//  [ ]     [ ]+ ,-+.,]>   []]  ,-,,--.,    ,-++-,   ,., ,,,    .--.    [ ] ,.,
//  [ ]+-,  [   +  ,---,   .-.  ]   ,-, ]  [  ,-,,]  ] ] [ [   [ ,-.]   ] [+ +
//  [  [] ] [  ]  [ [] ],  [ ]  ] +   ] [  ] ,,[     ] ]-[ [   [ [,..   ] , [
//  [ ,,, < [.]   \.,.>,]  [,]  ].[   ]_[  ],[       +-,.+,.]   +.,.+   [ [>,[

// Start of AI-generated code

// Helper function to pause execution for a specific time
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Polling utility that waits for a condition function to return true
//const waitUntil = async (conditionFunction, checkInterval = 100) => {
//  while (!conditionFunction()) {
//    await delay(checkInterval); // Check every 100ms
//  }
//};
// End of AI-generated code

const CODE_BOX = document.getElementById("bf-code");
const INPUT_BOX = document.getElementById("bf-input");
const OUTPUT_BOX = document.getElementById("bf-output");
//class Tape {
//  constructor(...values) {
//    this.ptr = 0;
//    this.values = values;
//  }
//  
//  [Symbol.iterator]() {
//    return this.values[Symbol.iterator]();
//  }
//}
//const tape = new Tape(...[0])
//function evaluateBF(code, tape) {
//  const string = code;
//	let comma_counter = 0;
//  const sr_startpoints = []
//  for(let idx = 0; idx < string.length; idx++) {
//		let char = string[idx];
//    switch (char) {
//      case "+":
//        tape[tape.ptr] = (tape[tape.ptr] + 1) % 256;
//      case "-":
//        tape[tape.ptr] = (tape[tape.ptr] - 1) % 256;
//      case ">":
//        tape.ptr += 1;
//				if(tape.ptr >= tape.length){tape.push(0)}
//      case "<":
//        tape.ptr -= 1;
//      case "[":
//        sr_startpoints.push(idx);
//      case "]":
//        if(tape[tape.ptr]) {
//          idx = sr_startpoints;
//        }
//        else {
//          sr_startpoints.pop();
//        };
//      case ".":
//				switch (tape[tape.ptr]) {
//					case 8:
//						OUTPUT_BOX.innerHTML = OUTPUT_BOX.innerHTML.slice(0, -1);
//					case 127:
//						OUTPUT_BOX.innerHTML = "";
//					default:
//        		OUTPUT_BOX.innerHTML += String.fromCharCode(tape[tape.ptr]);
//       }
//			case ",":
//				if (comma_counter >= INPUT_BOX.value.length) {INPUT_BOX.style = "color: darkred;";
//																													waitUntil(comma_counter < INPUT_BOX.innevaluerHTML.length, 250);
//																												  INPUT_BOX.style = "color: black;";};
//				tape[tape.ptr] = INPUT_BOX.value.charCodeAt(comma_counter);
//				comma_counter++;
//      }
//  }
//}
//window.onload = () => {
	//CODE_BOX.addEventListener("input", evaluateBF(CODE_BOX.value, tape));
	OUTPUT_BOX.style.backgroundColor = "red"
//}
alert("HELP ME")