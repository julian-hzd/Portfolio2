import Router from "./components/Router";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col h-screen text-gray-100 ">
      <Router />
      <Footer />
    </div>
  );
}
