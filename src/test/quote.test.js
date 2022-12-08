import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';

describe('test if the page NavBar renders components', () => {
  test('test if the page NavBar is rendered', () => {
    const quoteSnapShot = renderer
      .create(<Quote />)
      .toJSON();

    expect(quoteSnapShot).toMatchSnapshot();
  });
});
