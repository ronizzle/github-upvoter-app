import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Bullet from '../atoms/Bullet';
import { RepoProps } from '../../../interfaces/global';
import moment from 'moment';

const RepoCard: React.FC<RepoProps> = ({ repo }) => {
  console.log(repo);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Link href={repo?.owner?.html_url} target="_blank">
            <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
          </Link>
        }
        action={
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        }
        title={repo.full_name}
        subheader={moment(repo.created_at).format('MMMM Do YYYY, h:mm:ss a')}
      />

      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {repo.description}
        </Typography>
        <Typography variant="body2">
          <Bullet />
          {repo.language}
        </Typography>
        <Typography variant="body2">
          <Bullet />
          <Link href={repo?.license?.url} target="_blank">
            {repo?.license?.name}
          </Link>
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          variant="body2"
          href={repo.html_url}
          target="_blank"
          rel="noopener"
        >
          Go to repo &raquo;
        </Link>
      </CardActions>
    </Card>
  );
};
export default RepoCard;
