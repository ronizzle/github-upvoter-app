export interface IRepo {
  id: string;
  name: string;
  html_url: string;
}

export interface RepoProps {
  repo: IRepo
}

export interface IRepos {
  repos: IRepo[];
}

