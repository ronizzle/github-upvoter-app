import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton  from '@mui/material/IconButton';
import * as React from 'react';
import { RepoProps } from '../../../interfaces/global';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';

/**
 * ToDo: Use typehinting for Repo
 * @param repo
 */
const submitUpvote = async (repo) => {
    const url = `http://164.92.221.59/repos/upvote`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            repo_id: repo.upvote.repo_id,
        })
    });

    const data = await response.json();
    console.log(data);
}


const Upvote: React.FC<RepoProps> = ({ repo }) => {
  return (
      <Box>
          <IconButton sx={{ display: "flex", flexDirection: "column" }} onClick={() => { submitUpvote(repo) }}>
              <ThumbUpIcon />
              <Typography variant="h5">{repo.upvote.count}</Typography>
          </IconButton>
      </Box>
  );
};

export default Upvote;
