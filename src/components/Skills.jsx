// src/components/Tools.js
import { motion } from "framer-motion";

import "../styles/Skills.css";

// Images imported
import pic1 from "../assets/c.png";
import pic2 from "../assets/cpp.png";
import pic3 from "../assets/python.jpg";
import pic4 from "../assets/react.png";
import pic5 from "../assets/nodejs.png";
import pic6 from "../assets/expressjs.png";
import pic7 from "../assets/django.png";
import pic8 from "../assets/flask.png";
import pic9 from "../assets/mongodb.png";
import pic10 from "../assets/mysql.png";
import pic11 from "../assets/langchain.png";
import pic12 from "../assets/hugginface.png";
import pic13 from "../assets/streamlit.png";
import pic14 from "../assets/git.png";
import pic15 from "../assets/github.png";
import pic16 from "../assets/gitlab.png";

const tools = [
  { name: 'C', image: pic1 },
  { name: 'C++', image: pic2 },
  { name: 'PYTHON', image: pic3 },
  { name: 'REACT', image: pic4 },
  { name: 'NODEJS', image: pic5 },
  { name: 'EXPRESS', image: pic6 },
  // { name: 'DJANGO', image: pic7 },
  { name: 'FLASK', image: pic8 },
  { name: 'MONGODB', image: pic9 },
  { name: 'MYSQL', image: pic10 },
  { name: 'LANGCHAIN', image: pic11 },
  // { name: 'HUGGINFACE', image: pic12 },
  { name: 'STREAMLIT', image: pic13 },
  { name: 'GIT', image: pic14 },
  { name: 'GITHUB', image: pic15 },
  // { name: 'GITLAB', image: pic16 },
];

function Skills() {
  return (
    

    <section id="tools" className="container py-5">
    <h2 className="text-center my-4">Tools & Technologies</h2>
    <div className="row g-4">
      {tools.map((tool, index) => (
        <div className="col-6 col-sm-4 col-md-3" key={index}>
          <motion.div
            className="card tool-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={tool.image} alt={tool.name} className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title">{tool.name}</h5>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Skills;
