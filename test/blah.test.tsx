import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Folder } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Folder path="/" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
