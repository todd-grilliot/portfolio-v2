import React from 'react'
import { skillsObj } from '../../libraries/skillsObj'

const SkillsList = () => {
  return (
    <div>
        skills
        <img src={skillsObj[0].img} alt="empty" />
        <h3>React</h3>
    </div>
  )
}

export default SkillsList