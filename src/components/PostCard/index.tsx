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

const PostCard: React.FC<PostCardProps> = () => {
  return (
    <div>
      <div>ユーザー名</div>
      <img src="http://placehold.jp/100x100.png" />
      <div>投稿日時</div>
      <div>タイトル</div>
      <img src="http://placehold.jp/500x300.png" alt="" />
      <div>パーティの説明</div>
      <button>いいね</button>
      <button>レビュー</button>
      <button>お気に入り</button>
      <div>参照ツイート</div>
    </div>
  );
};

export default PostCard;
