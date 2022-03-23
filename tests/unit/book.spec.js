import { shallowMount } from '@vue/test-utils';
import Books from '@/views/pages/books/Books.vue';

describe('Books.vue', () => {
  it('Books page view', () => {
    const wrapper = shallowMount(Books);

    expect(wrapper.find('section.books')
      .exists())
      .toBe(true);
  });
});
