import { useState } from "react";

function Tweet({tweetId, content, likeCount, createdAt, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="tweet-edit-wrapper">
      <div>
        <div className="tweet-content">
          {isEditing ? (
            <input
              type="text"
              value={content}
              onChange={(e) =>
                onEdit({
                  id: tweetId,
                  content: e.target.value,
                  likeCount: likeCount,
                  createdAt: createdAt,
                })
              }
            />
          ) : (
            { content }
          )}
          {content}
        </div>
      </div>
      <div className="edit-tweet">
        <button onClick={setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="like-createdAt-wrapper">
        <div className="likes">{likeCount} likes</div>
        <div className="cretaed-at">Tweeted at {Tweet.createdAt}</div>
      </div>
    </div>
  );
}

export default Tweet;
