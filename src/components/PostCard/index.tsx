import React from "react";
import { Moment } from "moment";

interface PostCardProps {
  userName: string;
  userIconUrl: string;
  createdAt: Moment;
  postTitle: string;
  pkmnImgUrl: string;
  pkmnPartyDescription: string;
  tweetUrl: string;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  userIconUrl,
  createdAt,
  postTitle,
  pkmnImgUrl,
  pkmnPartyDescription,
  tweetUrl
}) => {
  return (
    <div>
      <div>{userName}</div>
      <img src={userIconUrl} alt="" />
      <div>{createdAt.format("YYYY-MM-DD hh:mm:ss")}</div>
      <div>{postTitle}</div>
      <img src={pkmnImgUrl} alt="" />
      <div>{pkmnPartyDescription}</div>
      <button>いいね</button>
      <button>レビュー</button>
      <button>お気に入り</button>
      <div>{tweetUrl}</div>
    </div>
  );
};

export default PostCard;
