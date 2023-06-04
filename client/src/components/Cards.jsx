import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";

import noImage from "../assets/noImage.jpg";
import "./components.css";
import { Paginator } from "./Paginator";

export const Cards = () => {
	const dispatch = useDispatch();
	const dogs = useSelector((state) => state.dogs);
	useEffect(() => {
		if (!dogs.length) {
			dispatch(getDogs());
			dispatch(getTemperaments());
		}
		// eslint-disable-next-line
	}, [dispatch]);

	//!   Paginado----------------------------------------------------------

	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line
	const [dogsPerPage, setDogsPerPage] = useState(8);
	const indexOfLastDog = currentPage * dogsPerPage;
	const indexOfFirstDog = indexOfLastDog - dogsPerPage;
	const currentDog = dogs.slice(indexOfFirstDog, indexOfLastDog);

	const paginator = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	//!---------------------------------------------------------------------
	return (
		<div className="card-dog-container">
			{currentDog &&
				currentDog.map((dog) => (
					<Link key={dog.id} to={`/description/${dog.id}`} className="links">
						<Card
							title={dog.name}
							subTitle={dog.temperament?.join(", ")}
							header={
								<img
									className="card-img"
									alt={dog.name}
									src={dog.img || noImage}
								/>
							}
							className="card-dog"
						>
							<p className="m-0">
								Weight: {dog.minWeight} - {dog.maxWeight} kg
							</p>
						</Card>
					</Link>
				))}
			<Paginator
				dogs={dogs.length}
				dogsPerPage={dogsPerPage}
				paginator={paginator}
			/>
		</div>
	);
};
