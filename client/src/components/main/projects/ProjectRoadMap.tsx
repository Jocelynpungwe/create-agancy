import { useState, useEffect } from 'react'
import { projects } from '../../../utils/links'
import { useAppSelector } from '../../../utils/hooks/hooks'

const ProjectRoadMap = () => {
  const { projectNum } = useAppSelector((store) => store.toggle)
  const [num, setNum] = useState<number>(0)
  useEffect(() => {
    setNum(projectNum)
  }, [projectNum])

  return (
    <div className="section-project-article-bg">
      <img
        src={projects[num].srcImg}
        alt="projects"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <div className="section-project-arcticle-bg-div">
        <h3>{projects[num].heading}</h3>
        <p>{projects[num].desc}</p>
      </div>
    </div>
  )
}

export default ProjectRoadMap
