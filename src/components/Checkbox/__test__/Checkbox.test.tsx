import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('should display pass in number', () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
