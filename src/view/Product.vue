·
<template>
	<!-- 公司产品 -->
	<div>
		<div><img class="ban" src="../assets/images/product-banner.png" alt="" /></div>
		<div class="machine-list" v-for="pro in productList" :key="pro.id">
			<!-- 标题 -->
			<div class="machine-name machine-name-phpne">{{ pro.title }}</div>
			<div class="machine-information machine-information-phone"><img class="machine-img" :src="pro.img_explain" alt="" /></div>
			<div class="machine-information machine-list-first">
				<!-- 标题 -->
				<div class="machine-name machine-name-pc">{{ pro.title }}</div>
				<!-- 内容 -->
				<div class="machine-desc" v-html="pro.content"></div>
				<div class="machine-btn">
					<div class="machine-machine-detail"><router-link :to="{ name: 'productDetail', query: { id: pro.id } }">进一步了解></router-link></div>
					<div class="machine-buy-pc"><router-link :to="{ name: 'productSale', query: { id: pro.id } }">购买</router-link></div>
				</div>
			</div>
			<div class="machine-information machine-information-pc"><img class="machine-img" :src="pro.img_explain" alt="" /></div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script>
export default {
	data() {
		return {
			productList: []
		};
	},

	methods: {},
	mounted() {
		this.$http
			.get(this.url + '/product/')
			.then(res => {
				this.productList = res.data.data || [];
			})
			.catch(() => {});
	}
};
</script>

<style scoped="scoped">
.ban {
	width: 100%;
}

.machine-list {
	width: 1200px;
	height: auto;
	background: #f8f8f8;
	margin: 20px auto;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.machine-information {
	width: 600px;
	height: 500px;
	/* float: left; */
}

.machine-list-first {
	padding: 90px;
	box-sizing: border-box;
}

.machine-name {
	width: 100%;
	height: 80px;
	text-align: center;
	color: #202020;
	font-size: 22px;
	font-weight: bold;
}
.machine-desc {
	width: 100%;
	height: auto;
	overflow: hidden;
	margin-bottom: 20px;
	font-size: 14px;
	color: #202020;
}

.machine-name-phpne {
	display: none;
}
.element.style {
	margin-top: 10px;
	line-height: 5em;
}

@media screen and (max-width: 750px) {
	.ban {
		margin-top: 44px;
	}
	.machine-desc {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-bottom: 20px;
		font-size: 14px;
		color: #202020;
		line-height: 100px;
	}
	.machine-list-first {
		padding: 10px;
		box-sizing: border-box;
	}
}
.machine-btn {
	width: 100%;
	font-size: 14px;
	color: #3f87ff;
	margin-top: 20px;
}

.machine-buy-pc {
	float: right;
	margin-right: 10px;
}

.machine-buy-pc > a {
	color: #3f87ff;
}

.machine-machine-detail {
	float: right;
}

.machine-machine-detail > a {
	color: #3f87ff;
	font-weight: 400;
}
.machine-buy-pc > a:hover,
.machine-machine-detail > a:hover {
	font-weight: 600;
}

.machine-img {
	width: auto;
	height: auto;
	display: block;
	margin: 20% auto;
}
.machine-information-phone {
	display: none;
}
.machine-buy-mobile {
	/* display: none; */
}

@media screen and (max-width: 750px) {
	.machine-list {
		width: 100%;
		height: auto;
		margin: 20px auto;
		background-color: #ffffff;
	}
	.machine-information-phone {
		display: block;
	}
	.machine-information-pc {
		display: none;
	}
	.machine-btn {
		width: 62%;
		text-align: center;
		margin: 50px auto 0;
		display: flex;
		justify-content: space-around;
		/* flex-direction: row-reverse; */
	}
	.machine-name-pc {
		display: none;
	}
	.machine-buy-mobile {
		display: block;
		float: right;
		margin-right: 500px;
	}
	.machine-buy-mobile {
		color: #0066cc;
	}
	.machine-buy-mobile > a {
		color: #3f87ff;
	}
	.machine-name-phpne {
		margin-top: 20px;
		display: block;
		font-size: 30px;
		font-weight: bold;
	}

	.machine-information {
		width: 100%;
		height: 100%;
	}
	.machine-img {
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
	}
	.machine-name {
		width: 100%;
		height: 80px;
	}
}
@media (min-width: 750px) and (max-width: 1200px) {
	.machine-list {
		width: 72%;
		height: auto;
		background: #f8f8f8;
		margin: 20px auto;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.machine-information {
		width:100%;
		height: 400px;
		/* float: left; */
	}
	.machine-img {
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
	}
}
</style>
