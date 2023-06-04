import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./components.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { getBreedByName } from "../redux/actions/actions";

export const NavBar = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const handleInputChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getBreedByName(value));
		setValue("");
	};

	return (
		<nav className="navbar">
			<div>
				<img
					className="img-logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hMDyQlCY_1XaZ7t8lfwjKskt6J3_CTX08g&usqp=CAU"
					alt=""
				/>
			</div>
			<div className="search-create">
				<Link to="/create">
					<Button
						icon="pi pi-plus"
						label="Create"
						style={{ width: "100px" }}
						outlined
					/>
				</Link>
				<div>
					<form onSubmit={handleSubmit}>
						<InputText
							placeholder="Search a breed"
							name="search"
							value={value}
							onChange={handleInputChange}
						/>
					</form>
				</div>
			</div>
		</nav>
	);
};
