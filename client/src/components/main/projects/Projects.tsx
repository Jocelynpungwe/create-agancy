import Navigate from './Navigate'
import ProjectRoadMap from './ProjectRoadMap'

const Projects = () => {
  return (
    <section id="projects" className="section-project">
      <article className="section-project-arcticle">
        <ProjectRoadMap />
        <div className="section-project-arcticle-navigation">
          <Navigate />
        </div>
      </article>
    </section>
  )
}

export default Projects
