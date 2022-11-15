import { useEffect, useState } from "react";

const CreateReview = (props) => {
    const [review, setReview] = useState("")
    let handleChange = (e) => {
        setReview(e.target.value)
    }
    let handleSubmit = () => {
        // do submit api call
        
        // clean review
        setReview("")
    }
    return (
        <div className="">
            <label className="" htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={review}
            ></textarea>
            <button onClick={handleSubmit} type="submit" className="">
              Submit
            </button>
          </div>
    )
}

export default CreateReview