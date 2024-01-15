// The goal of this file is to randomize the elements that need to be randomized once and 
// presented in the same order all throughout the experiment

// We need this because if we randomize an element within a component, the element will be re-randomized
// every time the component refresh. By creating the element here and then exporting it to the relevant
// component, we avoid this issue.

// we import the shuffle function which will allow us to randomize arrays
import { shuffle } from './convenienceFunctions';

//
// define the different machines that can be shown to participants
//

// A is blue
export const trialType1 = {
    AState: 0,
    BState: 0,
    CState: 0,
    AWired: 1,
    BWired: 0,
    CWired: 0
};

// A is green
export const trialType2 = {
    AState: 1,
    BState: 0,
    CState: 0,
    AWired: 1,
    BWired: 0,
    CWired: 0
};

// Everything is unwired
export const trialType3 = {
    AState: 0,
    BState: 0,
    CState: 0,
    AWired: 0,
    BWired: 0,
    CWired: 0
}

// A is green, B is red
export const trialType4 = {
    AState: 1,
    BState: 1,
    CState: 0,
    AWired: 1,
    BWired: 1,
    CWired: 0
}

// A is blue, C is purple
export const trialType5 = {
    AState: 0,
    BState: 0,
    CState: 1,
    AWired: 1,
    BWired: 0,
    CWired: 1
}

// // trials where the blue node is wired
// const blueTrials = shuffle([trialType1, trialType1, trialType1, trialType1,
//     trialType5, trialType5, trialType5, trialType5,
//     trialType3, trialType3, trialType3, trialType3]);

// // trials where the green node is wired
// const greenTrials = shuffle([trialType4, trialType4, trialType4, trialType4,
//     trialType2, trialType2, trialType2, trialType2,
//     trialType3, trialType3, trialType3, trialType3
// ]);

// // trials where the blue node is wired
// const blueTrials = shuffle([trialType1, trialType1, trialType1, trialType1,
//     trialType3, trialType3, trialType3, trialType3
// ]);

// // trials where the green node is wired
// const greenTrials = shuffle([trialType2, trialType2, trialType2, trialType2,
//     trialType3, trialType3, trialType3, trialType3
// ]);

// put the training items together and export them
// export const trainingItems = Math.random() < .5 ? greenTrials.concat(blueTrials) :
//     blueTrials.concat(greenTrials);

export const trainingItems = shuffle([
    trialType1, trialType1, trialType1, trialType1,
    trialType3, trialType3, trialType3, trialType3,
    trialType2, trialType2, trialType2, trialType2,
    trialType3, trialType3, trialType3, trialType3
])

export const training2Items = trainingItems;

// put the test items together and export them
export const testItems = shuffle([trialType1, trialType2]);

// the condition (1 means that the baseline state of E is off, 
// 2 means that the baseline state of E is on)
export const conditions = shuffle([1, 2]);
// the shape of machines A and E
export const mode = shuffle(['diamond', 'circle']);

//
// declare the colors
//

// the colors we will assign to machine A
const mainColors = [shuffle(['black', 'turquoise']), shuffle(['purple', 'green'])];

// the first color set (for the first set of machines)
const colors = {
    Aon: mainColors[0][0],
    Aoff: mainColors[0][1],
    Bon: 'red',
    Boff: 'white',
    Con: 'green',
    Coff: 'white',
    Eon: 'orange',
    Eoff: 'white'
};

// the second color set (for the second set of machines)
const colors2 = {
    Aon: mainColors[1][0],
    Aoff: mainColors[1][1],
    Bon: 'red',
    Boff: 'white',
    Con: 'green',
    Coff: 'white',
    Eon: 'orange',
    Eoff: 'white'
};

// put the two color sets together, and randomize them
export const colorSets = shuffle([colors, colors2]);

// the order of the cause, allow, prevent, and mnd questions
// (they are randomized once per each participant, i.e. 
// they remain displayed on the same order for a given participant)
export const questionOrder = shuffle([0, 1, 2, 3]);