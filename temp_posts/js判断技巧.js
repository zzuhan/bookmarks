function _isObject(obj) {
	return obj === Object(obj);
}

function _instanceOf(o, type) {
	return o && o.hasOwnProperty && (o instanceof type);
}