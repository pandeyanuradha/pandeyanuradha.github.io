export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  // twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Anuradha Pandey",
  title: "Pre-doctoral Research Fellow",
  institution: "Microsoft Research India",
  // Note that links work in the description
  description:
    `Heya! I am Anuradha, a Pre-doctoral Research Fellow at Microsoft Research India (MSR) in the <a href="https://www.microsoft.com/en-us/research/theme/systems/?msockid=323424450cd16b243d60324a0d7c6a56" target="_blank" rel="noopener noreferrer">Systems Group</a>, where I work with Dr. Ramachandran Ramjee and Dr. Sanjeev Krishnan. My research focuses on developing new architectures and algorithms to improve the efficiency of LLM inference. Before MSR, I worked in the Data Science team at Salesforce, where I contributed to the launch of <a href="https://www.salesforce.com/data/what-is-data-cloud/" target="_blank" rel="noopener noreferrer">Data Cloud</a>, a platform for analyzing customer data at scale.<br><br>A little earlier (what feels like ages ago now!), I graduated from Birla Institute of Technology and Science (BITS Pilani) with a Major in Computer Science Engineering and a Minor in Data Science in 2023. During my undergrad, I interned at Apple, Google Summer of Code, and the Indian School of Business (ISB). You can read more about these in the <a href="/work-experience">Work Experience</a> section.<br><br>Outside of work, I am a fitness freak and I enjoy hitting the gym or going for long runs. I also love to travel, try different cuisines and cook! (Some fun pictures <a href="/personal">here</a> :))`,
  email: "anuradhapandey.work@gmail.com",
  imageUrl: "/images/profile.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=cXFVVgoAAAAJ",
  githubUsername: "pandeyanuradha",
  linkedinUsername: "anuradha-pandey",
  // twitterUsername: "janesmith",
  blogUrl: "https://medium.com/@anuradha.pandey",
  // cvUrl: "/cv",
  institutionUrl: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/",
  funDescription: `"She believed she could, so she did."
― R.S. Grey`,
  // secretDescription: "I like dogs.",
};
