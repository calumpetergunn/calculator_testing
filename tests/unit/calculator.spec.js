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
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can multiply', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('can divide', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can number click', () => {
    wrapper.vm.newTotal = false
    wrapper.vm.runningTotal = 2
    wrapper.vm.numberClick('4')
    expect(wrapper.vm.runningTotal).to.equal(24)
  })

  it('can operator click', () => {
    wrapper.vm.previousTotal = 10
    wrapper.vm.previousOperator = '*'
    wrapper.vm.add('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('can clear click', () => {
    wrapper.vm.runningTotal = 15
    wrapper.vm.previousTotal = 32
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    wrapper.vm.multiply(2)
    expect(wrapper.vm.runningTotal).to.equal(64)
  })
})
