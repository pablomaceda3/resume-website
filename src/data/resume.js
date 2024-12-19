// src/data/resume.js
export const resumeData = {
  personalInfo: {
    name: "Pablo Maceda",
    phone: "(281) 750-2521",
    email: "pablomaceda3@gmail.com",
    location: "Austin, TX, 78626",
  },
  summary:
    "Driven, multidisciplinary data engineer with a passion for ETL and building data pipelines. Adept at individual work and collaborating with teams to create maintainable, robust, and scalable data engines.",
  skills: {
    languages: [
      "PYTHON",
      "SQL",
      "NOSQL",
      "JAVASCRIPT",
      "HTML",
      "CSS",
      "TERRAFORM",
    ],
    frameworks: ["PYRAMID", "DJANGO", "FLASK", "FASTAPI"],
    database: ["MONGODB", "MYSQL", "POSTGRESQL"],
    containerization: ["DOCKER"],
    cloud: ["AWS"],
  },
  experience: [
    {
      title: "SOFTWARE ENGINEER II",
      company: "SPYCLOUD",
      location: "AUSTIN, TX",
      period: "2021-2024",
      achievements: [
        "Terraformed modules that allowed up to 800 small EC2 instances to spin up via ECS for processing complex JSON data",
        "Refactored current workflows to the data ingest portal, reducing clicks from 400 to three",
        "Implemented PagerDuty alerts for data ingestion pipeline",
        "Optimized performance of existing pipelines",
      ],
    },
    {
      title: "SOFTWARE ENGINEER I",
      company: "SPYCLOUD",
      location: "AUSTIN, TX",
      period: "2019-2021",
      achievements: [
        "Created Ansible playbook and Python pipelines for data parsing automation",
        "Developed multi-threaded parser improving team performance by 50%",
        "Managed weekly ingests of 300 million records",
      ],
    },
    {
      title: "MOVIE RECOMMENDER PROJECT",
      company: "PERSONAL",
      location: "AUSTIN, TX",
      period: "EARLY 2019",
      achievements: [
        "Developed deep learning recommender model using item-item collaborative filtering to predict potential movies for a given user",
      ],
    },
  ],
  education: {
    degree: "BS in Biomedical Engineering",
    school: "The University of Texas at Austin",
    year: "2017",
  },
};

export default resumeData;
