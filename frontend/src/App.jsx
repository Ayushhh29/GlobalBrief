import AppNavbar from "./components/Navbar";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import NewsList from "./components/NewsList";
import Bookmarks from "./components/Bookmarks";
import { useState } from "react";

function App() {

    const [darkMode, setDarkMode] =
        useState(false);

    return (

        <div
            className={
                darkMode
                    ? "dark-theme"
                    : "light-theme"
            }
        >

            <BrowserRouter>

                <AppNavbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <Routes>

                    <Route
                        path="/"
                        element={<NewsList />}
                    />

                    <Route
                        path="/bookmarks"
                        element={<Bookmarks />}
                    />

                </Routes>

            </BrowserRouter>

        </div>

    );
}

export default App;