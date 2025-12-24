import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div>hello</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
