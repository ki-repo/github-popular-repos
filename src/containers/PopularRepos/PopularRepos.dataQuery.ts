import { getLastWeekPopularRepos } from 'src/apiCalls/repo';

const QUERY_NAME = 'popular-repos-data';

const DataQueryFn = (filterDate: string): Promise<any> => {
  return getLastWeekPopularRepos(filterDate);
};

const DataQueryOptions = {
  staleTime: 5000,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
};

const dataQuery = {
  name: QUERY_NAME,
  fn: DataQueryFn,
  options: DataQueryOptions,
};

export default dataQuery;
