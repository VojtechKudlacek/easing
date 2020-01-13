// tslint:disable:no-parameter-reassignment
export default [{
	name: 'Quad',
	fns: [{
		name: 'EaseInQuad',
		fn: (t) => t * t
	}, {
		name: 'EaseOutQuad',
		fn: (t) => t * (2 - t)
	}, {
		name: 'EaseInOutQuad',
		fn: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
	}]
}, {
	name: 'Cubic',
	fns: [{
		name: 'EaseInCubic',
		fn: (t) => t * t * t
	}, {
		name: 'EaseOutCubic',
		fn: (t) => (--t) * t * t + 1
	}, {
		name: 'EaseInOutCubic',
		fn: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
	}]
}, {
	name: 'Quart',
	fns: [{
		name: 'EaseInQuart',
		fn: (t) => t * t * t * t
	}, {
		name: 'EaseOutQuart',
		fn: (t) => 1 - (--t) * t * t * t
	}, {
		name: 'EaseInOutQuart',
		fn: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
	}]
}, {
	name: 'Quint',
	fns: [{
		name: 'EaseInQuint',
		fn: (t) => t * t * t * t * t
	}, {
		name: 'EaseOutQuint',
		fn: (t) => 1 + (--t) * t * t * t * t
	}, {
		name: 'EaseInOutQuint',
		fn: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
	}]
}] as Array<FunctionGroup>;
