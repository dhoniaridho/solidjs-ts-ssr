import { createSignal } from "solid-js";
import { Router, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";
import "./App.css";

function App() {
    const Routes = useRoutes(routes);
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
