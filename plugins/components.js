// 注册全局组件
import Vue from 'vue';
import vImage from '~/components/tools/v-image';
export default () => {
	Vue.component('v-image', vImage);
};
