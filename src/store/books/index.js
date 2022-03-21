import { getBooks } from '@/services/apis/books';

export default {
  namespaced: true,
  state: {
    book: null,
    books: [],
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    }
  },
  actions: {
    async fetchBooks({ commit }, {
      page,
      perPage,
    }) {
      const response = await getBooks(undefined, page - 1, perPage);
      commit('SET_BOOKS', response.data.items);
    },
  },
};
