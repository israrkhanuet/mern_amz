import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import PorductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropDown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  };
  console.log("userInfo", userInfo);
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position='bottom-center' limit={1} />
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to='/cart' className='nav-link'>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg='danger'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropDown title={userInfo.name} id='basic-nav-dropdown'>
                    <Link to='/profile' className='dropdown-item'>
                      User Profile
                    </Link>
                    <Link to='/orderhistory' className='dropdown-item'>
                      Order History
                    </Link>
                    <NavDropDown.Divider />
                    <Link
                      to='#signout'
                      className='dropdown-item'
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropDown>
                ) : (
                  <Link className='nav-link' to='/signin'>
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:slug' element={<PorductScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/signin' element={<SigninScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All right reserved </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import data from "./data";

// function App() {
//   return (
//     <div>
//       <header>
//         <a href='/'>Bannudeals</a>
//       </header>
//       <main>
//         <h1>Featured Products</h1>
//         <div className='products'>
//           {data.products.map((product) => (
//             <div className='products' key={product.slug}>
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
