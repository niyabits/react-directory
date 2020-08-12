import * as React from 'react';
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Link,
  useLocation,
  Switch,
} from 'react-router-dom';

const LinkRenderer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      {React.Children.map(children as JSX.Element[], (child: JSX.Element) => {
        if (child.type !== File) {
          return (
            <div>
              <Link to={child.props.path}>{child.props.path}</Link>
            </div>
          );
        }
        return child;
      })}
    </>
  );
};

const Folder: React.FC<{ path: string }> = ({ path, children }) => {
  const history = useHistory();
  return (
    <Route exact path={path}>
      <>
        <button onClick={() => history.goBack()}>Back</button>
        <LinkRenderer children={children} />
      </>
    </Route>
  );
};

const DirWrapper: React.FC = ({ children }) => {
  const location = useLocation();
  const [screens, setScreens] = React.useState<React.ReactNode>([]);
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
    <>
      <Switch>{screens}</Switch>
      {location.pathname === '/' && <LinkRenderer children={children} />}
    </>
  );
};

export default function App() {
  return (
    <>
      <Router>
        <DirWrapper>
          <Folder path="/rust"></Folder>
          <Folder path="/react"></Folder>
        </DirWrapper>
      </Router>
    </>
  );
}
