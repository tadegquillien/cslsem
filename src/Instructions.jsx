// This component displays the instructions
// Technically it is several components (one for each page), nested within one big component
// (there migth be more elegant ways to handle this).

// import external components and methods
import { textStyle, buttonStyle } from './dimensions';
import { useState, useEffect } from 'react';
import './Instructions.css';
import Image from './Image';


// the main component
const Instructions = (props) => {

    

    //keeps track of the current page
    const [trialNumber, setTrialNumber] = useState(0);

    //update the page number
    const incrementTrial = () => {
        setTrialNumber((a) => a + 1);
    }

    //the props we will pass on to each page
    const tutorialProps = {
        setCurrentPhase: props.setCurrentPhase,
        incrementTrial: incrementTrial,
    };



    //the list of pages (add more as you see fit)
    const instructionTrials = [
        <TaskTutorialOne {...tutorialProps} />,
        <TaskTutorialTwo {...tutorialProps} />,
        <TaskTutorialThree {...tutorialProps} />,
        //<TaskTutorialFour {...tutorialProps} />,
        //<TaskTutorialFive {...tutorialProps} />,
        // etc
    ]
    //display the current page
    return (
        instructionTrials[trialNumber]
    )

}

const TaskTutorialOne = (props) => {

    // make sure the participant starts at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleClick = () => {
        props.incrementTrial()
    };

    const r = 30;
    const text = <span>
        <p style={{ color: "red" }}>(Please do not refresh the page during the study -- you would be unable to complete the experiment)</p>
        <br></br>
        <p>Thank you for taking part in this study. </p>
        <p>In this experiment, you will investigate simple machines.</p>
        <p>These machines are composed of basic units, called nodes:</p>
    </span>;

    const img1 = <Image Acolor={'red'} Bcolor={'red'} Ccolor={'red'} Ecolor={'white'} AWired={0} BWired={0} CWired={0}
        Atext={""} Btext={""} Ctext={""} Etext={""} r={r} BState={0} CState={0} EState={1} mode='diamond' use={'normal'} />



    const text2 = <span>
        <p>A node can be in different states: for example this node can be either <span style={{ color: 'orange' }}><b>ON</b></span> or <b>OFF</b>.</p>
    </span>;

    const img2 = <Image Acolor={'red'} Bcolor={'red'} Ccolor={'red'} Ecolor={'orange'} AWired={0} BWired={0} CWired={0}
        Atext={""} Btext={""} Ctext={""} Etext={""} r={r} BState={0} CState={0} EState={1} mode='diamond' use={'oneNodeDisplay'} />

    const img3 = <Image Acolor={'red'} Bcolor={'red'} Ccolor={'red'} Ecolor={'white'} AWired={0} BWired={0} CWired={0}
        Atext={""} Btext={""} Ctext={""} Etext={""} r={r} BState={0} CState={0} EState={1} mode='diamond' use={'oneNodeDisplay'} />





    const nextPageButton = <button style={buttonStyle} onClick={() => handleClick()}>Next</button>

    return (
        <div style={textStyle}>
            <br></br>
            {text}
            {img1}
            {text2}
            <div className="instContainer" style={{}}>
                {img2}
                {img3}
            </div>
            <br></br>
            {nextPageButton}
            <br></br>
        </div >
    )

}




const TaskTutorialTwo = (props) => {

    // make sure the participant starts at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleClick = () => {
        props.incrementTrial()
    };

    const r = 30;

    const text1 = <span>
        <p>Nodes can be wired together to form a larger machine.
            The state of the node at the origin of the arrow can influence the state of the node at the end of the arrow. </p>
        <p>For example, below we show the same machine in two different configurations. Changing the color of the node at the top changes the color of the one it is wired into.</p>
    </span>;

    const img1 = <Image Acolor={'red'} Bcolor={'red'} Ccolor={'red'} Ecolor={'white'} AWired={0} BWired={0} CWired={1}
        Atext={""} Btext={""} Ctext={""} Etext={""} r={r} BState={0} CState={0} EState={0} mode='diamond' use={'normal'} />

    const img2 = <Image Acolor={'red'} Bcolor={'green'} Ccolor={'green'} Ecolor={'orange'} AWired={0} BWired={0} CWired={1}
        Atext={""} Btext={""} Ctext={""} Etext={""} r={r} BState={0} CState={1} EState={1} mode='diamond' use={'normal'} />




    const nextPageButton = <button style={buttonStyle} onClick={() => handleClick()}>Next</button>

    return (
        <div style={textStyle}>
            <br></br>

            {text1}
            {img1}
            {img2}

            {nextPageButton}
            <br></br>
        </div >
    )

}

const TaskTutorialThree = (props) => {

    // make sure the participant starts at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleClick = () => {
        props.setCurrentPhase("training")
    };

    const text = <span>
        <p>Nodes in a machine influence other nodes according to particular rules.</p>
        <p>We are interested in how well people can learn these rules by observing the machines.</p>

        <p>In each trial we will show you a machine in a particular state. You will have to predict whether the node at the bottom of the machine is <span style={{ color: 'orange' }}><b>ON</b></span> or <b>OFF</b>.</p>
        <p>Of course at the beginning you will have to guess, but as you make more observations you can improve your accuracy. Please try to be as accurate as you can!</p>

    </span>
    const nextPageButton = <button style={buttonStyle} onClick={() => handleClick()}>Click here to start the task</button>

    return (
        <div style={textStyle}>
            {text}
            {nextPageButton}
            <br></br>
        </div>
    )

}


export default Instructions;