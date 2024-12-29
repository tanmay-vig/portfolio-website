
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'RESEARCH ENGINE', description: 'Developed an AI Driven research engine for Commercial Courts for helping Judges, Judicial Executives and Lawyers. Built using RAG, Streamlit, Langchain and LLMs like LLama 3.2 and Gemini 1.5 Flash. Groq API is used for fast inference of the SLM.', link: 'https://github.com/tanmay-vig/ai-driven-research-engine' },
  {id : 9, title: "Next Word Prediction", description : "The Next Word Prediction App is a Streamlit-based application that uses an LSTM model to predict the next word in a sequence of words. This project uses Shakespeare's Hamlet text for training and demonstrates the power of deep learning in natural language processing (NLP).", link : "https://github.com/tanmay-vig/next-word-prediction" },
  { id: 2, title: 'Churn Lens', description: 'Developed a churn prediction model for European banks using TensorFlow and ANN, achieving 90% accuracy on 10,000+ customer records. Built an interactive Streamlit dashboard, enhancing customer retention and improving decision-making efficiency by 20%.', link: 'https://github.com/tanmay-vig/customer-churn-prediction' },
  { id: 5, title: 'Multilingual Invoice Extractor', description: 'The Multilingual Invoice project, developed with Gemini and Streamlit, supports over 100 languages and processes all document types. It ensures efficient, scalable invoice management with multilingual compatibility and diverse format handling.', link: 'https://github.com/tanmay-vig/multi-language-invoice-extractor' },
  { id: 6, title: 'RAMSA 2024', description: 'Developed a Website on Recent 7th International Conference on Recent Advances in Mathematical Sciences and its Applications (RAMSA - 2024) for Department of Mathematics,Jaypee Institute of Information Technology (JIIT Noida, U.P.).', link: 'https://ramsa.netlify.app/' },
  {id: 8 , title: 'Crypto Hunter', description: 'Developed a cryptocurrency tracking website using the Coingecko API, monitoring prices in INR and USDT across 100+ currencies. Integrated Chart.js to display real-time trends, enhancing user insights and decision-making.' , link: 'https://github.com/tanmay-vig/react-crypto-tracker'},
  {id : 7 ,title: 'Community Detection and Recommendation' , description: 'Analyzed the Facebook Snap Dataset to identify communities and top influencing nodes, enhancing network insights. Predicted friends and content with high accuracy, supporting targeted engagement strategies.', link: 'https://github.com/tanmay-vig/Community-Detection-and-Recommendation'},
  { id: 3, title: 'Smart ATS', description: 'Developed an ATS software using Gemini and Streamlit, enabling seamless resume parsing and scoring with 95% accuracy. Provided detailed insights to improve hiring efficiency and streamline recruitment processes.', link: 'https://github.com/tanmay-vig/ats-tracking-system' },
  { id: 4, title: 'Mediater', description: 'Designed and deployed a responsive landing site for Mediater using React, Framer, and Bootstrap, ensuring seamless user experience. Implemented interactive animations and modern layouts, boosting engagement and usability by 30%.', link: 'https://mediater.netlify.app/' },
];

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 col-sm-6 mb-4">
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;