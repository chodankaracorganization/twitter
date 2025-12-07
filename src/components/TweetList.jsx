import Tweet from "./Tweet";

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets, onEditTweet }) {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li class="tweet-like-wrapper">
          <MemoisedTweet
            content={tweet.content}
            likeCount={tweet.likeCount}
            createdAt={tweet.createdAt.toString()}
            onEdit={onEditTweet}
            tweetId={tweet.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default TweetList;
