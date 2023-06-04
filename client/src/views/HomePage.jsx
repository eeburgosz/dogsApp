import React from "react";
import { Cards } from "../components";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

export const HomePage = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(getDogs());
	};
	return (
		<div className="home-container">
			<div className="filters-container">
				<Link to="/home" className="links">
					<Button
						label="All Dogs"
						style={{ width: "120px", marginTop: "100px" }}
						onClick={handleClick}
					/>
				</Link>
			</div>
			<div className="body-container">
				<div className="cards-container">
					<div className="card flex justify-content-center">
						<Cards />
					</div>
				</div>
			</div>
		</div>
	);
};
