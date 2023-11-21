import './app.scss';
import Navigation from "../components/Navigation/Navigation";

const App = () => {
    return (
        <div className='background'>
            <Navigation />
            <div className='content'></div>
        </div>
    );
};

export default App;
