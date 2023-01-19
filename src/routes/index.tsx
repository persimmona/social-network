import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
    },
]);
