import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./components/home"

function App() {
    return (
        <div>
            <Home/>
            {/* add outros componentes */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)