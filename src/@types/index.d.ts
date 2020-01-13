interface LooseObject<T = any> {
	[key: string]: T;
}

interface EaseFunction {
	name: string;
	fn: (input: number) => number;
}

interface FunctionGroup {
	name: string;
	fns: Array<EaseFunction>;
}
