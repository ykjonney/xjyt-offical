<!--新闻详情页-->
<template>
	<div id="newsdetails">
		<div class="nav"></div>
		<div class="news-title">{{ news.title }}</div>
		<div class="news-info">
			<span>{{ news.author }}&nbsp;&nbsp;&nbsp;&nbsp;{{ news.create_at | dateformat('YYYY-MM-DD') }}</span>
		</div>
		<div class="news-main" v-html="news.content">{{ news.content }}</div>
		<Foot></Foot>
	</div>
</template>
<script>
export default {
	data: () => ({
		news: []
	}),
	methods: {
		fetchNews: function() {
			var id = this.$route.params.id * 1;
			this.$http
				.get(this.url + "/news/"+id)
				.then(res => {
					if (res.data.code === 200) {
						this.news=res.data.data;
						
					}
				});
		}
	},
	mounted() {
		this.fetchNews();
	}
};
</script>
<style>
#newsdetails .nav {
	background-color: #161617;
	z-index: 1;
}
#newsdetails .news-title {
	margin-top: 103px;
	text-align: center;
	font-size: 24px;
	color: #202020;
	line-height: 50px;
}
#newsdetails .news-info {
	width: 100%;
	color: #999999;
	text-align: center;
	line-height: 80px;
	font-size: 14px;
}
#newsdetails .news-main {
	width: 61%;
	height: auto;
	margin: 20px auto;
}
@media screen and (max-width: 750px) {
	#newsdetails .news-title {
		margin-top: 56px;
		line-height: 50px;
		font-size: 14px;
	}
	#newsdetails .news-info {
		line-height: 30px;
	}
	#newsdetails .news-main {
		width: 94%;
	}
}
</style>
