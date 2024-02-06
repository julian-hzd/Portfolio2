import Router from "./components/Router";
import Footer from "./components/Footer";

export default function App() {
  // Add fugitive and git log tree
  return (
    <div className="flex flex-col h-screen text-zinc-100 ">
      <Router />
      <Footer />
    </div>
  );
}
