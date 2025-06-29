import './WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      date: 'May24-June24',
      role: 'SDE Intern',
      company: 'CircoLife',
      description: 'I collaborated with the backend team to analyze data and assist in building an internal dashboard that visualized key metrics for better decision-making. I also contributed to developing a module specifically designed to help the crew understand and navigate the application more effectively. In addition to software tasks, I was involved in the hardware setup and integration, which gave me a well-rounded experience in both software and hardware aspects'
    }
  ]

  return (
    <section className='section work-experience' id='work-experience'>
      <h2 className='section__title'>Work Experience</h2>
      <div className='work-experience__timeline'>
        {experiences.map((item) => (
          <div key={item.id} className='work-experience__item'>
            <div className='work-experience__date'>{item.date}</div>
            <div className='work-experience__content'>
              <h3 className='work-experience__role'>{item.role}</h3>
              <p className='work-experience__company'>
                <a href='https://www.circolife.com/' target='_blank' rel='noopener noreferrer'>
                  {item.company}
                </a>
              </p>
              {item.description && <p className='work-experience__description'>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience 