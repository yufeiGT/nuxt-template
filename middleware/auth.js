/**
 * 鉴权
 * @author GT
 * @date 2019.05.05
 */
export default ({
	store,
	redirect,
}) => {
	if (!store.state.token) return redirect('/login');
};
