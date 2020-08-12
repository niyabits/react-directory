import * as React from 'react';
import { Link } from 'react-router-dom';
import FolderIcon from './icons/FolderIcon';

const LinkRenderer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      {React.Children.map(children as JSX.Element[], (child: JSX.Element) => {
        if (child.type !== File) {
          const path = child.props.path;
          const pathArr = path.split('/');
          const currDir = pathArr[pathArr.length - 1];

          return (
            <div>
              <FolderIcon />
              <Link to={path}>{currDir}</Link>
            </div>
          );
        }
        return child;
      })}
    </>
  );
};

export default LinkRenderer;
