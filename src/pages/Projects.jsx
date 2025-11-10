function Projects() {
  return (
    <div>
      <h1>My Work</h1>
      <p>
        {/* Brief introduction to your work */}
      </p>

      {/* Projects Grid */}
      <div>
        {/* Project items go here - each with media and well-written summary */}
        <section>
          <div>
            {/* Media Section */}
            <div>
              <div>
                {/* Project image/video/graphic goes here */}
                {/* <img src={projectImage} alt="Project" /> */}
                <span>Project Media</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div>
              <h2>
                {/* Project Title */}
              </h2>
              <p>
                {/* Project Type/Category */}
              </p>
              <p>
                {/* Well-written project summary/description */}
              </p>
              <div>
                {/* Technologies/Skills used */}
                <span>
                  {/* Tech/Skill */}
                </span>
              </div>
              <div>
                <a href="#">
                  {/* View Project */}
                </a>
                <a href="#">
                  {/* GitHub/Code */}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Add more project items */}
      </div>
    </div>
  )
}

export default Projects

