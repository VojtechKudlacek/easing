// tslint:disable:no-parameter-reassignment
export default [{
	name: 'Quad',
	fns: [{
		name: 'EaseInQuad',
		code: '(t) => t * t',
		fn: (t) => t * t
	}, {
		name: 'EaseOutQuad',
		code: '(t) => t * (2 - t)',
		fn: (t) => t * (2 - t)
	}, {
		name: 'EaseInOutQuad',
		code: '(t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t',
		fn: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
	}]
}, {
	name: 'Cubic',
	fns: [{
		name: 'EaseInCubic',
		code: '(t) => t * t * t',
		fn: (t) => t * t * t
	}, {
		name: 'EaseOutCubic',
		code: '(t) => (--t) * t * t + 1',
		fn: (t) => (--t) * t * t + 1
	}, {
		name: 'EaseInOutCubic',
		code: '(t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1',
		fn: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
	}]
}, {
	name: 'Quart',
	fns: [{
		name: 'EaseInQuart',
		code: '(t) => t * t * t * t',
		fn: (t) => t * t * t * t
	}, {
		name: 'EaseOutQuart',
		code: '(t) => 1 - (--t) * t * t * t',
		fn: (t) => 1 - (--t) * t * t * t
	}, {
		name: 'EaseInOutQuart',
		code: '(t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t',
		fn: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
	}]
}, {
	name: 'Quint',
	fns: [{
		name: 'EaseInQuint',
		code: '(t) => t * t * t * t * t',
		fn: (t) => t * t * t * t * t
	}, {
		name: 'EaseOutQuint',
		code: '(t) => 1 + (--t) * t * t * t * t',
		fn: (t) => 1 + (--t) * t * t * t * t
	}, {
		name: 'EaseInOutQuint',
		code: '(t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t',
		fn: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
	}]
}] as Array<FunctionGroup>;
