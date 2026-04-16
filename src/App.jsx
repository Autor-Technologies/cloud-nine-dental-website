import { createBrowserRouter, RouterProvider, Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIReceptionistPopup from './components/AIReceptionistPopup'
import LoquentChatModal from './components/LoquentChatModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Dentists from './pages/Dentists'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIReceptionistPopup />
      <LoquentChatModal />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'dentists', element: <Dentists /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      { path: 'booking', element: <Booking /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center pt-20">
            <div className="text-center">
              <div className="font-urbanist font-extrabold text-navy text-[80px] leading-none mb-4">404</div>
              <h1 className="section-title mb-4">Page Not Found</h1>
              <p className="section-sub mx-auto mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="btn-primary">Go to Homepage</a>
            </div>
          </div>
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
