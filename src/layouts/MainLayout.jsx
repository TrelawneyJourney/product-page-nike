import ProductPage from "../pages/ProductPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <ProductPage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
