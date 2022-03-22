import { shallowMount } from '@vue/test-utils';
import Books from '@/views/pages/books/Books.vue';

describe('Books.vue', () => {
  test('should show the Books page for user', () => {
    const wrapper = shallowMount(Books);
    expect(wrapper.find('section.books')
      .exists())
      .toBe(true);
  });
});
