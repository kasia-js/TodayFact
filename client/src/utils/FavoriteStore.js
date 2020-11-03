import { createStore } from 'redux';

function favoriteStore (state = {}, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      state[action.fact.description] = action.fact;
      return state;
    case 'REMOVE_FAVORITE':
      delete state[action.fact.description];
      return state;
    default:
      return state;
  }
}

class FavoriteStore {
  constructor (store) {
    this.store = store;
  }

  addFavorite (fact) {
    this.store.dispatch({ type: 'ADD_FAVORITE', fact });
  }

  removeFavorite (fact) {
    this.store.dispatch({ type: 'REMOVE_FAVORITE', fact });
  }

  getCount () {
    return Object.keys(this.store.getState()).length;
  }

  getList () {
    return Object.values(this.store.getState());
  }

  subscribe (callback) {
    this.store.subscribe(() => {
      callback();
    });
  }
}

const store = new FavoriteStore(createStore(favoriteStore, {}));

export default store;
