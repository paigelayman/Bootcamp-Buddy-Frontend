import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateReview from "../components/CreateReview";
import ReviewCard from "../components/ReviewCard";
import { GetReview, GetAllowToCreateReview } from "../services/ReviewServices";
import { GetBoomcampDetail } from "../services/BootcampServices";

const BootcampDetails = (props) => {
  // Variable
  const [bootcampObject, updateBootcampObject] = useState(null);
  const { bootcampId } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(true);
  const [isAllowToCreateReview, setIsAllowToCreateReview] = useState(false);

  useEffect(() => {
    const getSelectedBootcamp = async () => {
      // Axios call to get a bootcamp object based on the id
      let bootcamp = await GetBoomcampDetail(bootcampId);
      updateBootcampObject(bootcamp);
    };
    const getReviewList = async () => {
      // Axios call to get the list of review for the selected bootcamp
      let reviewList = await GetReview(bootcampId);
      setReviewList(reviewList);
    };

    const getAllowToCreateReview = async () => {
      // Axios call to check if user already written a review
      let isAllow = await GetAllowToCreateReview(props.user.id, bootcampId);
      // let isAllow = await GetAllowToCreateReview(6, 3);
      setIsAllowToCreateReview(isAllow);
    };

    if (needRefresh) {
      getSelectedBootcamp();
      getReviewList();
      if (props.user) getAllowToCreateReview();
      setNeedRefresh(false);
    }
  }, [needRefresh]);

  // Render
  let bootcampDemoDataRender = (
    <div>
      <div>Decription: </div>
      <div>Website: </div>
      <div>Location: </div>
      <div>Remote option: </div>
    </div>
  );
  if (bootcampObject) {
    bootcampDemoDataRender = (
      <div className="bootcamp-details-card">
        <div className="details-name">{bootcampObject.description}</div>
        <div>{bootcampObject.website}</div>
        <div>{bootcampObject.location}</div>
        <div>
          Remote option {bootcampObject.remote ? "is" : "is not"} available.
        </div>
      </div>
    );
  }

  let bootcampCommentRender = (
    <div className="bootcamp-comment-card">
      <div>Bootcamp comment: </div>
    </div>
  );
  if (bootcampObject && reviewList && props.user) {
    bootcampCommentRender = (
      <div className="bootcamp-review-card">
        {reviewList.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            currentUser={props.user.id}
            refresh={setNeedRefresh}
          />
        ))}
        {isAllowToCreateReview ? (
          <CreateReview
            bootcampId={bootcampObject.id}
            userId={props.user.id}
            refresh={setNeedRefresh}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  } else if (bootcampObject && reviewList) {
    bootcampCommentRender = (
      <div className="bootcamp-review-card">
        {reviewList.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    );
  }

  let bootcampDetailsRender = (
    <div>
      <div></div>
    </div>
  );

  if (bootcampObject) {
    bootcampDetailsRender = (
      <div className="details-wrapper">
        {bootcampObject.name}
        {bootcampDemoDataRender}
        {bootcampCommentRender}
      </div>
    );
  }

  let toRender = (
    <div>
      <div>This is details page</div>

      {bootcampDetailsRender}
    </div>
  );

  return toRender;
};

export default BootcampDetails;
