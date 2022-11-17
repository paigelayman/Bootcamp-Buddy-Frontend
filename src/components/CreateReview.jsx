import { useEffect, useState } from "react";
import { PostReview } from "../services/ReviewServices";

const CreateReview = ({userId,bootcampId,refresh}) => {
    const [formValues, setFormValues] = useState(
        {
            content: "",
            rating: 5,
        }
    )

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

    let handleSubmit = async () => {
        await PostReview(userId,bootcampId,formValues)
        setFormValues(
            {
                content: "",
                rating: 5,
            }
        )
        refresh(true);
    }
    return (
        <div className="create-review">
            <label className="review-text" htmlFor="review">Review</label>
            <textarea className="review-textbox"
            name="content"
              id="review"
              cols="30"
              rows="10"
              placeholder="Enter a review..."
              onChange={handleChange}
              value={formValues.content}
            ></textarea>
            <label className="rating-text" htmlFor="rating">Rating</label>
            <input className="rating-input"
          onChange={handleChange}
          value={formValues.rating}
          name="rating"
          type="text"
          required
        />
        <button onClick={handleSubmit} type="submit" className="submit-review">
              Submit
            </button>
          </div>
    )
}

export default CreateReview