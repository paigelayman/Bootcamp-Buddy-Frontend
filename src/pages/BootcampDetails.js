import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BootcampDetails = (props) => {
  // Variable
  const [bootcampObject, updateBootcampObject] = useState(null);
  const { bootcampId } = useParams();

  useEffect(() => {
    const getSelectedBootcamp = () => {
      //do axios call to get a bootcamp object based on the id
      const tempBootCampObject = {
        id: 1,
        name: "General Assembly",
        website:
          "https://generalassemb.ly/education/software-engineering-immersive-remote",
        location: "New, NY",
        remote: false,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired."
      };
      updateBootcampObject(tempBootCampObject);
    };
    getSelectedBootcamp();
  }, []);

  let bootcampDemoDataRender = (
    <div>
      <div>Decription: </div>
      <div>Website: </div>
      <div>Location: </div>
      <div>Remote option: </div>
    </div>
  );
  if (bootcampObject) {
    bootcampDemoDataRender = (
      <div>
        <div>Decription: {bootcampObject.description}</div>
        <div>Website: {bootcampObject.website}</div>
        <div>Location: {bootcampObject.location}</div>
        <div>
          Remote option {bootcampObject.remote ? "is" : "is not"} available.
        </div>
      </div>
    );
  }

  let bootcampCommentRender = (
    <div>
      <div>Bootcamp comment: </div>
    </div>
  );

  let bootcampDetailsRender = (
    <div>
      <div></div>
    </div>
  );

  if (bootcampObject) {
    bootcampDetailsRender = (
      <div>
        <div>{bootcampObject.name}</div>
        {bootcampDemoDataRender}
        {bootcampCommentRender}
      </div>
    );
  }

  let toRender = (
    <div>
      <div>This is Bootcamp Details</div>
      {bootcampDetailsRender}
    </div>
  );

  return toRender;
};

export default BootcampDetails;
