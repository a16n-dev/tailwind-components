import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      document.getElementById('app-content')?.scrollTo({ top: 0 });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
