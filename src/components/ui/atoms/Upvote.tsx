import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton  from '@mui/material/IconButton';
import * as React from 'react';
import { RepoProps } from '../../../interfaces/global';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';

const Upvote: React.FC<RepoProps> = ({ repo }) => {
  return (
      <Box>
          <IconButton sx={{ display: "flex", flexDirection: "column" }}>
              <ThumbUpIcon />
              <Typography variant="h5">{repo.upvote.count}</Typography>
          </IconButton>
      </Box>
  );
};

export default Upvote;
