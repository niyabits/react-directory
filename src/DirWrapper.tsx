import * as React from 'react';
import { useLocation, Switch } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';
import Folder from './Folder';

const DirWrapper: React.FC = ({ children }) => {
  const location = useLocation();
  const [screens, setScreens] = React.useState<React.ReactNode[]>([]);
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
  }, [children]);

  return (
    <div>
      <Switch>{screens}</Switch>
      {location.pathname === '/' && <LinkRenderer>{children}</LinkRenderer>}
    </div>
  );
};

export default DirWrapper;
