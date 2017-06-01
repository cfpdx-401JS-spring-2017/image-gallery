import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import { Wrapper } from '../components/Wrapper';
import { List } from '../components/views/List';
import { Thumbnail } from '../components/views/Thumbnail';
import { Gallery } from '../components/views/Gallery';
import App from '../App';

const views = [List, Gallery, Thumbnail];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
