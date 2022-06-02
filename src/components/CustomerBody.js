import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NavigationIcon from "@mui/icons-material/Navigation";
import "./CustomerBody.css";

function CustomerBody({ oneContent }) {
	return (
		<div>
			<div className="CustomerBody_phone">
				{oneContent.cellPhone}
				<LocalPhoneIcon />
			</div>
			<div className="CustomerBody_address">
				{oneContent.homeAddress}
				<NavigationIcon />
			</div>
		</div>
	);
}

export default CustomerBody;
