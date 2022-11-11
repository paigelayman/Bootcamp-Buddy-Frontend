import Client from "./api";

export const GetBootcampList = async () => {
  try {
    // const res = await Client.get("/bootcamps");
    // return res.data;
    const tempData = [
      {
        id: 1,
        name: "General Assembly",
        website:
          "https://generalassemb.ly/education/software-engineering-immersive-remote",
        location: "New, NY",
        remote: true,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired."
      },
      {
        id: 2,
        name: "Hack Reactor",
        website: "https://www.hackreactor.com/",
        location: "Austin, TX",
        remote: true,
        shortDescription:
          "Our coding bootcamps are challenging, life-changing, and designed to fit your schedule and skill level. We train students using a computer science and coding curriculum that models the exciting work being done in the software engineering industry. We'll help you launch the career you crave.",
        description:
          "Moved by our belief that more people should have the opportunity to pursue this fulfilling career path, we launched a new, 19-week immersive bootcamp designed for those with zero coding experience. If students commit 45-60 hours per week over 19 weeks, they’ll become a job-ready software engineer, no matter their incoming skill level."
      },
      {
        id: 3,
        name: "Tech Elevator",
        website:
          "https://www.techelevator.com/locations/coding-bootcamp-dallas-texas/?gclid=Cj0KCQiA37KbBhDgARIsAIzce15rr7iZ1AgxVpJCU8nFSuZZ7haOvAaoruZXQ8n_s9ejm3FdM-eCafoaAoBPEALw_wcB",
        location: "Dallas, TX",
        remote: false,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired."
      }
    ];
    return tempData;
  } catch (error) {
    throw error;
  }
};
