import { createNamespacedHelpers } from 'vuex-composition-helpers';

const {
  useActions,
  useMutations,
  useState,
} = createNamespacedHelpers('books');

export default function () {
  const {
    fetchBooks,
    fetchBook,
  } = useActions(['fetchBooks', 'fetchBook']);

  const { SET_BOOKS } = useMutations(['SET_BOOKS']);

  const { book, books } = useState(['book', 'books']);

  return {
    // state
    book,
    books,

    // mutations
    SET_BOOKS,

    // actions
    fetchBook,
    fetchBooks,
  };
}
