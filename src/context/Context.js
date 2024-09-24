import { createContext, useState } from "react";
import run from "../config/Gemini";

 export const Context = createContext();

 const ContextProvider = (props) =>{

        const [inputState, setInputState] = useState('');
        const [recentPrompt, setRecentPrompt] = useState('');
        const [prevPrompt, setPrevPrompt] = useState([]);
        const [showResult, setShowResult] = useState(false);
        const [loading, setLoading] = useState(false);
        const [resultData, setResultData] = useState('');

        const delayPara = (index, nextWord) =>{
            setTimeout(function (){
            setResultData(prevPrompt=>prevPrompt+nextWord);
            },75*index)
        }

    const onSent = async (prompt) =>{
        setResultData('');
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(inputState)
        const response = await run(inputState)
        let responseArray = response.split("**");
        let newResponse;
        for(let i=0; i< responseArray.length; i++)
        {
                if(i===0||i%2!==1){
                    newResponse += responseArray[i];
                }
                else{
                    newResponse += "<b>"+responseArray[i]+"</b>";
                }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        //setResultData(newResponse2);
        let newResponseArray =  newResponse2.split(' ');
        for(let i=0; i<newResponseArray.length; i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+' ')
        }
        setLoading(false);
        setInputState('')
    }
    
    const ContextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        inputState,
        setInputState,
        
    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
 }
 export default ContextProvider