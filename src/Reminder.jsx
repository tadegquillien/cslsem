// this component is used during the Test phase, and displays the
// different types of machines the participant saw during the Training phase

import {
    trialType1, trialType2, trialType3, trialType4, trialType5
} from "./randomized-parameters";
import { giveColors, causalRule } from "./CausalRule";
import Image from "./Image";
import './TestPhase.css';
import { graphicalDimensions } from "./graphicalInterface";


const Reminder = (props) => {

    // import node colors
    const colors = props.colors;
    // the size of a node
    let r_reminder = 15;

    // collect all the machines in an array
    const machines = [trialType1, trialType2, trialType3];

    // compute color assignments for all machines
    // (this creates an array of arrays, where each array contains the colors for one machine)
    const nodeColors = machines.map((a) => {
        let c = giveColors(a.AState, a.BState, a.CState,
            causalRule(props.condition, a.AState, a.BState, a.CState,
                a.AWired, a.BWired, a.CWired), colors);
        return (c)
    });

    // create an svg for each machine
    const images = [0, 1, 2].map((i) => {
        return (
            <Image
                AWired={machines[i].AWired} BWired={machines[i].BWired} CWired={machines[i].CWired} Etext=''
                Acolor={nodeColors[i][0]} Bcolor={nodeColors[i][1]} Ccolor={nodeColors[i][2]}
                Ecolor={nodeColors[i][3]} r={r_reminder}
                AState={machines[i].AState} BState={machines[i].AState}
                CState={machines[i].AState} EState={machines[i].AState} mode={props.mode} use={'normal'} />
        )
    });

    // import the recommended svg width value
    let [ax, ay, bx, by,
        cx, cy, str, ex, ey, circleWidth,
        svgWidth, svgHeight] = graphicalDimensions(r_reminder);


    // return a div
    return (<div className="reminderContainer"
        // style={{ width: svgWidth * 10.5 }}
    >

        <div className="reminderText">
            <p>As a reminder, here are all the different types of observation you made before:</p>

        </div>
        <div className="reminderNodes">

            <span className='reminderContained2'> {images[2]} </span>
            <span className='reminderContained2'> {images[0]} </span>
            <span className='reminderContained2'> {images[1]} </span>
            {/* <div className="reminderContained">
                
            </div> */}
            {/* <div className="reminderContained">
                <span className='reminderContained2'> {images[3]} </span>
                <span className='reminderContained2'> {images[4]} </span>
            </div> */}
        </div>


    </div>);
};

export default Reminder;