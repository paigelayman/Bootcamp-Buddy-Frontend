import { useNavigate } from "react-router-dom";
import { JoinBootcamp } from "../services/UserBootcampServices";

const BootcampCard = ({bootcamp}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/bootcamp/${bootcamp.id}`);
    }
    const handleJoin = () => {
        JoinBootcamp(bootcamp.id)
    }
    return (
        <div className="bootcamp-card">
            <div className="bootcamp-name" onClick={handleClick}>{bootcamp.name}</div>
            <div className="bootcamp-description" onClick={handleClick}>{bootcamp.shortDescription}</div>
            <button onClick={handleJoin} className="join">Join</button>
        </div>
    )
}

export default BootcampCard