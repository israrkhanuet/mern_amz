import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PorductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:slug' element={<PorductScreen />} />
          </Routes>
        </main>
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
