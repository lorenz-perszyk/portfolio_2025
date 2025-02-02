import {
	type CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
	useState,
	RefObject,
} from "react";

export interface ScrollShadowProps {
	children: ReactNode;
	className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
}

export function ScrollShadow(
	props: Readonly<ScrollShadowProps>
): JSX.Element {
	const { children, className = "", style = {}, ref: forwardRef } = props;

	const [scrollTop, setScrollTop] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);



	const onScrollHandler = (event: React.UIEvent<HTMLDivElement>): void => {
		setScrollTop(event.currentTarget.scrollTop);
		setScrollHeight(event.currentTarget.scrollHeight);
		setClientHeight(event.currentTarget.clientHeight);
	};

	const updateScrollState = (): void => {
		if (!wrapperRef.current) return;

		setScrollTop(wrapperRef.current.scrollTop);
		setScrollHeight(wrapperRef.current.scrollHeight);
		setClientHeight(wrapperRef.current.clientHeight);
	};

	useEffect(() => {
		const resetRefSizes = (ref: RefObject<HTMLDivElement>): void => {
			if (!ref.current) return;

			setScrollTop(ref.current.scrollTop);
			setScrollHeight(ref.current.scrollHeight);
			setClientHeight(ref.current.clientHeight);
		};

		resetRefSizes(wrapperRef);
	}, [wrapperRef?.current?.clientHeight, children]);

	useEffect(() => {
		if (!wrapperRef.current) return;

		const observer = new ResizeObserver(() => {
			updateScrollState();
		});

		observer.observe(wrapperRef.current);

		return (): void => {
			observer.disconnect();
		};
	}, []);

	const getVisibleSides = (): { top: boolean; bottom: boolean } => {
		return {
			top: scrollTop > 0,
			bottom: Math.ceil(scrollTop + clientHeight) < scrollHeight,
		};
	};

	return (
		<div
			ref={forwardRef ? forwardRef : wrapperRef}
			style={style}
			className={`min-h-10 relative max-h-full scrollbar-hide overflow-y-auto ${className}`}
			onScroll={onScrollHandler}
		>
			{/* Top shadow */}
			<div
				className={`sticky top-0 -mb-5 w-full transition-opacity duration-150 ease-in ${
					getVisibleSides().top ? "opacity-100" : "opacity-0"
				}`}
			>
				<div>
					<div className="flex justify-center items-start h-0 bg-white dark:bg-default-200"></div>
					<div className="h-5 bg-scroll-shadow-up"></div>
				</div>
			</div>

			{children}

			{/* Bottom shadow */}
			<div
				className={`sticky bottom-0 -mt-5 w-full transition-opacity duration-150 ease-in ${
					getVisibleSides().bottom ? "opacity-100" : "opacity-0"
				}`}
			>
				<div>
					<div className="h-5 bg-scroll-shadow-up rotate-180 "></div>
					<div className="flex justify-center items-end h-0 bg-white dark:bg-default-200"></div>
				</div>
			</div>
		</div>
	);
}

export default ScrollShadow;
