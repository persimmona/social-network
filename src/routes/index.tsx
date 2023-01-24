import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';
import { Messages } from '../pages/Messages';
import { Profile } from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'profiles',
                element: <Profile />,
            },
            {
                path: 'messages',
                element: <Messages />,
            },
        ],
    },
]);
