import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const query = useQuery();

  return {
    push: history.push,
    replace: history.replace,
    pathname: location.pathname,
    params,
    query,
    match,
    location,
    history,
  } as const;
};
