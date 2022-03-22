import { getBooks, getBook } from '@/services/apis/books';

export default {
  namespaced: true,
  state: {
    book: null,
    books: [],
  },
  mutations: {
    SET_BOOK(state, payload) {
      state.book = payload;
    },
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
  },
  actions: {
    async fetchBooks({ commit }, {
      query,
      page,
      perPage,
    }) {
      const response = await getBooks(query, page - 1, perPage);
      commit('SET_BOOKS', response.data.items);
    },
    async fetchBook({ commit }, payload) {
      const response = await getBook(payload);
      commit('SET_BOOK', response.data);
    },
  },
};
