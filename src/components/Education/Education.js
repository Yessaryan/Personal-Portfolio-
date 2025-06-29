import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      year: '2023-2027',
      degree: 'B.Tech in Computer Science',
      institution: 'DY Patil University',
      description: 'Specializing in Artificial Intelligence and Machine Learning'
    }
  ]

  return (
    <section className='section education' id='education'>
      <h2 className='section__title'>Education</h2>
      
      <div className='education__timeline'>
        {education.map((item) => (
          <div key={item.id} className='education__item'>
            <div className='education__year'>{item.year}</div>
            <div className='education__content'>
              <h3 className='education__degree'>{item.degree}</h3>
              <p className='education__institution'>
                <a href='https://dypatil.edu/schools/schools/ramrao-adik-institute-of-technology' target='_blank' rel='noopener noreferrer'>
                  {item.institution}
                </a>
              </p>
              <p className='education__description'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education 