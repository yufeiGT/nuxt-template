/**
 * vuex 持久化
 * @author GT
 * @date 2019.05.05
 */
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
let cookieStorage = {
	getItem: key => Cookies.getJSON(key),
	setItem: (key, value) => Cookies.set(key, value, {
		expires: 3,
		secure: false,
	}),
	removeItem: key => Cookies.remove(key),
};
export default context => createPersistedState({
	storage: cookieStorage,
	getState: cookieStorage.getItem,
	setState: cookieStorage.setItem,
})(context.store);
