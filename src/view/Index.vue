<template>
	<!-- 网站首页 -->
	<div>
		<PC v-if='ispc'></PC>
		<MOBLE v-else></MOBLE>
	</div>
</template>
<script>
import PC from './indexComponents/pc.vue'
import MOBLE from './indexComponents/moble.vue'
export default {
	components: {
		PC,
		MOBLE
	},
	data() {
		return {
			ispc:true,
		}
	},

	mounted() {
		var that=this;
		that.ispc=( document.documentElement.clientWidth / 1920)>0.3828125
		window.onresize=()=>{
			that.ispc=(document.documentElement.clientWidth / 1920)>0.3828125
		}
	}
};
</script>
