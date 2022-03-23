import { getBooks, getBook } from '@/services/apis/books';

export default {
  namespaced: true,
  state: {
    book: null,
    books: [],
  },
  mutations: {
    SET_BOOK(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.book = payload;
    },
    SET_BOOKS(state, payload) {
      // eslint-disable-next-line no-param-reassign
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

      if (response.data.items) commit('SET_BOOKS', response.data.items);
      else commit('SET_BOOKS', []);
    },
    async fetchBook({ commit }, payload) {
      const response = await getBook(payload);
      commit('SET_BOOK', response.data);
    },
  },
};
