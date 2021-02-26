//var tm = function(a,b,c,d,e){while(d<c)with(a[d][b[e|=0]||"B"])b[e]=w,e+=m,d=n;return b};
var tm = function(
    a, // {Object} program @see test.html for details
    b, // {Number[]} tape
    c, // {String} end state
    d, // {String} start state
    e  // [{Number} = 0] caret position
) {

    while(
        d < c // while ! eof program
        ) {
        /* 'e |= 0' - if e is undefined - reset to 0 else leave as is */
        with (/* q = */a[d][b[e |= 0] || "B"]) { // push current program statement aka "q" to the top of current scope
            b[e] = w, // chenge symbol under caret, w is the item of "q"
                e += m, // move caret by ..., m is the item of "q"
                d = n; // jump to next state, n is the item of "q"
        }
    }

    return b

}
var program = {"q0": {"1": {"w": "B", "m": 1, "n": "q1"}},
    "q1": {"1": {"w": "1", "m": 1, "n": "q1"},
        "0": {"w": "0", "m": 1, "n": "q2"},
        "B": {"w": "0", "m": 1, "n": "q2"}},
    "q2": {"1": {"w": "1", "m": 1, "n": "q2"},
        "B": {"w": "1", "m": -1, "n": "q3"}},
    "q3": {"1": {"w": "1", "m": -1, "n": "q3"},
        "0": {"w": "0", "m": -1, "n": "q3"},
        "B": {"w": "1", "m": 1, "n": "q4"}},
    "q4": {"1": {"w": "B", "m": 1, "n": "q1"},
        "0": {"w": "0", "m": 1, "n": "q5"}}};

var tape = [1,1,1,1];

document.getElementById("ret").innerHTML = tm(program, tape, "q5", "q0", 0);
