import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
// import { InputNumber } from "primereact/inputnumber";
import { MultiSelect } from "primereact/multiselect";
import "./views.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getDogs, getTemperaments } from "../redux/actions/actions";
import {
	validateDescription,
	validateHeight,
	validateName,
	validateWeight,
} from "../utils/formValidations";

export const CreatePage = () => {
	const dispatch = useDispatch();
	const temps = useSelector((state) => state.temperaments);
	useEffect(() => {
		if (!temps.length) dispatch(getTemperaments());
		//eslint-disable-next-line
	}, [dispatch]);

	const [create, setCreate] = useState({
		name: "",
		minHeight: "",
		maxHeight: "",
		minWeight: "",
		maxWeight: "",
		life_span: "",
		temperament: [],
		img: "",
		description: "",
	});

	const resetForm = () => {
		setCreate({
			name: "",
			minHeight: "",
			maxHeight: "",
			minWeight: "",
			maxWeight: "",
			life_span: "",
			temperament: [],
			img: "",
			description: "",
		});
	};

	const onInputChange = (e) => {
		setCreate({
			...create,
			[e.target.name]: e.target.value,
		});
	};

	const { name, minHeight, maxHeight, minWeight, maxWeight, description } =
		create;

	const handleSubmit = (e) => {
		e.preventDefault();

		const nameError = validateName(name);
		if (nameError) {
			alert(nameError);
			return;
		}

		const descriptionError = validateDescription(description);
		if (descriptionError) {
			alert(descriptionError);
			return;
		}

		const heightError = validateHeight(minHeight, maxHeight);
		if (heightError) {
			alert(heightError);
			return;
		}

		const weightError = validateWeight(minWeight, maxWeight);
		if (weightError) {
			alert(weightError);
			return;
		}

		dispatch(createDog(create));
		alert("Dog created successfully");
		resetForm();
	};

	const handleAllDogs = () => {
		dispatch(getDogs());
	};

	return (
		<form
			className="create-container"
			style={{ paddingTop: "80px", paddingBottom: "60px" }}
			onSubmit={handleSubmit}
		>
			<label htmlFor="" className="pb-2">
				Name
			</label>
			<InputText name="name" value={create.name} onChange={onInputChange} />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					className="px-2"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<label htmlFor="" className="p-2">
						Min height
					</label>
					<InputText
						type="number"
						name="minHeight"
						value={create.minHeight}
						onChange={onInputChange}
						min="1"
					/>
				</div>
				<div
					className="px-2"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<label htmlFor="" className="p-2">
						Max height
					</label>
					<InputText
						type="number"
						name="maxHeight"
						value={create.maxHeight}
						onChange={onInputChange}
					/>
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					className="px-2"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<label htmlFor="" className="p-2">
						Min weight
					</label>
					<InputText
						type="number"
						name="minWeight"
						value={create.minWeight}
						onChange={onInputChange}
						min="1"
					/>
				</div>
				<div
					className="px-2"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<label htmlFor="" className="p-2">
						Max weight
					</label>
					<InputText
						type="number"
						name="maxWeight"
						value={create.maxWeight}
						onChange={onInputChange}
					/>
				</div>
			</div>
			<label htmlFor="" className="pb-2 mt-2">
				Life span
			</label>
			<InputText
				type="number"
				name="life_span"
				value={create.life_span}
				onChange={onInputChange}
				min="1"
			/>
			<label htmlFor="" className="pb-2 mt-2">
				Temperaments
			</label>
			<MultiSelect
				name="temperament"
				style={{ maxWidth: "100%" }}
				display="chip"
				placeholder="Select temperaments"
				options={temps?.map((temp, index) => temp)}
				value={create.temperament}
				onChange={onInputChange}
			/>
			<label htmlFor="" className="pb-2 mt-2">
				Image URL
			</label>
			<InputText
				name="img"
				value={create.img}
				onChange={onInputChange}
				style={{ width: "550px" }}
			/>
			<label htmlFor="" className="pb-2 mt-2">
				Description
			</label>
			<InputTextarea
				name="description"
				value={create.description}
				onChange={onInputChange}
				style={{ width: "550px" }}
			/>
			<div
				style={{
					width: "300px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<Button
					type="submit"
					className="mt-4"
					icon="pi pi-check"
					label="Create"
				/>
				<Link to="/home">
					<Button
						onClick={handleAllDogs}
						className="mt-4"
						icon="pi pi-home"
						label="Home"
					/>
				</Link>
			</div>
		</form>
	);
};
