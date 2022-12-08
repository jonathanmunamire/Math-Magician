import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/footer';

describe('test if the page Footer renders components', () => {
  test('test if the page Footer is rendered', () => {
    const footer = renderer
      .create(<Footer />)
      .toJSON();

    expect(footer).toMatchSnapshot();
  });
});
