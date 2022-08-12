import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
