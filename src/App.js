import LandingPage from './components/Landing';
import MainLibraryPage from './pages/LibraryPage';
import LibraryBookDetails from './components/Crud pages/libraryBookDetails';
import CreateBook from './components/Crud pages/createBook';
import DashBoard from './components/dashboard/dashboard';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



 const router = createBrowserRouter([
  {path:'/', element:<LandingPage/> },
  {path:'/LibraryPage',element:<MainLibraryPage/>},
  {path:'/DashBoard',element:<DashBoard/>},
  {path:'/LibraryBook/:id',element:<LibraryBookDetails/>},
  {path:'/DashBoard/AddBook',element:<CreateBook/>},
 ])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
