import * as React from "react";
import { useDispatch } from "react-redux";
import "../styles.css";

import { AddArticle } from "../components/AddArticle";
import { addArticle } from "../store/actionCreators";
import { Dispatch } from "redux";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SaveArticle: React.FC = () => {
  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => {
      dispatch(addArticle(article));
      navigate("/");
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <main>
        <h1>Create Article</h1>
        <AddArticle saveArticle={saveArticle} />
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

export default SaveArticle;
