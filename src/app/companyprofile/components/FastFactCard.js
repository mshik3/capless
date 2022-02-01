import React from "react";
import classNames from "classnames";

const FastFactCard = ({ classes, header, content }) => {
	return (
		<>
			<div className={classNames(classes)}>
				<h3 className="card-header">{header}</h3>
				<p>{content}</p>
			</div>
		</>
	);
};

export default FastFactCard;
