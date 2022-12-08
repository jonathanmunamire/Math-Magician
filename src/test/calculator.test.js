import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('test if the page renders components', () => {
  test('test if calculator is rendered', () => {
    const calcul = renderer
      .create(<Calculator />)
      .toJSON();

    expect(calcul).toMatchSnapshot();
  });
});
