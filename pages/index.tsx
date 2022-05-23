import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { IRepos } from '../src/interfaces/global';
import RepoCardsList from '../src/components/ui/organisms/RepoCardsList';

/**
 *
 * @param repos
 * @constructor
 */
const IndexPage: NextPage<IRepos> = ({ repos }) => {
  return <RepoCardsList repos={repos} />;
};
export default IndexPage;

/**
 * Fetch all repos (including repo details, number of thumbs up)
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.UPVOTER_API_URL}/repos`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { repos: data },
  };
};
