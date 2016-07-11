import Input from '../../main/components/Input';

// mockStore and mount are injected in src/test/setup.js

describe('Component: Input', () => {
  it('will render Input from store', () => {
    const store = mockStore({ title: 'Hello, world!'});
    const component = mount(<Input store={store}/>);
    expect(component.text()).to.equal('Enter title');
    expect(component.find('input').node.value).to.equal('Hello, world!');
  });
});
