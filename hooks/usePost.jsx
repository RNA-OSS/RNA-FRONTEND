import { useDispatch, useSelector } from "react-redux";
import * as actions from "../reducers/post";

//데이터를 내려주고, 통신한다

function usePost() {
  const dispatch = useDispatch();
  const { isLoadedPost, post, postLists, isLoadedPostLists } = useSelector(
    (state) => state.postReducer
  );

  const fetch = () => {
    dispatch({ type: actions.LOAD_POST_LISTS_REQUEST });
  };
  return { isLoadedPost, post, postLists, isLoadedPostLists, fetch };
}

export default usePost;
