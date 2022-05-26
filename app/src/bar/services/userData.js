export default class userData {

	constructor() {
		this.userID = 'kononovm'
	}

	async getResource(url) {

		const res = await fetch(`users/${this.userID}/${url}`)

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, recevied ${res.status}`)
		}

		return await res.json()

	}

	getUser() {
		return this.getResource('/user/user.json')
	}

	getOpenProject() {
		return this.geUser()
			.then((user) => user.openProject)
	}

	getProjects() {
		return this.getResource('/projects/projects.json')
	}

	getProject() {
		return this.getResource(`/projects/${this.getOpenProject}/project.json`)
	}

}