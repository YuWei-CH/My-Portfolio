/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuwei Sun",
  title: "Hi, I'm Yuwei Sun",
  subTitle: emoji(
    "Cloud Infrastructure Enthusiast | HPC Researcher | Software Engineering Intern 🚀 Exploring distributed systems, high-performance computing, and AI infrastructure."
  ),
  resumeLink: "/resume.pdf", // Link to your resume PDF file
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yuweisun", // Replace with your GitHub profile URL
  linkedin: "https://linkedin.com/in/yuweisun", // Replace with your LinkedIn profile URL
  gmail: "yuweisun@example.com", // Replace with your email address
  leetcode: "https://leetcode.com/yuweisun/", // Replace with your LeetCode profile URL (optional)
  // twitter: "https://twitter.com/yourusername", // Replace with your Twitter profile URL (optional)
  // Instagram, Facebook, Gitlab, Stackoverflow, Kaggle, Medium are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING SCALABLE CLOUD SOLUTIONS & OPTIMIZING HIGH-PERFORMANCE SYSTEMS",
  skills: [
    emoji(
      "⚡ Develop and deploy robust cloud-native applications using Kubernetes and AWS."
    ),
    emoji(
      "⚡ Design and implement efficient algorithms for high-performance computing environments."
    ),
    emoji(
      "⚡ Research and optimize AI/ML system performance on distributed infrastructure."
    )
  ],

  /* Make Sure to include correct devicon Classname from https://devicon.dev/ to view your icon */
  /* Some common examples: https://github.com/devicons/devicon/tree/master/icons */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "devicon-go-original-wordmark" // Or "devicon-go-plain"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "devicon-amazonwebservices-original-wordmark" // Or "devicon-amazonwebservices-plain"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "devicon-kubernetes-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "devicon-linux-plain"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "SQL", // Generic SQL, or use specific like "devicon-postgresql-plain"
      fontAwesomeClassname: "devicon-azuresqldatabase-plain" // Using Azure SQL icon as a placeholder
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "MPI", // No direct Devicon, consider a generic or related icon if needed
      fontAwesomeClassname: "fas fa-network-wired" // Using FontAwesome as fallback
    },
    {
      skillName: "CUDA", // No direct Devicon
      fontAwesomeClassname: "fas fa-microchip" // Using FontAwesome as fallback
    }
    // Add more skills as needed
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Example", // Replace with your University
      logo: require("./assets/images/harvardLogo.png"), // Replace with your school logo
      subHeader: "Master of Science in Computer Science", // Replace with your degree
      duration: "September 2022 - May 2024", // Replace with your duration
      grade: "GPA: 3.9/4.0", // Optional: Add GPA
      desc: "Specialized in Distributed Systems and AI Infrastructure. Thesis on optimizing resource allocation in Kubernetes clusters.", // Replace with relevant details
      descBullets: [
        "Relevant Coursework: Advanced Operating Systems, Cloud Computing, Distributed Algorithms, Machine Learning Systems.", // Add relevant courses
        "Awarded University Merit Scholarship." // Add any awards/honors
      ]
    },
    {
      schoolName: "Another University", // Replace with your Undergraduate University
      logo: require("./assets/images/stanfordLogo.png"), // Replace with your school logo
      subHeader: "Bachelor of Science in Computer Engineering", // Replace with your degree
      duration: "September 2018 - May 2022", // Replace with your duration
      grade: "GPA: 3.8/4.0, Magna Cum Laude", // Optional: Add GPA/Honors
      desc: "Focused on computer architecture and software development. Senior project involved building a parallel processing simulator.", // Replace with relevant details
      descBullets: [
        "Minor in Mathematics.", // Add minors or concentrations
        "Dean's List for 6 semesters." // Add any awards/honors
      ]
    }
    // Add more education entries if needed
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & Distributed Systems", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "High-Performance Computing",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Example Cloud Provider (e.g., AWS, Google Cloud)", // Replace with company name
      companylogo: require("./assets/images/googleCloudLogo.png"), // Replace with company logo
      date: "May 2023 – August 2023", // Replace with dates
      desc: "Developed and optimized microservices for a large-scale distributed storage system.",
      descBullets: [
        "Improved API latency by 20% through performance tuning and caching strategies.",
        "Implemented automated testing framework, increasing code coverage by 15%.",
        "Collaborated with team members using Agile methodologies and Git workflow."
      ]
    },
    {
      role: "Research Assistant, HPC Lab",
      company: "University of Example", // Replace with University/Lab name
      companylogo: require("./assets/images/harvardLogo.png"), // Replace with logo
      date: "January 2023 – May 2023", // Replace with dates
      desc: "Researched performance optimization techniques for parallel scientific applications.",
      descBullets: [
        "Profiled and optimized MPI communication patterns, reducing execution time by 25% for specific benchmarks.",
        "Experimented with GPU acceleration using CUDA for computational fluid dynamics simulations.",
        "Contributed to a research paper submitted to an HPC conference."
      ]
    },
    {
      role: "Teaching Assistant, Operating Systems",
      company: "University of Example", // Replace with University name
      companylogo: require("./assets/images/harvardLogo.png"), // Replace with logo
      date: "September 2022 – December 2022", // Replace with dates
      desc: "Assisted professor in teaching undergraduate Operating Systems course.",
      descBullets: [
        "Led weekly lab sessions on topics like process scheduling, memory management, and concurrency.",
        "Graded assignments and provided feedback to over 50 students.",
        "Held office hours to help students with course concepts and programming assignments."
      ]
    }
    // Add more experiences if needed
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY KEY PROJECTS",
  projects: [
    {
      image: require("./assets/images/kubernetesProject.png"), // Replace with relevant project image
      projectName: "Kubernetes Autoscaler Plugin",
      projectDesc: "Developed a custom Horizontal Pod Autoscaler (HPA) metric plugin for Kubernetes, enabling scaling based on application-specific queue length.",
      techStack: ["Go", "Kubernetes", "Prometheus", "Docker"], // Add tech stack
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/kube-autoscaler-plugin" // Replace with project GitHub link
        }
        // {
        //   name: "Demo",
        //   url: "http://example.com/" // Optional: Add demo link
        // }
      ]
    },
    {
      image: require("./assets/images/hpcProject.png"), // Replace with relevant project image
      projectName: "Parallel N-Body Simulation",
      projectDesc: "Implemented an N-body simulation using MPI and C++ to model gravitational interactions, optimized for performance on a multi-node cluster.",
      techStack: ["C++", "MPI", "OpenMP", "Linux"], // Add tech stack
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/parallel-nbody" // Replace with project GitHub link
        }
      ]
    },
    {
      image: require("./assets/images/cloudWebApp.png"), // Replace with relevant project image
      projectName: "Cloud-Based Data Processing Pipeline",
      projectDesc: "Designed and built a serverless data processing pipeline on AWS using Lambda, SQS, and S3 for analyzing real-time streaming data.",
      techStack: ["Python", "AWS Lambda", "AWS SQS", "AWS S3", "Terraform"], // Add tech stack
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/aws-data-pipeline" // Replace with project GitHub link
        }
      ]
    }
    // Add 1-2 more projects if desired
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Recognitions, Awards, and Certifications Highlighting My Technical Contributions and Skills.",

  achievementsCards: [
    {
      title: "6th Place Globally – SC23 Student Cluster Competition",
      subtitle:
        "Represented University of Example, optimized HPCG and HPL benchmarks using NUMA-aware scheduling, AVX512 intrinsics, and MPI tuning.",
      image: require("./assets/images/scCompetitionLogo.png"), // Replace with relevant logo/image
      imageAlt: "SC23 Student Cluster Competition Logo",
      footerLink: [
        {
          name: "Competition Details",
          url: "https://sc23.supercomputing.org/program/studentssc/student-cluster-competition/" // Replace with relevant link
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "Validated technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      image: require("./assets/images/awsCertifiedLogo.png"), // Replace with relevant logo/image
      imageAlt: "AWS Certified Solutions Architect Associate Badge",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://www.credly.com/your-badge-link" // Replace with verification link if available
        }
      ]
    },
    {
      title: "University Merit Scholarship",
      subtitle:
        "Awarded based on academic excellence upon admission to the Master's program at University of Example.",
      image: require("./assets/images/universityAwardLogo.png"), // Replace with relevant logo/image
      imageAlt: "University Scholarship Award",
      footerLink: [] // Add link if applicable
    }
    // Add more achievements if needed
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blog Section (Optional)

const blogSection = {
  title: "Blogs",
  subtitle: "Sometimes I write about technology, cloud computing, and HPC.",
  // To setup blog section look at the Readme.md file
  display: false, // Set true to display this section, defaults to false
};

// Talks Section (Optional)

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "Sharing knowledge on distributed systems and performance optimization."
  ),

  talks: [
    // {
    //   title: "Optimizing Kubernetes Resource Usage",
    //   subtitle: "Presented at University Tech Meetup",
    //   slides_url: "https://link-to-slides.com",
    //   event_url: "https://link-to-event.com"
    // }
  ],
  display: false // Set true to display this section, defaults to false
};

// Podcast Section (Optional)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing Trends in Cloud and High-Performance Computing",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/yourpodcast/embed/episodes/your-episode-link"
  ],
  display: false // Set false to hide this section, defaults to false
};

// Resume Section (Kept for structure, link is in greeting)
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Info Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating or have questions? Feel free to reach out!",
  number: "+1-123-456-7890", // Replace with your phone number (optional)
  email_address: "yuweisun@example.com" // Replace with your email address
};

// Twitter Section (Optional)

const twitterDetails = {
  userName: "yourusername", //Replace "yourusername" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Footer Hireable status
const isHireable = true; // Set true if you are looking for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection, // Keep even if display: false
  talkSection, // Keep even if display: false
  podcastSection, // Keep even if display: false
  contactInfo,
  twitterDetails, // Keep even if display: false
  isHireable,
  resumeSection // Keep even if display: false
};
