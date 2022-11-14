const BootcampDetails = (props) => {
  let bootcampDemoDataRender = (
    <div>
      <div>Decription: </div>
      <div>Website: </div>
      <div>Location: </div>
      <div>Remote option: </div>
    </div>
  );

  let bootcampCommentRender = (
    <div>
      <div>Bootcamp comment: </div>
    </div>
  );

  let bootcampDetailsRender = (
    <div>
      <div>Bootcamp name</div>
      {bootcampDemoDataRender}
      {bootcampCommentRender}
    </div>
  );

  let toRender = (
    <div>
      <div>This is Bootcamp Details</div>
      {bootcampDetailsRender}
    </div>
  );

  return toRender;
};

export default BootcampDetails;
