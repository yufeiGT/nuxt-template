<template>
	<div class="container">
		<nuxt />
	</div>
</template>
<script>
// components
import {
	Loading,
} from 'element-ui';
import {
	Logout,
} from '~/api/authorize';
import {
	verifyCode,
} from '~/api';
export default {
	name: 'index',
	loading: true,
	components: {},
	data() {
		return {};
	},
	methods: {},
	async asyncData(context) {
		const {
			store,
		} = context, [] = await Promise.all(
			[

			]);
		return {};
	},
}
</script>

<style lang="scss" scoped>
</style>
