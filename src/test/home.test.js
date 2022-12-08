import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('test if the page NavBar renders components', () => {
  test('test if the page NavBar is rendered', () => {
    const home = renderer
      .create(<Home />)
      .toJSON();

    expect(home).toMatchSnapshot();
  });
});
