<template>
	<div class="container">
		<el-time-picker v-model="ruleForm.nightTime" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" />
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
		return {
			ruleForm: {
				nightTime: '',
			},
		};
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
