import React, { Component } from 'react'

class UserGreeting extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		return (
			<div>
				<div>Welcome Aaron</div>
				<div>Welcome Guest</div>
			</div>
		)
	}
}

export default UserGreeting