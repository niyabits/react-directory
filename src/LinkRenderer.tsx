import * as React from 'react';
import { Link } from 'react-router-dom';

const LinkRenderer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      {React.Children.map(children as JSX.Element[], (child: JSX.Element) => {
        if (child.type !== File) {
          return <Link to={child.props.path}>{child.props.path}</Link>;
        }
        return child;
      })}
    </>
  );
};

export default LinkRenderer;
