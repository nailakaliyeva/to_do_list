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

								e.target.value = "";
							}
						}}
					/>
					{this.state.myArray.map((item, index) => {
						return (
							<li
								key={index}
								className="col-6 list-group-item mx-auto d-flex justify-content-between">
								{item}
								<i
									className="fas fa-times"
									onClick={() => {
										this.setState({
											array: this.state.myArray.splice(
												index,
												1
												//also it's a good practice to do it this way:
												//let x = this.state.myArray
												//x.splice(index, 1)
												//this.setState({myArray: x})
											)
										});
									}}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
