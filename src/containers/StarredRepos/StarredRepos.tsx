import { Fragment, ReactElement } from 'react';
import { RepoInfo } from 'src/apiCalls/repo';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { CardsWrapper } from 'src/shared/components/CardsWrapper.css';
import RepoCard from 'src/shared/features/RepoCard/RepoCard';
/**
 * This component is used to show starred repos
 */
const StarredRepos = (): ReactElement => {
  // get repos from localstorage and show them if available
  const [starredItems] = useLocalStorage<RepoInfo[]>('starred', []);
  if (!starredItems || starredItems.length === 0) {
    return <h1>you don't have any starred Repos</h1>;
  }

  return (
    <Fragment>
      <h1>Starred Repos</h1>
      <CardsWrapper>
        {starredItems.map((repo: RepoInfo) => (
          <RepoCard
            key={repo.repoId}
            repoId={repo.repoId}
            description={repo.description}
            githubLink={repo.githubLink}
            repoName={repo.repoName}
            numberOfStars={repo.numberOfStars}
            hasStarSupport={false}
          />
        ))}
      </CardsWrapper>
    </Fragment>
  );
};

export default StarredRepos;
