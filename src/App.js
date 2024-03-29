// This code provides a template for how to build a psychology experiment in React

// The experiment structure that this code implements is the following:
// -a screen allowing the participant to enter their Prolific Id
// -Consent Form
// -Instructions
// -Training Phase
// -Transition
// -Test Phase
// -Demographics
// -Ending


// import relevant files and components
import './App.css';
import { useState } from 'react';
import { trainingItems, testItems, conditions, mode, colorSets } from './randomized-parameters';
import ProlificId from './ProlificId';
import ConsentForm from './ConsentForm';
import Instructions from './Instructions';
import TrainingPhase from './TrainingPhase';
import Transition from './Transition'
import TestPhase from './TestPhase';
import Demographics from './Demographics';
import Ending from './Ending';





function App() {
  //keeps track of the current phase
  const [currentPhase, setCurrentPhase] = useState("prolificId");
  //keeps track of the current trial, for the Training phase
  const [trainingNumber, setTrainingNumber] = useState(0);
  const [training2Number, setTraining2Number] = useState(0);

  //keeps track of the current trial, for the Test phase
  const [testNumber, setTestNumber] = useState(0);
  const [test2Number, setTest2Number] = useState(0);

  //increment the trial number, in the Test phase
  const incrementTest = (integer) => setTestNumber(integer + 1);
  const incrementTest2 = (integer) => setTest2Number(integer + 1);

  // increment the trial number, in the Training phase
  const incrementTraining = (integer) => setTrainingNumber(integer + 1);
  const incrementTraining2 = (integer) => setTraining2Number(integer + 1);

  // create an array with the id numbers of the training phase trials 
  const training_ids = Array.from(Array(trainingItems.length).keys());
  const training2_ids = Array.from(Array(trainingItems.length).keys());

  // create an array with the id numbers of the test phase trials
  const test_ids = Array.from(Array(testItems.length).keys());
  const test2_ids = Array.from(Array(testItems.length).keys());


  // Two counters to be use during the training phase
  // they keep track of the proportion of trials the participant predicted correctly
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterTotal, setCounterTotal] = useState(0);

  const [counterCorrect2, setCounterCorrect2] = useState(0);
  const [counterTotal2, setCounterTotal2] = useState(0);

  // generate the trials of the Training phases
  // (this creates an array, where each element is an instance of the component. 
  // I.e. there is one instance of the component per trial)
  var trainings = training_ids.map((i) => {
    return (
      <TrainingPhase key={i} training_ids={training_ids} phase={currentPhase}
        incrementTraining={incrementTraining} trainingNumber={trainingNumber}
        counterCorrect={counterCorrect} setCounterCorrect={setCounterCorrect}
        counterTotal={counterTotal} setCounterTotal={setCounterTotal} condition={conditions[0]}
        colors={colorSets[0]} mode={mode[0]}
      />
    )
  });

  var trainings2 = training2_ids.map((i) => {
    return (
      <TrainingPhase key={trainingItems.length + 1 + i} training_ids={training2_ids} phase={currentPhase}
        incrementTraining={incrementTraining2} trainingNumber={training2Number}
        counterCorrect={counterCorrect2} setCounterCorrect={setCounterCorrect2}
        counterTotal={counterTotal2} setCounterTotal={setCounterTotal2} condition={conditions[1]}
        colors={colorSets[1]} mode={mode[1]}
      />
    )
  });

  //generate the trials of the Test phases
  // (this creates an array, where each element is an instance of the component. 
  // I.e. there is one instance of the component per trial)
  var tests = test_ids.map((i) => {
    return (
      <TestPhase key={i} incrementTest={incrementTest}
        test_ids={test_ids} phase={currentPhase} testNumber={testNumber} condition={conditions[0]}
        colors={colorSets[0]} mode={mode[0]}
      />
    )
  });

  var tests2 = test_ids.map((i) => {
    return (
      <TestPhase key={testItems.length + 1 + i} incrementTest={incrementTest2}
        test_ids={test2_ids} phase={currentPhase} testNumber={test2Number} condition={conditions[1]}
        colors={colorSets[1]} mode={mode[1]}
      />
    )
  });

  // this code is responsible for displaying the current page to the user.
  // Basically this is a giant if-else command, that checks the current value of the
  // currentPhase variable, as well as the current trial number within that phase,
  // and returns the current page accordingly


  return (
    currentPhase === "prolificId" ? <ProlificId setCurrentPhase={setCurrentPhase} /> :
      currentPhase === "consentForm" ? <ConsentForm setCurrentPhase={setCurrentPhase} /> :
        currentPhase === "instructions" ? <Instructions setCurrentPhase={setCurrentPhase} /> :
          currentPhase === "training" ? ((trainingNumber + 1) > training_ids.length ?
            setCurrentPhase("transition") : trainings[trainingNumber]) :
            currentPhase === "transition" ? <Transition setCurrentPhase={setCurrentPhase} context={'internal'} /> :
              currentPhase === "test" ? ((testNumber + 1) > test_ids.length ?
                setCurrentPhase("metatransition") : tests[testNumber]) :
                currentPhase === 'metatransition' ? <Transition setCurrentPhase={setCurrentPhase} context={'external'} /> :
                  currentPhase === "training2" ? ((training2Number + 1) > training2_ids.length ?
                    setCurrentPhase('transition2') : trainings2[training2Number]) :
                    currentPhase === 'transition2' ? <Transition setCurrentPhase={setCurrentPhase} context={'internal2'} /> :
                      currentPhase === "test2" ? ((test2Number + 1) > test2_ids.length ?
                        setCurrentPhase("demographics") : tests2[test2Number]) :
                        currentPhase === "demographics" ? <Demographics setCurrentPhase={setCurrentPhase} /> :
                          currentPhase === "ending" ? <Ending /> :
                            <p>{currentPhase}</p>
  )

}



export default App;
