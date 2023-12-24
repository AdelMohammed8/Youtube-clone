import SearchPage from "./SearchPage";
import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
function App() {
  return (
   
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RecommendedVideos />}></Route>
            <Route path="/search/:adel" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
