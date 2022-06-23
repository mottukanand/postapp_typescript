import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  let { id } = useParams();
  let location = useLocation();
  const [article, setArticle] = React.useState<IArticle | {}>();

  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  React.useEffect(() => {
    if (location && location.pathname !== "add-article" && id) {
      let v = parseInt(id);
      const selectedArticle = articles.find((val) => val.id == v);
      setArticle(selectedArticle);
    }
  }, [id, location]);

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  );
};
