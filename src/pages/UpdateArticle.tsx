import * as React from "react";
import "../styles.css";
import EditArticle from "../components/EditArticle";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const UpdateArticle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <h1>Edit Article</h1>
        <EditArticle />
        <h4>
          {" "}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Go Back
          </a>
        </h4>
      </main>
    </>
  );
};

export default UpdateArticle;
