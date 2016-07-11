import actions, { reducer } from '../../main/state/title';

describe('State: title', function() {
  it('should return default state', function() {
    expect(reducer(null, { })).to.equal('Hello, world!');
  });
  it('should return new state when changeTitle action is dispatched', function() {
    expect(reducer(null, actions.changeTitle('new title'))).to.equal('new title');
  });
});
