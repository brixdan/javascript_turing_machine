// tm is a map from program and tape arrays to just tape
// const tm = function tm(program, tape) {
//     // ...
//     return tape;
// }
// convention over configuration structure of the system:program tree, includes
// position at internal states array just a number [q0,q1,q2,q3]
let q = 0; // q = -1 means halt machine
let p = 4; //head space position - any number as index on tape array:
// p === undefined --> halt machine, initial/default position = 0
// Escape quotes --> use self referencing variables
({R, L, B, q0, q1, q2, q3, q4, q5, q10,q11, halt} = {
    R: "R",
    L: "L",
    B: "B",
    q0: "q0",
    q1: "q1",
    q2: "q2",
    q3: "q3",
    q4: "q4",
    q5: "q5",
    q10:"q10",
    q11:"q11",
    halt: "halt"
});
// action is 2-dim array of write indexes[0.1] and move number
let a = [w, m, n] = [0, 1, 2] // action: write w at current, move to p += m position on tape
// and to q = n index on internal states array




let state// external state: 0 -> position in q-array, 1 - in tape-array
const getInput = (tape, p) => (tape[p] in [0, 1] ? tape[p] : "B")

function actionLookup(program, tape, state) {
    let _t = getInput(tape, state[1]);
    let _tt = program[state[0]];
    return _tt === undefined ? undefined : _tt[_t];
}

function step(program, tape, state) {
    if (!state || state[0] === undefined) return "halt-by-state";
    let a = actionLookup(program, tape, state);
    if (!a) return "halt-by-action"; else
        console.log("a = ", a)
    tape[state[1]] = a.w; // write w to current p-position
    state[0] = a.n;  // jump t0 next q-position

    switch (a.m) {        // move to next p-position
        case 'L':
            state[1] = state[1] - 1;
            break;
        case 'R':
            state[1] = state[1] + 1;
            break;
        default:
            state[1] = a.m; // or jump -)
    }
    return "OK"
}

function tm(program, tape, state) {
    while (true) {
        print()
        let _t = step(program, tape, state);
        if (_t === "halt-by-action") {
            console.log(_t);
            break;
        }
        if (_t === "halt-by-state") {
            console.log(_t);
            break;
        }
    }
}

function print() {
    console.log(...tape, "||state:" + state[0] + "|position:" + state[1])
}
// ------------------- TEST ----------------------
let tape = [1,B,1]
state = [q0, 0]
//program = require("./TMs/increment");
//program = require("./TMs/double");
//program = require("./TMs/decrement");
program = require("./TMs/sum");
tm(program, tape, state)
console.log(tape.indexOf(true))

