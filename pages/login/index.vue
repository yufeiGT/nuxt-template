<template>
	<div id="login">
		<nuxt-link to="/">返回</nuxt-link>
		<input type="text" v-model="userinfo.username">
		<br>
		<input type="password" v-model="userinfo.password">
		<br>
		<button @click="login();">登录</button>
	</div>
</template>
<style type="text/css" lang="scss"></style>
<script type="text/javascript">
import axios from 'axios';
import {
	Login,
} from '~/api/authorize';
export default {
	name: 'login',
	// middleware: 'auth',
	data() {
		return {
			userinfo: {
				username: '',
				password: '',
			},
		};
	},
	methods: {
		login() {
			Login(this.userinfo, res => {
				this.$store.commit('setToken', res.data.token);
				this.$router.push('/');
			});
		},
	},
	mounted() {},
};
</script>
