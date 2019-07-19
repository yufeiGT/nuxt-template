<template>
	<div class="v-image" :style="{ width: size.width, height: size.height, backgroundColor: color, }">
		<img :src="imgSrc" />
	</div>
</template>
<script type="text/javascript">
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
		error: {
			type: [String, Object],
			default: require('~/assets/images/default_img.png'),
		},
		color: {
			type: String,
			default: '#F5F5F5',
		},
		width: {
			type: [String, Number],
			default: '100%',
		},
		height: {
			type: [String, Number],
			default: '100%',
		},
	},
	watch: {
		src() {
			this.setSrc();
		},
		width() {
			this.setWidth();
		},
		height() {
			this.setHeight();
		},
	},
	data() {
		return {
			imgSrc: '',
			size: {
				width: '',
				height: '',
			},
		};
	},
	methods: {
		setWidth() {
			this.size.width = `${this.width}${/%$/.test(this.width + '') ? '' : 'px'}`;
		},
		setHeight() {
			this.size.height = `${this.height}${/%$/.test(this.height + '') ? '' : 'px'}`;
		},
		setSrc() {
			let img = new Image();
			img.onload = () => {
				this.imgSrc = this.src;
			};
			img.onerror = () => {
				this.imgSrc = this.error;
			};
			img.src = this.src;
		},
	},
	mounted() {
		this.setSrc();
		this.setWidth();
		this.setHeight();
	},
};
</script>
<style type="text/css" lang="scss" scoped>
.v-image{
	overflow: hidden;
	position: relative;
	display: inline-block;
	img{
		max-width: 100%;
		max-height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
}
</style>
