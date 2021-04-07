import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;

  it('enterNum changes running total', () => {
    wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('can add', () => {
    wrapper.vm.runningTotal = 4
    wrapper.vm.add('1')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('can subtract', () => {
    wrapper.vm.runningTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})
