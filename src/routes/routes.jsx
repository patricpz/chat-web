import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import PrivateRotas from './privateRoutes';
import Index from '../components/screen/Index';

function RotasApp() {




    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path='/chat' element={<Index />} />
                  
            </Routes>
        </BrowserRouter>
    );
}

export default RotasApp;
