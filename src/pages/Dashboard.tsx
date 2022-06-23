import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "../styles.css";
import { Article } from "../components/Article";
import { removeArticle } from "../store/actionCreators";
import Header from "../components/Header";

const Dashboard: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  return (
    <>
      <Header />

      <main>
        {articles.map((article: IArticle) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        ))}
      </main>
    </>
  );
};

export default Dashboard;
