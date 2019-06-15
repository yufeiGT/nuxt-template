/**
 * plugin extend
 * @author GT
 * @date 2019.05.05
 */
export default {
	_: 0,
	/**
	 * 判断对象是否是一个数组
	 * @param  {Object} obj [需要判断的对象]
	 * @return {Boolean}
	 */
	isArray(obj) {
		return obj && obj instanceof Array;
	},
	/**
	 * 判断对象是否是一个对象
	 * @param  {Object} obj [需要判断的对象]
	 * @return {Boolean}
	 */
	isPlainObject(obj) {
		return obj && !this.isArray(obj) && obj instanceof Object && obj + '' === '[object Object]';
	},
	/**
	 * 合并一个或多个对象
	 * @param  [{Boolean}] deep [设置为true时进行递归合并，可选]
	 * @param {Object} [需要进行合并的对象，数量没有上限]
	 * @return {Object} [合并后的对象]
	 */
	extend(...param) {
		let hasDeep = typeof param[0] === 'boolean',
			isDeep = param[0] === true,
			obj = param[hasDeep ? 1 : 0],
			n = hasDeep ? 2 : 1,
			i = n,
			l = param.length,
			j, objs, subObj, isObj, isArray;
		if (l == n) return obj;
		for (; i < l; i++) {
			objs = param[i];
			for (j in objs) {
				if (!objs.hasOwnProperty(j)) continue;
				subObj = objs[j];
				isArray = this.isArray(subObj);
				isObj = this.isPlainObject(subObj);
				if (subObj === undefined && obj[j]) continue;
				obj[j] = (isObj || isArray) && isDeep ? this.extend(param[0], (isObj || isArray ? obj[j] || (isObj ? {} : []) : obj[j]), subObj) : subObj;
			};
		};
		return obj;
	},
	dataMat(value){
		const date = new Date(value);
		let Y = date.getFullYear();
		let m = date.getMonth() + 1;
		let d = date.getDate();
		let H = date.getHours();
		let i = date.getMinutes();
		let s = date.getSeconds();
		if( m < 10){ m = '0' + m}
		if(d < 10){d = '0' +d}
		if(H < 10){H = '0' +H}
		if(i < 10){i = '0' +i}
		if(s <10 ){s = '0' +s}
		const t = Y + '-' + m + '-'+d+ ''+H+ ':'+i+ ':'+s;
		return t;
	}
};
