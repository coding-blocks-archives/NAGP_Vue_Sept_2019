import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

function getHelloWorldWrapper(message = 'Hello') {
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: message,
      name: 'Arnav',
    },
  })
  return wrapper
}

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const message = 'new message'
    const wrapper = getHelloWorldWrapper(message)
    expect(wrapper.text()).toMatch(`${message} Arnav`)
  })

  it('runs congratulate function properly', () => {

    const wrapper = getHelloWorldWrapper()
    wrapper.vm.congratulate()
    expect(wrapper.text()).toMatch('Congratulations! Arnav')
  })
})
