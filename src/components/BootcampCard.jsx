import { useNavigate } from "react-router-dom";

const BootcampCard = ({bootcamp}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/bootcamp/1");
    }
    return (
        <div className="grid col-3">
            <div onClick={handleClick}>{bootcamp.name}</div>
            <div onClick={handleClick}>{bootcamp.shortDescription}</div>
            <button>Join</button>
        </div>
    )
}

export default BootcampCard