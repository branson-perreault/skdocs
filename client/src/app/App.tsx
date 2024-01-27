import './app.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Search from '../pages/Search/Search';
import Navigation from '../components/Navigation/Navigation';
import About from '../pages/About/About';

const App = () => {
    return (
        <div className='background'>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/find' element={<Search />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Navigate to={'/find'} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
