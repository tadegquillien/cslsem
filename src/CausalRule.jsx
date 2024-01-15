

// this script contains functions that determine the state and colors of a machine

// this function computes the state of E given the state of its parent variables,
// and the experimental condition

// the causal rules depend on the condition. 
// In the first condition, the E component is off (white) by default
// In the second condition, the E component is on (black) by default
// First condition: the causal rule is
// E := 0 v (A v C) & ~B
// Second condition: the causal rule is
// E := 1 + (1-A) - B + C
// in the first condition the input default value of A is 0
// in the second condition the input default value of A is 1 
// (if A is disconnected, it's the same as if it was connected but with value 1)
// otherwise in both conditions the input default value of all variables is 0

export const causalRule = (condition,
    AState, BState, CState,
    AWired, BWired, CWired) => {
    let output = condition === 1 ?
        (0 | ((AState * AWired | CState * CWired) & !(BState * BWired))) :
        condition === 2 ?
            (1 - (1 - AState) * AWired - BState * BWired + CState * CWired) : NaN;
    return (output)
}



// this function maps states of the nodes to colors
export const giveColors = (AState, BState, CState, EState, colors) => {
    let Acolor = AState ? colors.Aon : colors.Aoff;
    let Bcolor = BState ? colors.Bon : colors.Boff;
    let Ccolor = CState ? colors.Con : colors.Coff;
    let Ecolor =
        (EState ? colors.Eon : colors.Eoff);
    return ([Acolor, Bcolor, Ccolor, Ecolor]);
}

