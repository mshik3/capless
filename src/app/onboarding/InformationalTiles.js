import React from "react";

const InformationalTiles = ({}) => {
	return (
		<div className="auth-left-wrapper">
			<div className="auth-middle">
				<div className="auth-inner">
					<div className="split-item">
						<div
							className="split-item-content center-content-mobile reveal-from-left"
							data-reveal-container=".split-item">
							<h3 className="mt-0 mb-12">Intelligent dealflow for fundraising</h3>
							<p className="m-0">
								All the heavy work to find the right investor is made easier with Capless' intelligent
								matching.
							</p>
						</div>
					</div>

					<br></br>

					<div className="split-item">
						<div
							className="split-item-content center-content-mobile reveal-from-right"
							data-reveal-container=".split-item">
							<h3 className="mt-0 mb-12">Warmer introductions to relevant investors</h3>
							<p className="m-0">Let Capless give you the warm introduction to the next big deal.</p>
						</div>
					</div>

					<br></br>

					<div className="split-item">
						<div
							className="split-item-content center-content-mobile reveal-from-left"
							data-reveal-container=".split-item">
							<h3 className="mt-0 mb-12">Add another tool to your belt</h3>
							<p className="m-0">
								Rather than spending most of your time fundraising, let Capless provide smart, passive,
								dealflow.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationalTiles;
