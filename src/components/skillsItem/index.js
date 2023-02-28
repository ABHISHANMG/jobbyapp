import './index.css'

const SkillsItem = props => {
  const {eachSkills} = props
  const {name, imageUrl} = eachSkills
  return (
    <li className="skills-list-container">
      <img src={imageUrl} alt={name} className="skills-image-size" />
      <p>{name}</p>
    </li>
  )
}

export default SkillsItem
