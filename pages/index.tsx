import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import ReposList from "../src/components/ReposList";
import { Repos } from "../src/interfaces/global_interfaces";


const IndexPage: NextPage<Repos> = ({ repos }) => {
  return (
    <ReposList repos={repos}/>
  );
};
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.UPVOTER_API_URL}/repos`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { repos: data },
  };
};
