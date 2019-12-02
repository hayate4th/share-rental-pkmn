import React from "react";
import { Moment } from "moment";

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
    <div>
      <img src={userIconUrl} alt="" />
      <div>{userName}</div>
      <div>{pkmnPartyName}</div>
      <div>{createdAt.format("YYYY/MM/DD")}</div>
      <img src={pkmnImgUrl} alt="" />
      <button>いいね{likeCount}</button>
      <button>共有</button>
      <div>{tweetUrl}</div>
    </div>
  );
};

export default PostCard;
