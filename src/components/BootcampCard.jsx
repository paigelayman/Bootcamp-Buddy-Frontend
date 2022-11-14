import { useNavigate } from "react-router-dom";

const BootcampCard = ({bootcamp}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/bootcamp/${bootcamp.id}`);
    }
    return (
        <div className="bootcamp-card">
            <div className="bootcamp-name" onClick={handleClick}>{bootcamp.name}</div>
            <div className="bootcamp-description" onClick={handleClick}>{bootcamp.shortDescription}</div>
            <button className="join">Join</button>
        </div>
    )
}

export default BootcampCard