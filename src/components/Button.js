import React from "react";
import "./Button.css";

function Button({ content, onClick }) {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				if (onClick) {
					onClick();
				}
			}}
			className="button"
		>
			{content}
		</button>
	);
}

export default Button;
