import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export function Like({but,edit}) {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);


  return (
    <div className="likeButton">

          <IconButton onClick={() => setLike(like + 1)} >       
          <Badge badgeContent={like} color="primary" >
          <ThumbUpIcon color="primary"/>
          </Badge>
          </IconButton>

          <IconButton onClick={() => setDisLike(disLike + 1)} >      
          <Badge badgeContent={disLike} color="error" >
          <ThumbDownIcon color="error" />
          </Badge>
          </IconButton>

          {edit}
               
          {but}

    </div>
  );
}
