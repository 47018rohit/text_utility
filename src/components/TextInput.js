import React, { useState } from 'react'

export default function TextInput(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('UpperCased' , 'success')
    }
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('LowerCased' , 'success')
    }
    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Cleared' , 'success')
    }
    const copyText = () => {
        var textField = document.getElementById("textInput");

        textField.select();
        textField.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(textField.value);
        props.showAlert('Copied' , 'success')

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='textForm'>
                <div className="my-4">
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter the text to convert</h1>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} value={text} onChange={handleOnChange} id="textInput" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
            </div>
            <div className="container">
                <h2 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text Summary</h2>
                <p className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}><b>{text.split(' ').filter((e)=>{return e.length !== 0}).length}</b> words and <b>{text.length}</b> Characters</p>
            </div>
        </>
    )
}
