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
    languages: ["Python", "SQL", "JavaScript", "HTML/CSS"],
    cloudInfra: ["AWS", "Terraform", "Docker", "Ansible"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    frameworks: ["Pyramid", "Django", "Flask", "FastAPI"],
    tools: ["Git", "PagerDuty"]
  },
  experience: [
    {
      title: "SOFTWARE ENGINEER II",
      company: "SPYCLOUD",
      location: "AUSTIN, TX",
      period: "2021-2024",
      achievements: [
        "Architected and implemented Terraform modules managing fleet of 800 EC2 secure instances on AWS ECS, enabling scalable JSON data processing and establishing infrastructure-as-code best practices",
        "Redesigned data ingest portal workflow through iterative development and testing, achieving 99% reduction in operational steps (from 400 to 3) and improving team efficiency",
        "Established comprehensive monitoring system using PagerDuty with automated on-call rotation and custom alerting rules, streamlining incident response workflow",
        "Continued to optimize the performance of existing pipelines, improving pipeline performance by 50%"
      ],
    },
    {
      title: "SOFTWARE ENGINEER I",
      company: "SPYCLOUD",
      location: "AUSTIN, TX",
      period: "2019-2021",
      achievements: [
        "Engineered automated data parsing system using Ansible and Python, processing 300M+ records weekly",
        "Optimized existing pipeline performance by 50% through code profiling and implementing multithreading solutions",
        "Implemented automated testing suite using pytest, ensuring 90%+ code coverage for critical pipeline components",
        "Managed weekly ingests of 300M+ records, debugging complex distributed systems including ElasticSearch and DynamoDB",
        "Participated in agile development processes including daily standups, sprint planning, and retrospectives"
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
