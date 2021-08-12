import profileReducer, { addPostActionCreator } from "./profile-reducer";


test('new post should be added', () => {
    let initialState = {
        posts: [
            { id: 1, massage: 'Its my first post', likeCount: 20 },
            { id: 2, massage: 'Hello', likeCount: 2 },
        ]
    }
    let action = addPostActionCreator("Test Post")
    let newState = profileReducer(initialState,action)


    expect( newState.posts.length).toBe(3)
  });