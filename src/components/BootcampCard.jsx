import { useNavigate } from "react-router-dom";
import { JoinBootcamp } from "../services/UserBootcampServices";
import { useEffect, useState } from "react";
import { LeaveBootcamp } from "../services/UserBootcampServices";

const BootcampCard = ({bootcamp, user, userBootcamps}) => {
    const [isJoined, setIsJoined] = useState(false)
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/bootcamp/${bootcamp.id}`);
    }
    const handleJoin = () => {
        JoinBootcamp(bootcamp.id)
        setIsJoined(true)
    }

    const handleJoined = () => {
        LeaveBootcamp(bootcamp.id)
        setIsJoined(false)
    }


        if (userBootcamps && isJoined === false){
            console.log("run here")
            for (let i = 0; i<userBootcamps.length; i++){
                if(bootcamp.id === userBootcamps[i].bootcampId){
                    setIsJoined(true);
                    break;
                }
            }
        }

    let joinButtonRender = <div></div>
    if(user && isJoined){
        joinButtonRender = <button onClick={handleJoined} className="join">Leave</button>
    } else if (user){
        joinButtonRender = <button onClick={handleJoin} className="join">Join</button>
    }

    return (
        <div className="bootcamp-card">
            <div className="bootcamp-name" onClick={handleClick}>{bootcamp.name}</div>
            <div className="bootcamp-description" onClick={handleClick}>{bootcamp.shortDescription}</div>
            {joinButtonRender}
        </div>
    )
}

export default BootcampCard