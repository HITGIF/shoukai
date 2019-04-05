import Vue from 'vue'
import Ask from '@/components/Ask'

describe('Ask.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Ask)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
