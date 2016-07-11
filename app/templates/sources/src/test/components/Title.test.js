import Title from '../../main/components/Title';

// mockStore and mount are injected in src/test/setup.js

describe('Component: Title', () => {
  it('will render message from store', () => {
    const store = mockStore({ title: 'Hello, world!'});
    const component = mount(<Title store={store}/>);
    expect(component.text()).to.equal('Hello, world!');
  });
});
