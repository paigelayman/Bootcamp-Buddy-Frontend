import { GetBootcampList } from "../services/BootcampServices";
import { useEffect, useState } from "react";
import BootcampCard from "../components/BootcampCard";
import { GetUserBootcamp } from "../services/UserBootcampServices";

const Home = ({ user }) => {
  const [bootcampList, setBootcampList] = useState(null);
  const [userBootcampList, setUserBootcampList] = useState(null);
  const [needRefresh, setNeedRefresh] = useState(true);

  useEffect(() => {
    const getAllBootcamp = async () => {
      const bootcampsData = await GetBootcampList();
      setBootcampList(bootcampsData);
    };

    const getCurrentUserBootcamp = async () => {
      const bootcampsList = await GetUserBootcamp(user.id);
      setUserBootcampList(bootcampsList);
    };

    if (needRefresh) {
      if (user) {
        getCurrentUserBootcamp();
      }
      getAllBootcamp();
      setNeedRefresh(false);
    }
  }, [needRefresh]);

  let bootcampListRender = <div></div>;
  if (bootcampList) {
    bootcampListRender = (
      <div className="home-wrapper">
        {bootcampList.map((bootcamp) => (
          <BootcampCard
            key={bootcamp.id}
            bootcamp={bootcamp}
            user={user}
            userBootcamps={userBootcampList}
          />
        ))}
      </div>
    );
  }

  let toRender = (
    <div>
      <div className="welcome"></div>
      <div className="bootcamp-list">{bootcampListRender}</div>
    </div>
  );

  return toRender;
};
export default Home;
