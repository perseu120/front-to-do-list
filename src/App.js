import {  BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import SignIn from './pages/SignIn/index.js';
import SignUp from './pages/SignUp/index.js';

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path='/register' element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}