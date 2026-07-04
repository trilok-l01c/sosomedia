import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <nav>
                    <h5>Home</h5>
                    <h5>Media</h5>
                    <h5>Freelancing</h5>
                </nav>
            </header>
            <main></main>
            <footer></footer>
        </>
    );
}

export default App;
