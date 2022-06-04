import React from "react";
import './Checkbox.css'

function Checkbox({
	setIsToggled,
	isToggled,
}) {
	return (
		<label className="switch" htmlFor="isPendingCheckbox">
			<input
				type="checkbox"
				id="isPendingCheckbox"
				onClick={() => setIsToggled(!isToggled)}
			/>
			<span className="slider round"></span>
		</label>
	);
}

export default Checkbox;
