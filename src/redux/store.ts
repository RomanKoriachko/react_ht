import {configureStore} from "@reduxjs/toolkit"
import cartreducer from "./cartreducer"

import likeReducer from "./likeReducer"

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartreducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
