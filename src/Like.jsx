import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';


export function Like() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="likeButton">

          <IconButton onClick={() => setLike(like + 1)} >      
          <Badge badgeContent={like} color="primary" >
          <img src="src\thumb-down.png" alt="like.png" className="png" />
          </Badge>
          </IconButton>

          <IconButton onClick={() => setDisLike(disLike + 1)} >      
          <Badge badgeContent={disLike} color="error" >
          <img src="src\thumb-up.png" alt="like.png" className="png" />
          </Badge>
          </IconButton>

    </div>
  );
}
