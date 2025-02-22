"use client";

import React, { useEffect, useRef, useState } from "react";
import textFit from "textfit";
import classNames from "classnames";

type TextFitOptions = {
    text: string;
    className?: string;
}

const ScalingText: React.FC<TextFitOptions> = ({ text, className }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const [wrapperSize, setWrapperSize] = useState<{
		width: number;
		height: number;
	}>({ width: 100, height: 20 });

	const fitText = () => {
		if (textRef.current && textRef.current.offsetWidth > 0) {
			textFit(textRef.current, {
				multiLine: true,
				widthOnly: true,
				minFontSize: 12,
				maxFontSize: 100,
			});
		}
	};

	useEffect(() => {
		const updateWrapperSize = () => {
			if (wrapperRef.current && textRef.current) {
				const width = wrapperRef.current.offsetWidth;
				const height = textRef.current.offsetHeight;
				setWrapperSize({ width, height });
			}
		};

		// Initial fit and size update
		updateWrapperSize();

		// Create a ResizeObserver to observe changes to the wrapper size
		const resizeObserver = new ResizeObserver(updateWrapperSize);

		if (wrapperRef.current) {
			resizeObserver.observe(wrapperRef.current);
		}

		// Clean up ResizeObserver on component unmount
		return () => {
			if (wrapperRef.current) {
				resizeObserver.unobserve(wrapperRef.current);
			}
		};
	}, []);

	useEffect(() => {
		// Fit text whenever wrapperSize changes
		fitText();
	}, [wrapperSize]);


	const renderText = (text: string) => {
		const lines = text.split("<br>");
		return lines.map((line, index) => (
			<React.Fragment key={index}>
				{index === 0 ? (
					<span className="pl-[20vw]">{line}</span>
				) : (
					<span>{line}</span>
				)}
				{index < lines.length - 1 && <br />}
			</React.Fragment>
		));
	};

	return (
		<div ref={wrapperRef} className={classNames("w-full", className)}>
			<div
				ref={textRef}
				className="text-nowrap font-thin leading-[1.3]"
				style={{
					width: `${wrapperSize.width}px`,
				}}
			>
				{renderText(text)}
			</div>
		</div>
	);
};

export default ScalingText;
