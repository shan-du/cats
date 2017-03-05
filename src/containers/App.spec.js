// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should contain its children', () => {
    const children = (<p>test</p>);
    const component = shallow(
      <App>
        {children}
      </App>
    );
    expect(component.contains(children)).toEqual(true);
  });
});
