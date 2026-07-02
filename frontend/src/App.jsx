import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Hit me!
            </button>
        </>
    );
}

export default App;
