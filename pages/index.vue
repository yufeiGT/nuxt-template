<template>
	<section class="container">
		<div>
			<logo />
			<h1 class="title">{{title}}</h1>
			<h2 class="subtitle">Welcome to the iView + Nuxt.js template</h2>
			<button @click="logout();">退出</button>
			<i-input size="large" placeholder="large size"></i-input>
			<div class="links">
				<Button type="primary" target="_blank" to="https://nuxtjs.org/">Documentation</Button>
				<Button target="_blank" to="https://github.com/nuxt/nuxt.js">GitHub</Button>
				<Button target="_blank" to="https://www.iviewui.com/">iView</Button>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import {
	getAllSignInDetails,
} from '~/api';
import {
	Logout,
} from '~/api/authorize';
export default {
	name: 'index',
	middleware: 'auth',
	data() {
		return {
			title: 'nuxt by GT',
		};
	},
	components: {
		Logo,
	},
	methods: {
		logout() {
			Logout(res => {
				this.$store.commit('setToken', '');
				this.$router.push('/login');
			});
		},
	},
	mounted() {
		getAllSignInDetails(res => {
			console.log(res);
		});
	},
}
</script>

<style lang="scss">
.container{
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	.title{
		$size: 100px;
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: $size;
		color: #35495e;
		letter-spacing: 1px;
	}
	.subtitle{
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}
}

.links{
	padding-top: 15px;
}
</style>
