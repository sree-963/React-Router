import { lazy, Suspense } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Navbar = lazy(() => import('./components/Navbar'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const NotFound = lazy(() => import('./components/NotFound'));
const Shop = lazy(() => import('./components/Shop'));
const Men = lazy(() => import('./components/Men'));
const Women = lazy(() => import('./components/Women'));
const MenDetail = lazy(() => import('./components/MenDetail'));


// import Home from './components/Home'
// import About from './components/About'
// import Products from './components/Products'
// import Contact from './components/Contact'
// import Navbar from './components/Navbar'
// import ProductDetail from './components/ProductDetail'
// import NotFound from './components/NotFound'
// import Shop from './components/Shop'
// import Men from './components/Men'
// import Women from './components/Women'
// import MenDetail from './components/MenDetail'

const App = () => {

  const router = createBrowserRouter([
    {

      path: '/',
      element:

        <Suspense fallback={<h1> Loading.....</h1>}>
          <div >
            <Navbar />
            <Home />
          </div>
        </Suspense>
    },

    {
      path: '/about',
      element: 
      <Suspense fallback={<h1> Loading.....</h1>}>
        <div>
          <Navbar />
          <About />
        </div>
      </Suspense>
    },


    {
      path: '/products',
      element: 
      <Suspense  fallback={<h1> Loading.....</h1>}>
        <div>
        <Navbar />
        <Products />
      </div>
      </Suspense>
    },

    {
      path: '/shop',
      element: <Suspense fallback={<h1> Loading ..... </h1>}>
        <div>
        <Navbar />
        <Shop />
      </div>
      </Suspense>,

      children: [

        {

          path: 'men',
          children: [
            {
              index: true,
              element: <div>
                <Men />
              </div>
            },

            {
              path: ':id',
              element: <div>
                <MenDetail />
              </div>
            }

          ],
        },

        {

          path: 'women',
          element: <div>
            <Women />
          </div>
        },

      ],

    },

    {
      path: '/products/:id',
      element: <Suspense fallback={<h1> Loading ..... </h1>}>
        <div>
        <Navbar />
        <ProductDetail />
      </div>
      </Suspense>
    },

    {
      path: '/contact',
      element: <Suspense fallback={<h1> Loading ..... </h1>} >
         <div>
        <Navbar />
        <Contact />
      </div>
      </Suspense>
    },

    {
      path: '*',
      element: <Suspense fallback={<h1> Loading ..... </h1>}>
        <div>
        <Navbar />
        <NotFound />
      </div>
      </Suspense>
    },
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App
