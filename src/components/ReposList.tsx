import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NextPage } from 'next';
import { Repos } from '../interfaces/global_interfaces';
import {Link, Typography} from "@mui/material";

const RepoList: NextPage<Repos> = ({ repos }) => {
  console.log(repos);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant={"h3"}>
                Repo Name
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map(repo => (
            <TableRow
              key={repo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={repo.html_url} rel="noopener" target="_blank">
                  {repo.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepoList;
