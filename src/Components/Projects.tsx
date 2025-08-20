
const Projects = () => {

const projectlist = 
[
 {
        "title": "Religious website",
        "description": "This is the first project in which i created a website by using react and javascript and the design is provided by a figma file.",
        "link": "https://gurudwaras-information-nbpa.vercel.app/",
        "path": "/gurudwara.jpg"
    },
  {
        "title": "Portfolio website",
        "description": "This is the second project in which i created my own porfolio in which i created a well mantianed design and created my own vision and in it i described about my self.",
        "link": "https://jashaportfolio.netlify.app/about" ,
        "path": "/portfolio.png"
    }

];
  return (
    <>
    <section className="projects">
        <h2>My projects</h2>
        <div className="project-card">
          {projectlist.map((p , i) =>(
            <div key={i} className="card">
                <h3>{p.title}</h3>
                <img src={p.path} alt="" className="cardss-img"/>
                <p>{p.description}</p>
                <a href={p.link} >View Project</a>
            </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default Projects