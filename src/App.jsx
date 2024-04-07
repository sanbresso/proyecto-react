import Counter from "./components/common/counter/Counter.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  const greeting = "Bienvenido a mi Ecommerce";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
      <Footer />

      <Counter />
    </div>
  );
}

export default App;
