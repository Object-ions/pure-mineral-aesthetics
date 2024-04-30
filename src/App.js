import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/layout/Footer';
import Treatments from './pages/Treatments';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import 'leaflet/dist/leaflet.css';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Credits from './pages/Credits';
function App() {
  return (
    <>
      <Router>
        <div className="page">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/collections" element={<Collections />} />
              <Route
                path="/collection/:collectionName"
                element={<Collection />}
              />
              <Route
                path="/collection/:collectionName/:productId"
                element={<Product />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactForm />} />
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
