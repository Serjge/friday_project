import {SuperButton, SuperCheckbox, SuperInputText} from "components";
import {useState} from "react";

export const Test = () => {

    const [text, setText] = useState('')
    const [disable, setDisable] = useState(false)

    return (
        <div>
            <h1>Test</h1>
            <SuperInputText onChange={(e)=>setText(e.currentTarget.value)}/>
            <SuperCheckbox checked={disable} onChange={(e)=>setDisable(e.currentTarget.checked)}/>
            <SuperButton disabled={!disable} onClick={()=>alert(text)} title={'Button'}>Button</SuperButton>
        </div>
    );
};