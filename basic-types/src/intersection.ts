{
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDevloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDevloper: FullStackDevloper = {
    skills: ["HTML", "CCS", "ReactJS", "NodeJS", "ExpressJS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  console.log(fullStackDevloper);
}
