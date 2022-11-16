import { useEffect, useState } from "react";
import { PostReview } from "../services/ReviewServices";

const CreateReview = ({userId,bootcampId}) => {
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
        // do submit api call
        await PostReview(userId,bootcampId,formValues)
        // clean review
        setFormValues(
            {
                content: "",
                rating: 5,
            }
        )
    }
    return (
        <div className="create-review">
            <label className="" htmlFor="review">Review</label>
            <textarea
            name="content"
              id="review"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.content}
            ></textarea>
            <label className="" htmlFor="rating">Rating</label>
            <button onClick={handleSubmit} type="submit" className="">
            <input
          onChange={handleChange}
          value={formValues.rating}
          name="rating"
          type="text"
          required
        />
              Submit
            </button>
          </div>
    )
}

export default CreateReview