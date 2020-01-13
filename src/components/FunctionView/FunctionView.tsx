//? Core
import React, { FunctionComponent, useRef, useEffect } from 'react';
import { tween } from 'popmotion';

interface Properties {
	input: EaseFunction;
}

const FunctionView: FunctionComponent<Properties> = ({ input }) => {
	const canvasRef = useRef<HTMLCanvasElement>();
	const canvasSize = 200;
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 170, 0);
		gradient.addColorStop(0, '#159957');
		gradient.addColorStop(1, '#155799');
		ctx.strokeStyle = gradient;
		ctx.lineWidth = 3;
		const draw = () => {
			tween({ from: 0, to: canvasSize, duration: 1500 }).start({
				update: (value: number) => {
					ctx.clearRect(0, 0, canvasSize, canvasSize);
					ctx.beginPath();
					ctx.moveTo(0, canvasSize);
					for (let i = 0; i <= value; i++) {
						ctx.lineTo(i, canvasSize - (input.fn(i / canvasSize) * canvasSize));
					}
					ctx.stroke();
					ctx.closePath();
				}
			});
		};
		draw();
		canvas.addEventListener('click', draw);
		return () => canvas.removeEventListener('click', draw);
		// eslint-disable-next-line
	}, []);
	return (
		<div className="fnView">
			<canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
			<h3>{input.name}</h3>
			<code>{input.code}</code>
		</div>
	);
};

export default FunctionView;
