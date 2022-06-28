class Project {
  constructor(imgLink, tags = [], title, descr, demoLink, repoLink) {
    this.imgLink = imgLink
    this.tags = this.formatTags(tags)
    this.title = title
    this.descr = descr
    this.demoLink = demoLink
    this.repoLink = repoLink
  }

  formatTags(tags) {
    const formattedTags = tags.map(tag => tag = '#' + tag)

    return formattedTags
  }
}

function generateProjects(amount) {
  const projectsArr = []

  for (let i = 0; i < amount; i++) {
    projectsArr.push(new Project('1', ['2'], '3', '4', '5', '6'))
  }

  return projectsArr
}