import * as React from 'react';
import RepoCard from '../molecules/RepoCard';
import { IRepos, IRepo } from '../../../interfaces/global';

const RepoCardsList: React.FC<IRepos> = ({ repos }) => {
  return (
    <>
      {repos.map((repo: IRepo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </>
  );
};

export default RepoCardsList;
