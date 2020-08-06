import * as React from 'react';
import { Link, Route } from 'react-router-dom';

const Folder: React.FC<{ isLink: boolean; text: string }> = ({
  isLink,
  text,
  children,
}) => {
  if (isLink) {
    return <Link to={text}>{text}</Link>;
  } else {
    return <Route path={text}> {children}</Route>;
  }
};

export default Folder;
