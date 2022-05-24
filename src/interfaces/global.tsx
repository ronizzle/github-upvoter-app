export interface IRepo {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  language: string;
  license: {
    name: string;
    url: string;
  };
  owner: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
}

export interface RepoProps {
  repo: IRepo
}

export interface IRepos {
  repos: IRepo[];
}

