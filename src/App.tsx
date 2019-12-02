import React from "react";
import moment from "moment";
import PostCard from "./components/PostCard";

const postCardProps = {
  userName: "ユーザー名",
  userIconUrl: "http://placehold.jp/100x100.png",
  createdAt: moment(),
  pkmnPartyName: "テンプレ型パーティ",
  pkmnImgUrl: "http://placehold.jp/500x300.png",
  tweetUrl: "参照ツイート",
  likeCount: 100
};

const App: React.FC = () => {
  return <PostCard {...postCardProps} />;
};
export default App;
