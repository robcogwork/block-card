import { RichText } from "@wordpress/block-editor";

const Save = (props) => {
	const { attributes } = props;

	return (
		<div className="custom-card">
			<div className="card-content">
				<div className="card-header">
					<h3>{attributes.name}</h3>
					<p className="job-title">{attributes.jobTitle}</p>
				</div>
				<p className="email">{attributes.email}</p>
				<p className="phone">{attributes.phone}</p>
				<div className="description">{attributes.description}</div>
			</div>
		</div>
	);
};

export default Save;
