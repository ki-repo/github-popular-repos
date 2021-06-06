import React, {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { CardsWrapper } from 'src/shared/components/CardsWrapper.css';
import RepoCard from 'src/shared/features/RepoCard/RepoCard';
import { useQuery } from 'react-query';
import dataQuery from './PopularRepos.dataQuery';
import { RepoInfo } from 'src/apiCalls/repo';
import { getLastWeekDateFormatted } from 'src/utils/utils';
import Select from 'src/shared/components/Select/Select';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const PopularRepos = (): ReactElement => {
  const lastWeeksDate = getLastWeekDateFormatted();
  const [availableRepos, setAvailableRepos] = useState([]);
  const { isLoading, isError, data } = useQuery(
    dataQuery.name,
    () => dataQuery.fn(lastWeeksDate),
    {
      ...dataQuery.options,
      onSuccess: (data) => setAvailableRepos(data),
    }
  );

  const handleFilterRepoCallBack = useCallback(
    (language) => {
      setAvailableRepos(
        language === 'all'
          ? data
          : data.filter(
              (repo: RepoInfo) => repo.language && repo.language === language
            )
      );
    },
    [setAvailableRepos, data]
  );

  const [starredItems, setStarredItems] = useLocalStorage<RepoInfo[]>(
    'starred',
    []
  );

  const handleStarRepoCallback = useCallback(
    (repo: RepoInfo) => {
      starredItems.push(repo);
      setStarredItems(starredItems);
    },
    [starredItems, setStarredItems]
  );

  useEffect(() => {
    setAvailableRepos(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    // report {error} to error service here
    return <div>error</div>;
  }

  const availableLanguages: string[] = data
    .filter((repo: RepoInfo) => repo.language)
    .map((repo: RepoInfo) => repo.language);

  return (
    <Fragment>
      <h1>Popular Repos from {lastWeeksDate}</h1>
      <Select
        addSelectAllOption={true}
        currentSelection={'all'}
        label="languages"
        options={availableLanguages}
        onChange={(ev: any) => {
          handleFilterRepoCallBack(ev.target.value);
        }}
      ></Select>
      <CardsWrapper>
        {availableRepos.map((repo: RepoInfo) => (
          <RepoCard
            key={repo.repoId}
            repoId={repo.repoId}
            description={repo.description}
            githubLink={repo.githubLink}
            repoName={repo.repoName}
            numberOfStars={repo.numberOfStars}
            hasStarSupport={
              starredItems.filter((item) => {
                return item.repoId === repo.repoId;
              }).length === 0
            }
            onStarClicked={handleStarRepoCallback}
          />
        ))}
      </CardsWrapper>
    </Fragment>
  );
};

export default PopularRepos;
