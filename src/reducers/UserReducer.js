export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export function UserReducer(state, action) {
  switch (action.type) {
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
}
