import jseDashboard from '../assets/JSE Dashboard.png';
import uniTrade from '../assets/UniTrade.png';
import clearFramework from '../assets/CLEAR Framework.jpg';
import huntzaWinner from '../assets/huntza-winner.png';

const projectsData = [
  {
    abbr: 'JSE',
    badge: 'Live demo',
    title: 'JSE & Rand Market Analytics',
    description:
      'A quantitative study of whether the JSE moves inversely to the rand. Across seven years of data the hedge effect proves episodic — near-zero on average, but stark in crises.',
    tech: ['Python', 'pandas', 'Plotly', 'Streamlit'],
    demo: 'https://jse-rand-market-analytics-dashboard-3w8ntex9xejyesphdwaqtm.streamlit.app/',
    github: 'https://github.com/Zelamene/JSE-Rand-Market-Analytics-Dashboard',
    caseStudy: '/projects/jse',
    image: jseDashboard,
  },
  {
    abbr: 'UT',
    title: 'UniTrade',
    description:
      'A peer-to-peer student marketplace with PayFast payments and verified campus identities. Led the 5-person Agile team and owned the system architecture.',
    tech: ['C#/.NET', 'React', 'Azure', 'Docker', 'SQL'],
    github: 'https://github.com/COS301-SE-2026/UniTrade',
    image: uniTrade,
  },
  {
    abbr: 'PLP',
    title: 'Prompt Literacy Project',
    description:
      'An open-source investigation into why some people get better results from AI. Built the CLEAR framework and a three-module curriculum from a survey of 90+ students.',
    tech: ['Research', 'Python', 'AI Literacy', 'Evaluation'],
    github: 'https://github.com/Zelamene/Prompt-Literacy-Project',
    image: clearFramework,
  },
  {
    abbr: 'HZ',
    badge: '1st place',
    title: 'HUNT.ZA Hackathon Validator',
    description:
      'A Python email validator built against an adversarial test suite. Hit 95.05% accuracy for 1st place, surfacing real validation failures on live SA platforms.',
    tech: ['Python', 'Adversarial Testing', 'Security'],
    github: 'https://github.com/Ayush-B99/HuntZA---Validator',
    image: huntzaWinner,
  },
];

export default projectsData;