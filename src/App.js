import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light") // whether dark mode is on or off
    const [alert, setAlert] = useState(null)

    // const [currentAccent, setCurrentAccent] = useState({
    //     container: "#042743",
    //     btn: "primary"
    // })

    // const accents = {

    //     blue: {
    //         container: "#042743",
    //         btn: "primary"
    //     },
    //     red: {
    //         container: "#570f0c",
    //         btn: "danger"
    //     },
    //     green: {
    //         container: "#04360a",
    //         btn: "success"
    //     },
    //     black: {
    //         container: "#121010",
    //         btn: "dark"
    //     },

    // }
    // const setAccent = (color) => {
    //     if (mode === "dark") {
    //         setCurrentAccent(accents[color])
    //         showAlert(color + " theme has been applied!", "success")
    //     }
    //     else {
    //         showAlert("Enable dark mode to set color theme!", "warning")
    //     }
    // }


    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark")
            document.body.style.backgroundColor = "#042743"
            showAlert("Dark mode has been enabled.", "success")
            document.title = "TextUtils - Dark Mode"
        }
        else {
            setMode("light")
            document.body.style.backgroundColor = "white"
            showAlert("Light mode has been enabled.", "success")
            document.title = "TextUtils - Light Mode"
        }
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3 ">

                    <Routes>
                        <Route exact path="/about" element={<About />} />

                        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

                    </Routes>

                </div>
            </Router>
            {/* <TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode} />
                <About /> */}
        </>
    );
}


export default App;
