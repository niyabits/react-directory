import * as React from 'react';
import FileIcon from './icons/FileIcon';
import { Link } from 'react-router-dom';

const File: React.FC<{ path: string }> = ({ children, path }) => {
  return (
    <>
      <Link to={path} className="link">
        <FileIcon />
        <span className="label">{children}</span>
      </Link>
    </>
  );
};

export default File;
