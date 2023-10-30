import Cell from "./Cell";

export default function Column() {
	return (
		<div className="mt-4 mx-3">
			<div className="grid grid-cols-1 gap4">
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell/>
			</div>
		</div>
	)
}