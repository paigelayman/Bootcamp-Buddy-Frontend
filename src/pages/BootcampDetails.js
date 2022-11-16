import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateReview from "../components/CreateReview";
import ReviewCard from "../components/ReviewCard";
import { GetReview } from "../services/ReviewServices";

const BootcampDetails = (props) => {
  // Variable
  const [bootcampObject, updateBootcampObject] = useState(null);
  const { bootcampId } = useParams();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const getSelectedBootcamp = async () => {
      //do axios call to get a bootcamp object based on the id
      const tempBootCampObject = {
        id: 1,
        name: "General Assembly",
        website:
          "https://generalassemb.ly/education/software-engineering-immersive-remote",
        location: "New, NY",
        remote: false,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired."
      };
      updateBootcampObject(tempBootCampObject);
    };
    const getReviewList = async () => {
      //do axios call to get the list of review for the selected bootcamp
      let reviewList = await GetReview(1);
      console.log(reviewList);
      const tempReviewList = [
        {
          id: 1,
          userId: 1,
          content:
            "adasdakjdhasjkdhalskdjhaskjdhka alsdk jask jdhlaksd aksjdh lashdaksdh klash",
          rating: 5
        },
        {
          id: 10,
          userId: 3,
          content:
            "aksjdhasd ajkshd kjash lskadj hflasd hfakldsfhla lajd flahj",
          rating: 4
        },
        {
          id: 12,
          userId: 7,
          content:
            "alskdjhlakhjd alkdjal; djklajd asjdo lasjkd laksjld ;aks jdlaksjdal;s d;l",
          rating: 5
        }
      ];
      setReviewList(tempReviewList);
    };
    getSelectedBootcamp();
    getReviewList();
  }, []);

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
        <div>Decription: {bootcampObject.description}</div>
        <div>Website: {bootcampObject.website}</div>
        <div>Location: {bootcampObject.location}</div>
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
          <ReviewCard key={review.id} review={review} />
        ))}
        <CreateReview bootcampId={bootcampObject.id} userId={props.user.id} />
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
