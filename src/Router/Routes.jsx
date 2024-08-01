import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";

function RoutesComp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComp;
