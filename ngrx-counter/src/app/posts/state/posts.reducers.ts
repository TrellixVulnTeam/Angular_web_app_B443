import { Action, createReducer } from "@ngrx/store";
import { addPostSuccess } from "./posts.actions";
import { initialState, PostsState } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(addPostSuccess, (state, action) => {
        return postsAdapter.addOne(action.post, {
            ...state,
            count: state.count + 1,
        });
    }),
    // on(updatePostSuccess, (state, action) => {
    //     return postsAdapter.updateOne(action.post, state);
    // }),
    // on(deletePostSuccess, (state, { id }) => {
    //     return postsAdapter.removeOne(id, state);
    // }),
    // on(loadPostsSuccess, (state, action) => {
    //     return postsAdapter.setAll(action.posts, {
    //         ...state,
    //         count: state.count + 1,
    //     });
    // })
);

export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action);
}