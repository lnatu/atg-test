import { createNamespacedHelpers } from 'vuex-composition-helpers';

const {
  useActions,
  useMutations,
  useState,
} = createNamespacedHelpers('books');

export default function () {
  const { fetchBooks } = useActions(['fetchBooks']);

  const { SET_BOOKS } = useMutations(['SET_BOOKS']);

  const { books } = useState(['books']);

  return {
    // state
    books,

    // mutations
    SET_BOOKS,

    // actions
    fetchBooks,
  };
}
