const sections = [
	{ title: 'Sobre mí', id: 'about' },
	{ title: 'Habilidades', id: 'skills' },
	{ title: 'Otras Habilidades', id: 'other_skills' },
	{ title: 'Experiencia Profesional', id: 'experience' },
]

const skills = [
	'HTML',
	'CSS | SASS | Tailwind',
	'Javascript | Typescript',
	'React.js',
	'Next.js',
	'Node.js',
	'Express',
	'Redux',
	'C#',
	'.NET',
	'Python',
	'GIT | Github | Gitlab',
	'Docker',
	'MySQL',
	'MongoDb',
	'RabbitMQ',
]

const otherSkills = ['Testing', 'Web Scraping', 'Linux', 'CI/CD', 'Inglés Avanzado(C1)', 'Scrum', 'Kanban']

const profesionalExperience = {
	title: 'EAX Technology',
	position: 'Desarrollador Full-Stack',
	location: 'Buenos Aires, Argentina',
	date: '03.2023-10.2023',
	projects: [
		{
			projectTitle: 'Microservicio de tesoreria',
			description:
				'Microservicio de tesoreria, responsable de manejar recaudaciones, pagos, flujos de caja y contabilidad para una entidad municipal.',
			items: [
				'Encabezar el desarrollo utilizando Node.js, Express y React.',
				'Implementar exitosamente RabbitMQ para garantizar una comunicación efectiva entre los servicios.',
				'Implementar exitosamente el modelo de API REST para asegurar una distribución eficiente de datos.',
				'Diseñar interfaces visuales para mostrar de manera efectiva información estática.',
			],
		},
		{
			projectTitle: 'Sistema de gestión documental',
			description: 'Migración de un Sistema de Gestión de Documentos originalmente desarrollado en Visual Basic a una Aplicación Web en C#.',
			items: [
				'Contribuir a diseñar la nueva estructura para proporcionar información centralizada a 37 sucursales en todo el país.',
				'Desarrollar una API REST utilizando ASP.NET MVC.',
				'Detectar y resolví errores en los métodos utilizados para recuperar información de la base de datos',
			],
		},
	],
}

const subDivideArray = (arr, divider) => {
	const quantityItemsColums = arr.length % divider != 0 ? parseInt(arr.length / divider) + 1 : arr.length / divider
	const newArray = [...arr]
	const arrayToReturn = []

	while (newArray.length) {
		arrayToReturn.push(newArray.splice(0, quantityItemsColums))
	}

	return arrayToReturn
}

const navbar = document.querySelector('header nav')
const ulSections = document.createElement('ul')
const skillsContainer = document.getElementById('skills_container')
const otherSkillsContainer = document.getElementById('other_skills_container')

const insertDataOnNavbar = () => {
	navbar.appendChild(ulSections)
	sections.forEach(e => {
		const li = document.createElement('li')
		li.innerHTML = `<a href="#${e.id}" class="nav_item">${e.title}</a>`
		ulSections.appendChild(li)
	})
}

const insertDataOnSkillsContainer = () => {
	const skillsColumsArr = subDivideArray(skills, 3)

	skillsColumsArr.forEach(e => {
		const ul = document.createElement('ul')
		ul.className = 'skills_column'

		e.forEach(element => {
			const li = document.createElement('li')
			li.className = 'skill_item'
			li.innerText = element
			ul.appendChild(li)
		})

		skillsContainer.appendChild(ul)
	})
}

const insertDataOnOtherSkillsContainer = () => {
  const otherSkillsColumArr = subDivideArray(otherSkills, 2)

  otherSkillsColumArr.forEach(e => {
    const ul = document.createElement('ul')
    ul.className = 'other_skills_column'

    e.forEach(element => {
      const li = document.createElement('li')
      li.className = 'other_skill_item'
      li.innerText = element
      ul.appendChild(li)
    })

    otherSkillsContainer.appendChild(ul)
  })
}

document.addEventListener('DOMContentLoaded', () => {
	insertDataOnNavbar()
  insertDataOnSkillsContainer()
  insertDataOnOtherSkillsContainer()
})
