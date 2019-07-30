import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			myArray: []
		};
	}
	render() {
		return (
			<div>
				<ul className="list-group">
					<input
						className="col-6 mx-auto mt-5"
						onKeyPress={e => {
							if (e.key === "Enter") {
								this.setState({
									myArray: this.state.myArray.concat(
										e.target.value
									)
								});
							}
						}}
					/>
					{this.state.myArray.map((item, index) => {
						return (
							<li
								key={index}
								className="col-6 list-group-item mx-auto">
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
