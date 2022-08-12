import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../Select';

describe('Select', () => {
  it('should render properly', () => {
    const options = [
      {
        label: 'Apple',
        value: 'Apple',
      },
      {
        label: 'Banana',
        value: 'Banana',
      },
      {
        label: 'Orange',
        value: 'Orange',
      },
    ];

    const tree = renderer.create(<Select options={options} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
