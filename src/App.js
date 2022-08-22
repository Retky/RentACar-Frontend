import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import Rentals from './pages/Rentals';
import NewRental from './pages/NewRental';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Header from './components/Header';

function App() {
  const user = localStorage.getItem('user');
  return (
    <BrowserRouter>
      { user && <Header /> }
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/add_rental" element={<NewRental />} />
        <Route path="/car_detail/:id" element={<CarDetail />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_car" element={<DeleteCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
