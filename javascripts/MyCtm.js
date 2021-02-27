// My compact Turing Machine
// Prepare symbols:
[L, R, halt, q0, q1, q2, q3, q4, q5, q10, q11, B, w, m, n] = ["L", "R", "halt", "q0", "q1", "q2", "q3", "q4", "q5", "q10", "q11", "B", "w", "m", "n"];
//console.log(q0 < q5)
var tm = function (
    script,
    tape,
    q = q0, // dimension state
    p = 0 // position state
) {
    while (q in script) {
         with (script[q][tape[p] || "B"]) {
            tape[p] = w
            q = n
            switch (m) {        // move to next p-position
                case L:
                    p = p - 1;
                    break;
                case R:
                    p = p + 1;
                    break;
                default:
                    p = m; // or jump -)
            }
        }
    }

    return tape;

}
var program;
//program = require("./TMs/increment");
program = require("./TMs/sum");
// program = require("./TMs/double");// only for ones
// program = require("./TMs/decrement");
var tape = [1, 1, 1, B, 1];
// for(let i = 0; i<100;i++){
let t = tm(program, tape);
console.log("out:", ...t);
// }
