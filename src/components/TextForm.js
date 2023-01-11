import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared successfully!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const countWords = (text) => {
        let words = text.split(" ")
        for (let word of words) {

            if (word === "" ) {
                let index = words.indexOf(word)
                words.splice(index, 1)
            }
        }
        return words.length
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#14191e" : "#dee2e6 ", color: props.mode === "dark" ? "#dee2e6" : "#14191e" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className='container my-4' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

            </div>
        </>
    )

}
