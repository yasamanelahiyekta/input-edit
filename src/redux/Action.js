import axios from "axios";

export const changenumber = (x) => (dispatch, getstate) => {
    dispatch({ type: "changenumber", payload: getstate().number + x })
};
export const getPosts = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "loading", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts")
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "success", payload: { data: [...newData], loading: false, error: "" } })
        console.log(newData);
    } catch (error) {
        dispatch({ type: "faild", payload: { data: [], loading: false, error: error.message } })
        console.log(error);
    }
}
export const changeTitle = (text, index) => (dispatch, getstate) => {
    const posts = JSON.parse(JSON.stringify(getstate().posts.data));
    posts[index].title = text;
    dispatch({ type: "changeTitle", payload: { data: [...posts], loading: false, error: "" } })
}