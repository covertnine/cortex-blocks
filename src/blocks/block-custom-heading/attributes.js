const attributes = {
	heading: {
		type: "string",
		default: "sample head"
	},
	subheading: {
		type: "string",
		default: "sample subhead"
	},
	addSubheading: {
		type: "boolean",
		default: false
	},
	wrapper: {
		type: "array",
		source: "query",
		selector: ".section-heading",
		query: {
			class: {
				type: "string",
				source: "attribute",
				attribute: "class"
			}
		}
	},
	tagLevel: {
		type: "int",
		default: 1
	},
	displayLevel: {
		type: "string",
		default: ""
	},
	type: {
		type: "string",
		default: "h"
	},
	backgroundColor: {
		type: "string"
	},
	textColor: {
		type: "string"
	},
	textAlign: {
		type: "string",
		default: "left"
	},
	weight: {
		type: "string"
	},
	overrideStyle: {
		type: "boolean",
		default: false
	}
};

export default attributes;
