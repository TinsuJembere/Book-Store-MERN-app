import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import AppRoutes from "./routes/router";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl m-auto px-4 py-6 min-h-screen">
      <AppRoutes />
      </main>
      <Footer/>
    </>
  );
}

export default App;
