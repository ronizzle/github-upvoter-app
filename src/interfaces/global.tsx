export interface IRepo {
  created_at: string;
  description: string;
  full_name: string;
  html_url: string;
  id: string;
  name: string;
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
  status: boolean;
  upvote: {
    count: number;
  }
}

export interface RepoProps {
  repo: IRepo
}

export interface IRepos {
  repos: IRepo[];
}

