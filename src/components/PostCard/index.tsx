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
      <CardHeader>
        <CardLoginUserBox>
          <img src={userIconUrl} alt="" />
          <div>{userName}</div>
        </CardLoginUserBox>
        <div>{createdAt.format("YYYY/MM/DD")}</div>
      </CardHeader>
      <CardContent>
        <div>{pkmnPartyName}</div>
        <PkmnImg src={pkmnImgUrl} alt="" />
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
  width: 320px;
  height: auto;
  border: 1px solid #9E9E9E;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardLoginUserBox = styled.div`
  display: flex;
`;

const CardContent = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PkmnImg = styled.img`
  width: 100%;
`;

const CardActions = styled.div`
  display: flex;
`;

export default PostCard;
