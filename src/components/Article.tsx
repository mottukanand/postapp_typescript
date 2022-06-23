import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </Grid>
        <Grid item xs={4}>
          <button
            onClick={() => navigate(`/article/${article.id}`)}
            className="edit"
          >
            Edit
          </button>
          <button onClick={() => deleteArticle(article)}>Delete</button>
        </Grid>
      </Grid>
    </div>
  );
};
