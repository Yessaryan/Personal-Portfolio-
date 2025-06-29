const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.instagram.com/bayyharbourbutcherr/',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aryan Sawant',
  role: 'Computer Science Student',
  description:
    'I am a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. I am passionate about coding, software development, and exploring the latest advancements in AI and ML. With a strong curiosity to learn and build, I enjoy working on innovative tech projects and improving my skills in creating intelligent systems and models.',
  resume: 'https://drive.google.com/your-resume-link',
  social: {
    linkedin: 'https://www.linkedin.com/in/aryan-sawant-a40544226/',
    github: 'https://github.com/yessaryan',
  },
}

const projects = [
  {
    name: 'LinkLens',
    description:
      'A real-time phishing detection tool built with Python, OpenCV, and Streamlit. Features include suspicious link analysis, legitimacy scoring, user-friendly interface, and instant reports to help users identify and avoid fraud before visiting any URL..',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    sourceCode: 'https://github.com/aryansharma/ecommerce-platform',
    livePreview: 'https://ecommerce-demo.vercel.app',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'MongoDB',
  'Git & GitHub',
  'RESTful APIs',
  'Material-UI',
  'Tailwind CSS',
  'Redux',
  'Next.js',
  'Docker',
  'AWS',
  'CI/CD',
  'React Testing Library',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'workaryanworkk@email.com',
}

export { header, about, projects, skills, contact }
