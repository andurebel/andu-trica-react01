import { SET_USERS } from "./../actions/types/auth/index";

// {
//     '114620690899337185678': {
//       id: '114620690899337185678',
//       stats: {
//       }
//     }
//   }

const initialState = {
  entities: {},
  //lamest cache
  cached: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      const users = payload.reduce((users, user) => {
        const { id, stats } = user;
        users[id] = {
          id,
          stats,
        };

        return {
          ...state,
          entities: users,
          cached: true,
        };
      }, {});
      return users;
    default:
      return state;
  }
};

export default usersReducer;
