import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home/Home";
import Cards from "../screens/cards/Cards";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Cards />} />
                <Route path="*" element={<div>Not found page</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;