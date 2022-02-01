import React from "react";

const VideoSection = () => {
	return (
		<div className="video-section container">
			<div className="left">
				<h3>
					We provide a stream of potential fundraising opportunities between startups and investors that are
					curated based on our <span className="text-color-primary">intelligent matching algorithm</span>
				</h3>
			</div>
			<div className="right">
				<video
					src={require("./../../assets/videos/Capless_intro.mp4")}
					controls="controls"
					poster={require("./../../assets/videos/Capless_intro.png")}
				/>
			</div>
		</div>
	);
};

export default VideoSection;
