<template>
	<!-- 新闻中心 -->
	<div id="newscontent">
		<div class='topban'>
			<img class="ban" src="../assets/images/news-banner.png" alt />
			<div class="banner-pop"><div class="company-name">新闻中心</div></div>
		</div>
		<div class="new-list">
			<router-link :to="{ name: 'newsdetail', params: { id: item.id } }" v-for="item in news" v-bind:key="item.id">
				<div class="news-item">
					<div class="news-img"><img class="news-img-left" :src="item.img" alt /></div>
					<div class="news-information">
						<div class="news-title">{{ item.title }}</div>
						<div class="news-time">{{ item.creat_at | dateformat('YYYY-MM-DD') }}</div>
						<div class="news-describe">{{ item.info }}</div>
					</div>
				</div>
			</router-link>
			<div class="pagyer">
				<el-pagination
					layout="prev, pager, next"
					@current-change="handleCurrentChange"
					:current-page="currentpage"
					:hide-on-single-page="true"
					:page-size="6"
					:total="totalCount"
					@click="toTop"
				></el-pagination>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
export default {
	data: () => ({
		news: [],
		currentpage: 1,
		totalCount: 0
	}),
	methods: {
        toTop(i){
                //参数i表示间隔的幅度大小，以此来控制速度，例如50
                console.log(i)
                document.documentElement.scrollTop-=i;
                if (document.documentElement.scrollTop>0) {
                    var c=setTimeout(()=>this.toTop(i),16);
                }else {
                    clearTimeout(c);
                }
        },
		handleCurrentChange(val) {
			this.currentpage = val;
            this.toTop()
			this.$http
				.get(this.url + '/news/', {
					params: {
						page: this.currentpage
					}
				})
				.then(res => {
					if (res.status === 200) {
						this.totalCount = res.data.data.totalCount;
						this.news = res.data.data.lists;
						var arr = [];
						for (let i = 0; i <= this.news.length; i++) {
							arr.push(this.news[i].fields);
							this.newlist = arr;
						}	
					}
					
				})
				.catch(() => {});
		},
		newsdetail: function(item) {
			localStorage.setItem('item', JSON.stringify(item));
			this.$router.push('/newsdetail');
		},
		getNews: function() {
			this.$http
				.get(this.url + '/news/', {
					params: {
						page: this.currentpage
					}
				})
				.then(res => {
					console.log(res);
					if (res.status === 200) {
						this.totalCount = res.data.data.totalCount;
						this.news = res.data.data.lists;

						/* var arr = [];
						for (let i = 0; i <= this.news.length; i++) {
							arr.push(this.news[i].fields);
							this.newlist = arr;
							console.log(arr);
						} */
					}
				})
				.catch(() => {});
		}
	},
	
	mounted() {
		//this.getData();
		this.getNews();
	}
};
</script>

<style scoped>
/* #newscontent{ */
.ban {
	width: 100%;
	height: auto;
}
.banner-pop {
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	color: #ffffff;
	text-align: center;
	padding-top: 209px;
	box-sizing: border-box;
}

.company-name {
	font-size: 56px;
}
.new-list {
	width: 65%;
	height: auto;
	margin: 72px auto;
}

.news-item {
	width: 83%;
	height: 248px;
	border-bottom: 1px solid #f5f5f5;
	margin: 0 auto;
}
.news-item:hover {
	cursor: pointer;
}
.news-img {
	width: 30%;
	height: 100%;
	float: left;
}

.news-img-left {
	width: 178px;
	height: 124px;
	display: block;
	margin: 62px auto;
}

.news-information {
	width: 70%;
	height: 100%;
	float: left;
	padding-top: 62px;
	box-sizing: border-box;
}

.news-title {
	color: #202020;
	font-size: 18px;
	height: 25px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	font-weight: bold;
}
.news-title:hover {
	color:#3C88FF;
}

.news-time {
	color: #999999;
	font-size: 12px;
	line-height: 30px;
	font-weight: 400;
}

.news-describe {
	color: #202020;
	font-size: 14px;
	line-height: 30px;
	height: 90px;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}
.news-describe:hover {
	color:#3C88FF;
}
.pagyer {
	margin-top: 20px;
	float: right;
}
/* @media screen and (max-width: 1300px) {
	.new-list {
		width: 85%;
	}
} */
@media screen and (max-width: 1300px) {
	.new-list {
		width: 95%;
	}
	.banner-pop {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		color: #ffffff;
		text-align: center;
		padding-top: 165px;
		box-sizing: border-box;
	}
	.company-name {
		font-size: 30px;
	}
}
@media screen and (max-width: 960px) {
	.banner-pop {
		padding-top: 105px;
	}
}
@media screen and (max-width: 750px) {
	.topban{
		margin-top: 44px;
	}
	.banner-pop {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		color: #ffffff;
		text-align: center;
		padding-top: 30px;
		box-sizing: border-box;
	}
	.company-name {
		font-size: 18px;
	}
	.new-list {
		width: 100%;
		margin: 10px auto 90px auto;
	}
	.news-item {
		width: 93%;
		height: 96px;
	}
	.news-img-left {
		width: 89px;
		height: 62px;
		display: block;
		margin: 12px auto;
	}
	.news-information {
		padding-right: 10px;
		padding-top: 10px;
		box-sizing: border-box;
	}
	.news-title {
		color: #202020;
		font-size: 14px;
		height: auto;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: bold;
	}
	.news-time {
		color: #999999;
		font-size: 12px;
		line-height: 20px;
		font-weight: 400;
	}
	.news-describe {
		display: none;
	}
}
</style>
<style>
	.el-pager li {
		line-height: 26px;
		padding: 0 10px;
	}
	.el-pager li.active {
	    color: #333333;
	    cursor: default;
	}
	.el-pager li {
	    color: #999999;
	    cursor: default;
	}
	.el-pager li:hover {
	    color: #333333;
	    cursor: pointer;
	}
@media screen and (max-width: 750px) {
	.el-pager li {
		line-height: 26px;
		padding: 0 10px;
	}
}
</style>
