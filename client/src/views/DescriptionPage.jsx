import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import noImage from "../assets/noImage.jpg";
import "./views.css";
import { getDogs } from "../redux/actions/actions";
export const DescriptionPage = () => {
	const dispatch = useDispatch();

	const { id } = useParams();
	const dogs = useSelector((state) => state.dogs);
	useEffect(() => {
		if (!dogs.length) dispatch(getDogs());
		// eslint-disable-next-line
	}, [dispatch]);
	const dogById = dogs.find((dogs) => dogs.id.toString() === id.toString());

	return (
		<>
			<Link to="/home" className="links">
				<Button
					icon="pi pi-arrow-left"
					label="Go back"
					style={{ width: "120px", marginTop: "100px" }}
				/>
			</Link>
			<div className="detail-container">
				<Card
					title={dogById?.name}
					subTitle={dogById?.temperament.join(", ")}
					header={
						<img
							className="card-img"
							alt={dogById?.name}
							src={dogById?.img || noImage}
						/>
					}
					className="card-dog"
				></Card>
				<div className="description">
					<div className="description-header">
						<div>
							<label>Height</label>
							<p>
								{dogById?.minHeight} - {dogById?.maxHeight} cm
							</p>
						</div>
						<div>
							<label>Weight</label>
							<p>
								{dogById?.minWeight} - {dogById?.maxWeight} kg
							</p>
						</div>
						<div>
							<label>Life span</label>
							<p>
								{dogById?.life_span} {dogById?.life_span[1] ? null : " years"}
							</p>
						</div>
					</div>
					<div className="card">
						<Fieldset legend="Description">
							<p className="m-0">
								{dogById?.description || "No information provided."}
							</p>
						</Fieldset>
					</div>
				</div>
			</div>
		</>
	);
};
