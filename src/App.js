import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Setting";
import { MyStore } from "./pages/MyStore";
import { Revenue } from "./pages/Revenue";
import { Integraions } from "./pages/Integrations";
import { SignIn } from "./pages/SignIn";
import { store } from "./Store";
import { Footer } from "./components/Footer";
import { Link } from "./pages/Link";
import { Navigate } from "react-router-dom";

function App() {
  const [header, setHeader] = store.useState("Header");

  return (
    <div>
      <BrowserRouter>
        <div className="flex text-[20px]">
          <SideBar />

          <div className="w-full">
            <div className="min-h-[94vh]">
              <Header />

              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/mystore" element={<MyStore />}></Route>
                <Route path="/revenue" element={<Revenue />}></Route>
                <Route path="/integrations" element={<Integraions />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/link" element={<Link />}></Route>
                <Route
                  path="*"
                  element={<Navigate to="/home" replace />}
                ></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
