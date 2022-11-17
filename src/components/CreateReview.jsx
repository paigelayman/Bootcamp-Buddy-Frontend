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
            <input
          onChange={handleChange}
          value={formValues.rating}
          name="rating"
          type="text"
          required
        />
        <button onClick={handleSubmit} type="submit" className="">
              Submit
            </button>
          </div>
    )
}

export default CreateReview