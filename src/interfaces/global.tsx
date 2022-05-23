
export interface IRepo {
    id: string;
    name: string;
    html_url: string;
}

export interface IRepos {
    repos: [IRepo];
}
