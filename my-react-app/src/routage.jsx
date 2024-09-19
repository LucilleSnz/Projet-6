import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Property from "./pages/Property";
import ErrorPage from "./pages/ErrorPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<Property />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};
export default AppRouter;