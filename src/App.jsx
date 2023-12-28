import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage/Home";
import ScrollReveal from "./components/common/ScrollReveal";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollReveal>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Layout>
        </ScrollReveal>
      </BrowserRouter>
    </>
  );
}

export default App;
