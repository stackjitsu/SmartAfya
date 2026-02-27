import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
