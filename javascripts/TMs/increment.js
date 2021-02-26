// increment by 1 left to right number

const program = {
    q0: {
        0: {w:1,m:0,n:halt},
        1: {w:0,m:R,n:q1},
        B: {w:1,m:0,n:halt}
    },
    q1: {
        0: {w:1,m:0,n:halt},
        1: {w:0,m:R,n:q1},
        B: {w:1,m:0,n:halt}
    },
}
module.exports = program;
/*
//increment from left to right - not working
const program = {
    q0: {
        0: {w:0,m:1,n:q0},
        1: {w:1,m:1,n:q0},
        B: {w:B,m:-1,n:q1}
    },
    q1: {
        0: {w:1,m:-1,n:q3},
        1: {w:0,m:-1,n:q2},
        B: {w:1,m:-1,n:q3}
    },
    q2: {
        0: {w:0,m:-1,n:q2},
        1: {w:1,m:-1,n:q2},
        B: {w:B,m:1,n:q3}
    }
}

 */
