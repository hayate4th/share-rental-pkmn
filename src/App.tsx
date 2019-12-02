import React from "react";
import moment from "moment";
import PostCard from "./components/PostCard";

const postCardProps = {
  userName: "ユーザー名",
  userIconUrl: "http://placehold.jp/100x100.png",
  createdAt: moment(),
  pkmnPartyName: "テンプレ型パーティ",
  pkmnImgUrl: "https://uc.uxpin.com/files/1062856/1034413/20191121193133-d57707a4ea38ad127d2bf5429c8fc525.jpg",
  tweetUrl: "参照ツイート",
  likeCount: 100
};

const App: React.FC = () => {
  return <PostCard {...postCardProps} />;
};
export default App;
