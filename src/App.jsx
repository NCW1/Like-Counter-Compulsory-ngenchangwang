import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";

export default function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [totalActions, setTotalActions] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  function increaseLike() {
    setLikeCount(likeCount + 1);
    setTotalActions(totalActions + 1);
    setShowProgressBar(true);
  }

  function increaseDislike() {
    setDislikeCount(dislikeCount + 1);
    setTotalActions(totalActions + 1);
    setShowProgressBar(true);
  }

  const likePercentage = (likeCount / totalActions) * 100;
  const dislikePercentage = (dislikeCount / totalActions) * 100;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant="success"
          onClick={increaseLike}
          className="mx-3 px-4"
        >
          👍🏻 {likeCount}
        </Button>
        <Button
          variant="danger"
          onClick={increaseDislike}
          className="mx-3 px-4"
        >
          👎🏻 {dislikeCount}
        </Button>
      </div>
      {showProgressBar && (
        <ProgressBar className="w-75 mt-2">
          <ProgressBar
            striped
            variant="success"
            now={likePercentage}
            key={1}
          />
          <ProgressBar
            striped
            variant="danger"
            now={dislikePercentage}
            key={2}
          />
        </ProgressBar>
      )}
    </div>
  );
}
