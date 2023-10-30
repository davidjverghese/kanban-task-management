import Column from "./Column";

export default function Grid() {
	return (
		<div className="grid sm:grid-cols-5 gap-4 my-3 mx-5">
			<Column />
			<Column />
			<Column />
			<Column />
			<Column />
		</div>
	);
}
