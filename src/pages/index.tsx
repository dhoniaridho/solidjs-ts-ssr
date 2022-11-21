import { createSignal } from "solid-js";

function App() {
    const [count, setCount] = createSignal(0);

    return (
        <div class="App">test
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="logo" alt="Vite logo" />
                </a>
                <a href="https://www.solidjs.com" target="_blank"></a>
            </div>
            <h1>Vite + Solid</h1>
            <div class="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count()}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Solid logos to learn more
            </p>
        </div>
    );
}

export default App;
