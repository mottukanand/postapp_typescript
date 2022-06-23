import * as React from "react";
import "./styles.css";
import Dashboard from "./pages/Dashboard";
import SaveArticle from "./pages/SaveArticle";
import UpdateArticle from "./pages/UpdateArticle";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-article" element={<SaveArticle />} />
        <Route path="/article/:id" element={<UpdateArticle />} />
      </Routes>
    </>
  );
};

export default App;
