export default {
  filteredSkills: state => (skillArr) => state.about.skills.items.filter(skill => skillArr.indexOf(skill.name) > -1)
}