import ButtonWrapper from './ButtonWrapper';
import './CalcWrapper.css'
import Display from './Display';
import {useState, useEffect} from 'react';
import {store} from 'react-notifications-component';
import {evaluate, format} from 'mathjs';

const MAX_DISPLAY_LENGTH = 11;

function CalcWrapper() {
    const [displayContent, setDisplayContent] = useState("");

    const notify = (message: string) => {
        if (message === "C") {
            setDisplayContent(displayContent.slice(0,-1));
        }
        else if (message === "CA") {
            setDisplayContent("");
        } 
        else if (message === "=") {
            tryEvaluateAndSet(displayContent);
        }
        else if(message === "ln") {
            tryEvaluateAndSet(`log(${displayContent})`);
        }
        else {
            if(displayContent.length < MAX_DISPLAY_LENGTH) {
                setDisplayContent(displayContent !== "Infinity" ? displayContent + message : message);
            } else {
                store.addNotification(notifications.exceedingLength);
            }
        }
    }

    const tryEvaluateAndSet = (expression: string) => {
        try {
            const result = evaluate(expression).toString();
            setDisplayContent(beautifyExpression(result)); 
        } catch (error) {
            store.addNotification(notifications.incorrectExpression);
        }
    }

    const beautifyExpression = (expression: string) => {
        let beautifiedResult = "";
        if(parseFloat(expression) > 10 ** 10) {
            beautifiedResult = format(parseFloat(expression), {notation: "exponential", precision: 3});
        }
        else {
            beautifiedResult = format(parseFloat(expression), {precision: MAX_DISPLAY_LENGTH-1});
        }  
        return beautifiedResult;
    }

    return (
        <div className="CalcWrapper center">
            <Display content={displayContent}/>
            <ButtonWrapper notify={notify}/>
        </div>
    );
}


const notifications = {
    incorrectExpression: {
        title: "Error!",
        message: "Incorrect expression",
        type: "danger" as "danger",
        insert: "bottom" as "bottom",
        container: "bottom-right" as "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
          pauseOnHover: true
        }
    },
    exceedingLength: {
        title: "Warning!",
        message: "Length of expression must not exceed 11 characters",
        type: "warning" as "warning",
        insert: "bottom" as "bottom",
        container: "bottom-right" as "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
          pauseOnHover: true
        }
    }
}

export default CalcWrapper;