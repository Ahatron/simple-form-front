import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration.tsx';
import ErrorPage from './pages/ErrorRoute.tsx';
import ExpenseForm from './pages/ExpenseForm.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  { errorElement: <ErrorPage /> },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/expense',
    element: <ExpenseForm />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
