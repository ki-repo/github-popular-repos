import { client } from 'src/utils/apiClient';

export interface RepoInfo {
  repoId: number;
  repoName: string;
  githubLink: string;
  description: string;
  numberOfStars: number;
  language?: string;
}

// a function to make an api call and format reponse
export const getLastWeekPopularRepos = async (filterDate: string): Promise<any> => {
  const data = await client(
    `https://api.github.com/search/repositories?q=created:%3E${filterDate}&sort=stars&order=desc`
  );
  return data.items.map((item: any) => {
    return {
      repoId: item.id,
      repoName: item.name,
      githubLink: item.html_url,
      description: item.description,
      numberOfStars: item.stargazers_count,
      language: item.language
    };
  });
};
