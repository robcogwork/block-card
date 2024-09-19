import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { TextControl, PanelBody } from "@wordpress/components";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleDescription = () => setIsOpen(!isOpen);

	return (
		<div {...useBlockProps()} className="custom-card">
			<InspectorControls>
				<PanelBody title={__("Card Settings", "cw-block-card")}>
					<TextControl
						label={__("Name", "cw-block-card")}
						value={attributes.name}
						onChange={(value) => setAttributes({ name: value })}
					/>
					<TextControl
						label={__("Job Title", "cw-block-card")}
						value={attributes.jobTitle}
						onChange={(value) => setAttributes({ jobTitle: value })}
					/>
					<TextControl
						label={__("Email", "cw-block-card")}
						value={attributes.email}
						onChange={(value) => setAttributes({ email: value })}
					/>
					<TextControl
						label={__("Phone", "cw-block-card")}
						value={attributes.phone}
						onChange={(value) => setAttributes({ phone: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="card-content">
				<div className="card-header">
					<h3>{attributes.name}</h3>
					<p className="job-title">{attributes.jobTitle}</p>
				</div>
				<p className="email">{attributes.email}</p>
				<p className="phone">{attributes.phone}</p>
				<details open={isOpen} onToggle={toggleDescription}>
					<summary>{__("Description", "cw-block-card")}</summary>
					<RichText
						tagName="div"
						value={attributes.description}
						onChange={(value) => setAttributes({ description: value })}
						placeholder={__("Add a description here...", "cw-block-card")}
					/>
				</details>
			</div>
		</div>
	);
};

export default Edit;
