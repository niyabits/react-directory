import * as React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';
import Folder from './Folder';

const DirWrapper: React.FC = ({ children }) => {
  const location = useLocation();
  const [screens, setScreens] = React.useState<React.ReactNode>([]);
  const [initialPath, setInitialPath] = React.useState('');
  const _childs = React.useRef<React.ReactNode[]>([]);

  const getScreen = React.useCallback(childs => {
    if (!Array.isArray(childs)) return;
    childs.forEach((c: any) => {
      if (c.type === Folder) {
        if (c.props.children) {
          getScreen(c.props.children);
        }
        _childs.current.push(c);
      }
    });
  }, []);

  React.useEffect(() => {
    getScreen(children);
    setScreens(_childs.current);
  }, [children, getScreen]);

  React.useEffect(() => {
    setInitialPath(location.pathname);
  }, []);

  return (
    <>
      <Switch>{screens}</Switch>
      {location.pathname === initialPath && (
        <LinkRenderer children={children} />
      )}
    </>
  );
};

export default DirWrapper;
