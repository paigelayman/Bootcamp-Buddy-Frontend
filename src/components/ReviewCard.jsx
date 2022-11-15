const ReviewCard = ({review}) => {

    return (
        <div>
            <div>Rating: {review.rating}</div>
            <div>Name: {review.name}</div>
            <div>Review: {review.content}</div>
        </div>
    )
}

export default ReviewCard