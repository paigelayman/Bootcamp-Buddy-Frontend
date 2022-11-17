import { useEffect, useState } from "react";
import { DeleteReview } from "../services/ReviewServices"
const ReviewCard = ({review,currentUser,refresh}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [formValues, setFormValues] = useState(
        {
            content: review.content,
            rating: review.rating,
        }
    )

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

    const editReview = async () => {
        setIsEditMode(true)
    }

    const cancelEdit = () => {
        setIsEditMode(false)
    }

    const updateReview = () => {
        // Axios call with JWT to edit review
        console.log("Still cooking the update Review function")
    }

    const deleteReview = async () => {
        await DeleteReview(currentUser,review.id)
        refresh(true)
    }

    return (
        <div>
            {isEditMode ? <div className="review">
            <div>Rating: <input
          onChange={handleChange}
          value={formValues.rating}
          name="rating"
          type="text"
          required
        /></div>
            <div>Name: {review.name}</div>
            <div>Review: <textarea
            name="content"
              id="review"
              cols="30"
              rows="1"
              onChange={handleChange}
              value={formValues.content}
            ></textarea></div>
            {review.userId===currentUser ? <button onClick={cancelEdit}>Cancel Edit</button> : <div></div>}
            {review.userId===currentUser ? <button onClick={updateReview}>Update Review</button> : <div></div>}
        </div> : <div className="review">
            <div>Rating: {review.rating}</div>
            <div>Name: {review.name}</div>
            <div>Review: {review.content}</div>
            {review.userId===currentUser ? <button onClick={editReview}>Edit Review</button> : <div></div>}
            {review.userId===currentUser ? <button onClick={deleteReview}>Delete Review</button> : <div></div>}
        </div>}
        </div>
        
    )
}

export default ReviewCard