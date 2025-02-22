declare module "textfit" {
	interface TextFitOptions {
		alignHoriz?: boolean;
		alignVert?: boolean;
		multiLine?: boolean;
		detectMultiLine?: boolean;
		minFontSize?: number;
		maxFontSize?: number;
		reProcess?: boolean;
		widthOnly?: boolean;
		alignVertWithFlexbox?: boolean;
	}

	function textFit(
		el: HTMLElement | HTMLElement[],
		options?: TextFitOptions
	): void;

	export default textFit;
}
