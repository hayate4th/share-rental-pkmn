import React from "react";
import moment from "moment";
import PostCard from "./components/PostCard";

const postCardProps = {
  userName: "ユーザー名",
  userIconUrl: "http://placehold.jp/100x100.png",
  createdAt: moment(),
  postTitle: "タイトル",
  pkmnImgUrl: "http://placehold.jp/500x300.png",
  pkmnPartyDescription: "パーティの説明",
  tweetUrl: "参照ツイート"
};

const App: React.FC = () => {
  return <PostCard {...postCardProps} />;
};
export default App;
