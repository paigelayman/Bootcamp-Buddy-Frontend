import { useEffect, useState } from "react";
import { DeleteReview,UpdateReview } from "../services/ReviewServices"
import { GetUser } from "../services/UserServices";
const ReviewCard = ({review,currentUser,refresh}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [userName, setUserName] = useState("")
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

    const updateReview = async () => {
        // Axios call with JWT to edit review
        await UpdateReview(review.id, formValues)
        refresh(true)
        setIsEditMode(false)
    }

    const deleteReview = async () => {
        await DeleteReview(currentUser,review.id)
        refresh(true)
    }

    useEffect(()=>{
        const getUserName = async() =>{
            let userObject =await GetUser(review.userId)
            let name = userObject.firstName
            setUserName(name)
        }
        getUserName();
    },[])

    return (
        <div>
            {isEditMode ? <div className="review">
            <div>Name: {userName}</div>
            <div>Rating: <input
          onChange={handleChange}
          value={formValues.rating}
          name="rating"
          type="text"
          required
        /></div>
            <div>Review: <textarea
            name="content"
              id="review"
              cols="30"
              rows="1"
              onChange={handleChange}
              value={formValues.content}
            ></textarea></div>
            {review.userId===currentUser ? <button onClick={cancelEdit}>Cancel</button> : <div></div>}
            {review.userId===currentUser ? <button onClick={updateReview}>Update</button> : <div></div>}
        </div> : <div className="review">
        <div>Name: {userName}</div>
            <div>Rating: {review.rating}</div>
            <div>Review: {review.content}</div>
            {review.userId===currentUser ? <button onClick={editReview}>Edit</button> : <div></div>}
            {review.userId===currentUser ? <button onClick={deleteReview}>Delete</button> : <div></div>}
        </div>}
        </div>
        
    )
}

export default ReviewCard