import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/notFound.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
    </Router>
    );
};

export default AppRouter;
