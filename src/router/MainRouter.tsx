import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Content not found</>,
    }
])

export const MainRouter = () => {
    return <RouterProvider router={router} />
}