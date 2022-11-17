import { DeleteReview } from "../services/ReviewServices"
const ReviewCard = ({review,currentUser,refresh}) => {

    const deleteReview = async () => {
        await DeleteReview(currentUser,review.id)
        refresh(true)
    }

    return (
        <div className="review">
            <div>Rating: {review.rating}</div>
            <div>Name: {review.name}</div>
            <div>Review: {review.content}</div>
            {review.userId===currentUser ? <button onClick={deleteReview}>Delete</button> : <div></div>}
        </div>
    )
}

export default ReviewCard