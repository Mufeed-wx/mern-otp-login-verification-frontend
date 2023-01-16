import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mobile from "./components/Mobile"
import Otp from "./components/Otp"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mobile />} />
                <Route path="/otp" element={<Otp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;