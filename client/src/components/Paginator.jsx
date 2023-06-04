import React from "react";
import "./components.css";
import { Button } from "primereact/button";

export const Paginator = ({ dogs, dogsPerPage, paginator }) => {
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(dogs / dogsPerPage) + 1; i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className="containerPaginado">
			<ul>
				{pageNumbers &&
					pageNumbers.map((number) => (
						<li key={number}>
							<Button
								label={number}
								style={{
									width: "40px",
									justifyContent: "center",
									border: "1px solid black",
									marginBottom: "30px",
								}}
								onClick={() => paginator(number)}
							/>
						</li>
					))}
			</ul>
		</nav>
	);
};
