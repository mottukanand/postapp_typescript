import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { editArticle } from "../store/actionCreators";

type FormData = {
  id: number;
  title: string;
  body: string;
};

export default function EditArticle() {
  const navigate = useNavigate();
  let { id } = useParams();
  let location = useLocation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch: Dispatch<any> = useDispatch();

  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  React.useEffect(() => {
    if (location && location.pathname !== "add-article" && id) {
      let v = parseInt(id);
      const selectedArticle = articles.find((val) => val.id == v);
      if (selectedArticle) {
        setValue("id", selectedArticle?.id);
        setValue("title", selectedArticle?.title);
        setValue("body", selectedArticle?.body);
      }
    }
  }, [id, location]);
  const onSubmit = handleSubmit((data) => {
    dispatch(editArticle(data));
    navigate("/");
  });

  return (
    <form onSubmit={onSubmit} className="Add-article">
      <input
        {...register("title")}
        id="title"
        placeholder="Title"
        type="text"
      />
      <input
        {...register("body")}
        type="text"
        id="body"
        placeholder="Description"
      />
      <button>Edit article</button>
    </form>
  );
}
