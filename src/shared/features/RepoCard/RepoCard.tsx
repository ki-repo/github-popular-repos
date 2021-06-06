import { ReactElement, useCallback, useState } from 'react';
import { RepoInfo } from 'src/apiCalls/repo';
import { CardBodyText } from 'src/shared/components/Card/CardBodyText.css';
import { CardContentWrapper } from 'src/shared/components/Card/CardContentWrapper.css';
import { CardItem } from 'src/shared/components/Card/CardItem.css';
import { CardItemWrapper } from 'src/shared/components/Card/CardItemWrapper.css';
import { CardSubTitle } from 'src/shared/components/Card/CardSubTitle.css';
import { CardTitle } from 'src/shared/components/Card/CardTitle.css';
import { CardButton } from 'src/shared/components/Card/CardButton.css';

interface RepoCardProps extends RepoInfo {
  hasStarSupport?: boolean;
  onStarClicked?: Function;
}
/**
 * This component is used as a RepoCard component, to show repo details
 */
const RepoCard = ({
  repoId,
  repoName,
  githubLink,
  description,
  numberOfStars,
  language,
  hasStarSupport,
  onStarClicked,
}: RepoCardProps): ReactElement => {
  // enable/disable starring based on props and if the repo have been already starred
  const [isStarAvailable, setStarAvailable] = useState(hasStarSupport);
  const handleRepoStared = useCallback(
    (ev) => {
      onStarClicked &&
        onStarClicked({
          repoId,
          repoName,
          githubLink,
          description,
          numberOfStars,
          language,
        });
      setStarAvailable(false);
    },
    [
      repoId,
      repoName,
      githubLink,
      description,
      numberOfStars,
      language,
      onStarClicked,
    ]
  );
  return (
    <CardItemWrapper key={repoId}>
      <CardItem>
        <CardContentWrapper>
          <CardTitle>{repoName}</CardTitle>
          <CardSubTitle href={githubLink} target={'_blank'} rel={'noopener'}>
            {githubLink}
          </CardSubTitle>
          <CardBodyText>{description}</CardBodyText>
          <CardBodyText>Number of Stars: {numberOfStars}</CardBodyText>
          {isStarAvailable && (
            <CardButton onClick={handleRepoStared}>Star Repo</CardButton>
          )}
        </CardContentWrapper>
      </CardItem>
    </CardItemWrapper>
  );
};

export default RepoCard;
