import { shallowMount } from '@vue/test-utils';
import Home from '@/views/pages/home/Home.vue';

describe('Home.vue', () => {
  it('Show Home page view', () => {
    const wrapper = shallowMount(Home, {
      stubs: ['router-link'],
    });

    expect(wrapper.find('.home')
      .exists())
      .toBe(true);
  });
});
