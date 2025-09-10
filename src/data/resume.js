// src/data/resume.js
export const resumeData = {
  personalInfo: {
    name: "Pablo A. Maceda",
    phone: "(281) 750-2521",
    email: "pmaceda@icloud.com",
    location: "Katy, TX, 77494",
    social: {
      github: "pablomaceda3",
      linkedin: "pablomaceda3",
      soundcloud: "pablo-a-maceda"
    }
  },
  summary:
    "Data, Cellular, and Tissue Engineer with 6+ years of experience specializing in ETL pipeline development and cloud infrastructure. Demonstrated expertise in optimizing data processing workflows, reducing operational overhead, and scaling distributed systems using AWS, Python, and Terraform. Also skilled at ELISA and flow cytometry techniques.",
  skills: {
    languages: ["Python", "SQL", "JavaScript", "Bash"],
    cloudInfra: ["AWS", "Terraform", "Docker", "Ansible"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    frameworks: ["Pyramid", "Django", "Flask", "FastAPI"],
    tools: ["Git", "PagerDuty"],
    dataTools: ["Airflow", "dbt", "Spark", "Pandas"],
    science: ["Cell Culture", "ELISA", "Flow Cytometry", "Microscopy"]
  },
  experience: [
    {
      title: "SOFTWARE ENGINEER II",
      company: "CHARTER COMMUNICATIONS",
      location: "AUSTIN, TX",
      period: "2025-PRESENT",
      achievements: [
        "Optimized and maintained a Flask-based API handling an average of XXX requests per second, enhancing performance and scalability by implementing targeted refactors and resolving critical bugs",
        "Mentored junior software engineer new to tech industry, strengthening team cohesion and accelerating velocity of the team",
        "Delivered high value tickets immediately upon onboarding, generating $100,000 in business impact in just two months",
      ]
    },
    {
      title: "GAP YEAR",
      company: "PERSONAL DEVELOPMENT",
      location: "GEORGETOWN, TX",
      period: "2024-2025",
      achievements: [
        "Dedicated time to personal growth and skill enhancement, focusing on advanced data engineering concepts and cloud technologies",
        "Completed several online courses and certifications to stay updated with industry trends and best practices",
        "Engaged in freelance projects to apply new skills in real-world scenarios, contributing to open-source initiatives and community-driven tech solutions"
      ],
    },
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
    {
      title: "RESEARCH ASSISTANT",
      company: "MOLECULAR TEMPLATES",
      location: "AUSTIN, TX",
      period: "2018-2019",
      achievements: [
          "Cultured cancer cells for ELISA processing, at times handling up to 20 cell lines at once",
          "Automated part of our processes with Google Sheets macros and ELISA robots",
          "Performed in-depth analysis using proprietary tooling, delivering results to management in a timely fashion",
          "Participated in learning sessions with senior scientists, deepening my knowledge of cancer as an illness",
          "Performed dozens of ELISAs and flow cytometry experiments with high accuracy and attention to detail"
        ]
    },
    {
      title: "UNDERGRADUATE RESEARCHER",
      company: "THE UNIVERSITY OF TEXAS AT AUSTIN, BAKER LAB FOR CARDIOVASCULAR THERAPEUTICS",
      location: "AUSTIN, TX",
      period: "2014-2017",
      achievements: [
        "Cultured stem cells for research purposes, namely mechanical stressing of the cells to examine differentiation capabilities",
        "Built and maintained plates and pistons used for micro-stressing of cells",
        "Asked good questions and got great responses",
        "Presented findings at university symposiums and conferences",
        {
          text: "Published by Nature in 2020 (DOI: 10.1038/s41598-020-72158-5)",
          url: "https://www.nature.com/articles/s41598-020-72158-5#citeas"
        }
      ],
    },
    ],
  education: [{
    degree: "BS in Biomedical Engineering",
    school: "The University of Texas at Austin",
    year: "2017",
  },
  {
    degree: "Data Analytics Bootcamp",
    school: "The University of Texas at Austin",
    year: "2019",
  },
  {
    degree: "Designing Data-Intensive Applications",
    school: "Home",
    year: "2025"
  }],
  certifications: [
    {
      name: "dbt Fundamentals Certificate",
      school: "dbt Labs",
      year: "2025"
    }],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Native" },
  ],
  interests: [
    "Music Production",
    "Traveling",
    "Hiking",
    "Gaming",
    "Cooking",
    "Reading",
    "Tech Blogging"
  ]
};

export default resumeData;
