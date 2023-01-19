import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './styles/globals.css';

function App() {
    return (
        <div className='App'>
            <CssBaseline />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
