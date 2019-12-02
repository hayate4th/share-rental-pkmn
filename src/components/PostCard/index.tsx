import React from "react";
import { Moment } from "moment";
import styled from 'styled-components';

interface PostCardProps {
  userName: string;
  userIconUrl: string;
  createdAt: Moment;
  pkmnPartyName: string;
  pkmnImgUrl: string;
  tweetUrl: string;
  likeCount: number;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  userIconUrl,
  createdAt,
  pkmnPartyName,
  pkmnImgUrl,
  tweetUrl,
  likeCount
}) => {
  return (
    <CardWrapper>
      <CardTrainerBox>
        <img src={userIconUrl} alt="" />
        <div>{userName}</div>
        <div>{pkmnPartyName}</div>
        <div>{createdAt.format("YYYY/MM/DD")}</div>
      </CardTrainerBox>
      <CardContent>
        <img src={pkmnImgUrl} alt="" />
      </CardContent>
      <CardActions>
        <button>いいね{likeCount}</button>
        <button>共有</button>
        <div>{tweetUrl}</div>
      </CardActions>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
`;
const CardTrainerBox = styled.div`
  display: flex;
`;
const CardContent = styled.div`
  
`;
const CardActions = styled.div`
  display: flex;
`;

export default PostCard;
