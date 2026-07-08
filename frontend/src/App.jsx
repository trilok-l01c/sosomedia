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
            <main>
                {/* Selection area for different sites */}
                <h2>Select platforms</h2>
                <label for="instagram">
                    {/* 
                        [] Add logo of each app
                        [] Add 
                     */}
                    Instagram
                    <input id="instagram" type="checkbox" name="instagram" />
                </label>
                <label for="youtube">
                    YouTube
                    <input id="youtube" type="checkbox" name="youtube" />
                </label>
                <label for="twitter/x">
                    X
                    <input id="twitter/x" type="checkbox" name="twitter/x" />
                </label>
                <label for="treads">
                    Treads
                    <input id="treads" type="checkbox" name="treads" />
                </label>
                <label for="linkedin">
                    LinkedIn
                    <input id="linkedin" type="checkbox" name="linkedin" />
                </label>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
