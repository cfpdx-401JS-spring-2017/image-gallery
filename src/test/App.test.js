import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import { Wrapper } from '../components/Wrapper';
import { List } from '../components/List';
import { Thumbnail } from '../components/Thumbnail';
import { Gallery } from '../components/Gallery';
import App from '../App';

const views = [List, Gallery, Thumbnail];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
