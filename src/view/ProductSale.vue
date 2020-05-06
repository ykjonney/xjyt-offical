<template>
	<!-- 购买产品页 -->
	<div>
		<div class="nav" style="background: #000000;z-index:9;"></div>
		<div class="product-pc">
			<div class="productDetail">
				<div class="content">
					<div class="contentTop">
						<img :src="info.imgdetail == '' ? '' : info.imgdetail[0].img" alt="" />
						<!-- <img src="../../asstes/images/b.png" alt=""> -->
					</div>
					<div class="contentBottom">
						<li v-for="img in info.imgdetail" :key="img.id"><img :src="img.img" alt="" @click="onclickImg" /></li>
					</div>
				</div>
				<div class="content_all">
					<div class="name">{{ info.title }}</div>
					<div class="param">
						<div class="param_one">
							<div class="txt">存力：{{ info.productsall == '' ? 0 : info.productsall[0].hashrate }}T</div>
						</div>
						<div class="param_one">
							<div class="txt">重量：{{ info.productsall == '' ? 0 : info.productsall[0].weight }}kg</div>
						</div>
					</div>
					<div class="inventory">库存:{{ info.productsall == '' ? 0 : info.productsall[0].inventory }}</div>
					<div class="price">
						<div class="money">￥{{ info.productsall == '' ? 0 : info.productsall[0].price * number }}</div>
						<div class="bProNum">
							<div class="add" @click="number++">+</div>
							<div class="num">{{ number }}</div>
							<div class="red" @click="number === 1 ? number : number--">-</div>
						</div>
					</div>
					<div class="button"><div class="buy" @click='buy'>立即购买</div></div>
				</div>
			</div>
			<div class="productList ">
				<router-link to="" :class="['productItem', { active_nav: show === 1 }]" @click.native="checked(1)">产品介绍</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 2 }]" @click.native="checked(2)">产品参数</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 3 }]" @click.native="checked(3)">付款方式</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 4 }]" @click.native="checked(4)">联系方式</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 5 }]" @click.native="checked(5)">售后说明</router-link>
			</div>
			<div class="container_box ">
				<div class="productIntroduce" v-if="show === 1">
					<div class="pic "><div v-html="introduce[0].content"></div></div>
				</div>
				<div class="productIntroduce" v-if="show === 2">
					<div class="paramsP">
						<div class="firstP">
							<div class="paramP"><div class="name">CPU</div></div>
							<div class="con">{{ info.cpu }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">内存</div></div>
							<div class="con">{{ info.memory }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">系统盘</div></div>
							<div class="con">{{ info.system_hard_disk }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">数据盘</div></div>
							<div class="con">{{ info.hard_disk }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">网络</div></div>
							<div class="con">{{ info.productsall[0].net }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">机型</div></div>
							<div class="con">{{ info.productsall[0].machine_type }}</div>
						</div>
						<div class="firstP" style="border-bottom: none">
							<div class="paramP"><div class="name">机房</div></div>
							<div class="con">{{ info.productsall[0].machine_home }}</div>
						</div>
					</div>
					<div v-html="product_data[0].content"></div>
				</div>
				<div class="productIntroduce" v-if="show === 3"><div v-html="pay_method[0].content"></div></div>
				<div class="productIntroduce" v-if="show === 4">
					<p class="selfInfo">扫码关注“星际云通”公众号，获取最新矿机销售信息：</p>
					<div class="list">
						<div class="left"><img src="../assets/images/weixin.jpg" alt="" /></div>
						<div class="right">
							<p class="selfInfo">公司名称：{{ companyinfo[0].name }}</p>
							<p class="selfInfo">电话热线：{{ companyinfo[0].phone }}</p>
							<p class="selfInfo">公司地址：{{ companyinfo[0].address }}</p>
						</div>
					</div>
				</div>
				<div class="productIntroduce" v-if="show === 5"><div v-html="after_sale[0].content"></div></div>
			</div>
		</div>
		<div class="product-app">
			<div class="swiper-container">
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="(img, index) in info.imgdetail" :key="index"><img :src="img.img" alt @click="details(index)" /></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-scrollbar" slot="scrollbar"></div>
				</swiper>
			</div>
			<div class="home-line"></div>
			<div class="content_all">
				<div class="name">{{ info.title }}</div>
				<div class="param">
					<div class="param_one">
						<div class="txt">存力：{{ info.productsall == '' ? 0 : info.productsall[0].hashrate }}T</div>
					</div>
					<div class="param_one">
						<div class="txt">重量：{{ info.productsall == '' ? 0 : info.productsall[0].weight }}kg</div>
					</div>
				</div>
				<div class="inventory">库存：{{ info.productsall == '' ? 0 : info.productsall[0].inventory }}</div>
				<div class="price">
					<div class="inventory" style="display: inline-block;">购买数量：</div>
					<div class="bProNum">
						<div class="red" @click="number === 1 ? number : number--">-</div>
						<div class="num">{{ number }}</div>
						<div class="add" @click="number++">+</div>
					</div>
				</div>
			</div>
			<div class="home-line"></div>
			<div class="product-btn">
				<div class="product-btn-money">￥{{ info.productsall == '' ? 0 : info.productsall[0].price * number }}</div>
				<div class="product-btn-button" @click='buy'>立即购买</div>
			</div>

			<div class="productList ">
				<router-link to="" :class="['productItem', { active_nav: show === 1 }]" @click.native="checked(1)">产品介绍</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 2 }]" @click.native="checked(2)">产品参数</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 3 }]" @click.native="checked(3)">付款方式</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 4 }]" @click.native="checked(4)">联系方式</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 5 }]" @click.native="checked(5)">售后说明</router-link>
			</div>
			<div class="container_box ">
				<div class="productIntroduce" v-if="show === 1">
					<div class="pic "><div v-html="introduce[0].content"></div></div>
				</div>
				<div class="productIntroduce" v-if="show === 2">
					<div class="paramsP">
						<div class="firstP">
							<div class="paramP"><div class="name">CPU</div></div>
							<div class="con">{{ info.cpu }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">内存</div></div>
							<div class="con">{{ info.memory }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">系统盘</div></div>
							<div class="con">{{ info.system_hard_disk }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">数据盘</div></div>
							<div class="con">{{ info.hard_disk }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">网络</div></div>
							<div class="con">{{ info.productsall[0].net }}</div>
						</div>
						<div class="firstP">
							<div class="paramP"><div class="name">机型</div></div>
							<div class="con">{{ info.productsall[0].machine_type }}</div>
						</div>
						<div class="firstP" style="border-bottom: none">
							<div class="paramP"><div class="name">机房</div></div>
							<div class="con">{{ info.productsall[0].machine_home }}</div>
						</div>
					</div>
					<div v-html="product_data[0].content"></div>
				</div>
				<div class="productIntroduce" v-if="show === 3"><div v-html="pay_method[0].content"></div></div>
				<div class="productIntroduce" v-if="show === 4">
					<p class="selfInfo">扫码关注“星际云通”公众号，获取最新矿机销售信息：</p>
					<div class="list">
						<div class="left"><img src="../assets/images/weixin.jpg" alt="" /></div>
						<div class="right">
							<p class="selfInfo">公司名称：{{ companyinfo[0].name }}</p>
							<p class="selfInfo">电话热线：{{ companyinfo[0].phone }}</p>
							<p class="selfInfo">公司地址：{{ companyinfo[0].address }}</p>
						</div>
					</div>
				</div>
				<div class="productIntroduce" v-if="show === 5"><div v-html="after_sale[0].content"></div></div>
			</div>
		</div>

		<Foot></Foot>
	</div>
</template>

<script>
import './../assets/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	data: () => ({
		show: 1,
		number: 1,
		product: [],
		product_num: [],
		companyinfo: '',
		introduce: '',
		product_data: '',
		after_sale: '',
		pay_method: '',
		swiperOption: {
			// spaceBetween: 4,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination'
				// bulletActiveClass: 'my-bullet-active',
			},
			// loop: true,
			autoplay: {
				delay: 5000,
				stopOnLastSlide: false,
				disableOnInteraction: false
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		},
		info: {
			imgdetail: [],
			productsall: []
		}
	}),
	methods: {
		fetchCompanyinfo: function() {
			this.$http
				.get(this.url + '/companyinfo/', {})
				.then(res => {
					if (res.data.code === 200) {
						this.companyinfo = res.data.data;
					} else {
					}
				})
				.catch(() => {});
		},
		checked(index) {
			this.show = index;
		},
		onclickImg: function() {
			let big = document.querySelector('.contentTop img');
			let thumbs = document.querySelectorAll('.contentBottom img');
			thumbs.forEach(function(img) {
				img.onclick = function() {
					big.src = this.src;
				};
			});
		},
		buy:function(){
			this.$message({
			   message:'请扫描网站底部二维码，关注公众号（或直接联系销售人员）进行购买',
			   duration:1500
			});
			return;
		}
	},
	mounted() {
		this.fetchCompanyinfo();
		//this.fetchProduct();
		this.onclickImg();
		var that = this;
		this.$http
			.get(this.url + '/product/' + this.$route.query.id)
			.then(res => {
				if (res.status == 200) {
					that.info = res.data.data || {};
					that.introduce = res.data.data.productintroduce.filter(val => {
						return val.category === 'introduce';
					});
					that.after_sale = res.data.data.productintroduce.filter(val => {
						return val.category === 'after_sale';
					});
					that.product_data = res.data.data.productintroduce.filter(val => {
						return val.category === 'parameter';
					});
					console.log(that.product_data);
					that.pay_method = res.data.data.productintroduce.filter(val => {
						return val.category === 'payment';
					});
				} else {
				}
			})
			.catch(() => {});
	}
};
</script>

<style scoped="scoped" lang="scss">
a {
	text-decoration: none;
	color: #333;
}

.productDetail {
	width: 62%;
	height: 500px;
	margin: 135px auto 0px;
	border-radius: 20px;
	box-sizing: border-box;
}
.content {
	width: 50%;
	height: 450px;
	float: left;
}
.content > .contentTop {
	width: 100%;
	height: 329px;
}
.content > .contentTop > img {
	width: 325px;
	height: 329px;
	margin: 0 auto;
	display: block;
}
.content > .contentBottom {
	width: 325px;
	margin: 0 auto;
	height: 50px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

.content > .contentBottom > li {
	width: 58px;
	height: 44px;
	background: #f1f1f1;
	list-style: none;
}

.content > .contentBottom > li > img {
	width: 100%;
	height: 100%;
	display: block;
}

.content > .contentBottom > li > img:hover {
	cursor: pointer;
}

.content_all {
	width: 50%;
	height: auto;
	float: left;
	padding-right: 20px;
	padding-left: 100px;
	box-sizing: border-box;
}

.content_all > .name {
	/* height: 50px; */
	font-size: 26px;
	color: #212121;
	line-height: 50px;
}

.content_all > .tag {
	line-height: 30px;
}

.content_all > .tag > span {
	color: #949494;
	margin-right: 5px;
}

.content_all > .param {
	display: inline-block;
	/* height: 30px; */
	margin-top: 20px;
}

.content_all > .param > .param_one {
	width: auto;
	/* height: 30px; */
	float: left;
	line-height: 50px;
	margin-right: 30px;
	font-size: 14px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(64, 64, 64, 1);
}
.content_all > .inventory {
	height: 40px;
	margin-top: 45px;
}

.content_all > .price {
	height: 50px;
	margin-top: 45px;
	font-size: 14px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(64, 64, 64, 1);
}

.content_all > .price > .money {
	width: 50%;
	line-height: 40px;
	color: #4c82f7;
	font-size: 30px;
	float: left;
	font-family: 'PingFang-SC-Bold';
}

/* .content_all>.price>.red {
		margin-right: 10px;
	}

	.content_all>.price>.add {
		margin-right: 90px;
	}
 */
.bProNum {
	width: 50%;
	float: right;
}
.bProNum > .red,
.bProNum > .add {
	width: 34px;
	height: 34px;
	line-height: 34px;
	text-align: center;
	border-radius: 50%;
	border: 1px solid #e1e1e1;
	font-size: 16px;
	color: #606060;
	float: right;
}
.bProNum > .num {
	width: 34px;
	height: 34px;
	line-height: 34px;
	text-align: center;
	float: right;
	font-size: 14px;
	margin-right: 10px;
	color: #6c6c6c;
	float: right;
}
.bProNum > .red:hover,
.bProNum > .add:hover {
	cursor: pointer;
	user-select: none;
}

.content_all > .button {
	height: 68px;
	margin-top: 60px;
}

.content_all > .button > .buy {
	width: 244px;
	height: 68px;
	background-color: #a6a9ad;
	font-size: 16px;
	border-radius: 5px;
	color: #ffffff;
	text-align: center;
	line-height: 68px;
}
.content_all > .button > .buy:hover{
	cursor: pointer;
}

.productList {
	width: 62%;
	height: 90px;
	margin: 0 auto;
	padding-top: 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #ebebeb;
}

.productList > .productItem {
	width: 160px;
	height: 70px;
	color: #202020;
	font-size: 16px;
	text-align: center;
}

.active_nav {
	border-bottom: 1px solid #4c82f7;
	color: #4c82f7;
}

.container_box {
	width: 62%;
	margin: 20px auto 100px;
}

/*产品参数*/
.paramsP {
	width: 100%;
	height: 378px;
	background: #f8f8f8;
	margin: 62px auto;
	color: #1e1e1e;
	border: 1px solid #e7e7e7;
}

.firstP {
	height: 55px;
	border-bottom: 1px solid #e7e7e7;
	box-sizing: border-box;
}

.firstP > .paramP {
	width: 50%;
	height: 100%;
	float: left;
}
.firstP > .paramP > .name {
	height: 100%;
	line-height: 55px;
	text-align: center;
	color: #202020;
	font-size: 14px;
}

.firstP > .con {
	width: 50%;
	height: 100%;
	float: left;
	line-height: 55px;
	font-size: 14px;
	color: #6c6c6c;
}

.productDetailP {
	width: 150px;
	height: 50px;
	color: #202020;
	font-size: 16px;
	line-height: 50px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.targetP {
	margin: 30px auto;
	color: #404040;
}

.targetP > .top {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
}

.targetP > .txt {
	line-height: 30px;
	padding-right: 50px;
	font-size: 14px;
}

.payfor {
	line-height: 50px;
	color: #202020;
	font-size: 14px;
}

/*联系*/
.selfInfo {
	line-height: 50px;
	color: #202020;
	font-size: 16px;
}

.list {
	width: 1000px;
	height: 200px;
	margin: 50px auto;
}

.list > .left {
	width: 188px;
	height: 188px;
	float: left;
	margin-left: 68px;
}

.list > .left > img {
	width: 100%;
	height: 100%;
	display: block;
	margin: 0 auto;
}

.list > .right {
	width: 60%;
	height: 100%;
	float: right;
	padding: 10px 50px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
}

.list > .right > p {
	width: 100%;
	color: #202020;
	font-size: 14px;
}

/*售后说明*/
.service {
	color: #757575;
	line-height: 50px;
	color: 14px;
	color: #000000;
}
.product-app {
	display: none;
}
.swiper-container {
	width: 100%;
	height: 284px;
}
img {
	width: 100%;
	height: 100%;
}
.swiper-slide {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	position: relative;
}
.swiper-slide:hover {
	cursor: pointer;
}
.swiper-button-prev {
	width: 100px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0.3);
	display: none;
}

.swiper-button-next {
	width: 100px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0.3);
	display: none;
}
.swiper-button-prev:after {
	content: '';
	width: 10px;
	height: 10px;
	border-top: 2px solid #ffffff;
	border-left: 2px solid #ffffff;
	transform: rotate(-45deg);
	position: absolute;
	top: 45px;
	left: 45px;
}

.swiper-button-next:after {
	content: '';
	width: 10px;
	height: 10px;
	border-top: 2px solid #ffffff;
	border-right: 2px solid #ffffff;
	transform: rotate(45deg);
	position: absolute;
	top: 45px;
	left: 45px;
}

.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
	display: block;
}
@media screen and (max-width: 1200px) {
	.productDetail {
		width:100%;
	}
	.productList {
		width: 100%;
	}
	.container_box {
		width: 100%;
	}
}
@media screen and (max-width: 750px) {
	.product-pc {
		display: none;
	}
   
	// .swiper-pagination{
	//     width: 50px;
	//     height: 50px;
	// }
	.product-app {
		display: block;
		margin-top: 20px;
	}
	.home-line {
		width: 100%;
		height: 20px;
		background: #eee;
	}
	.content_all {
		float: none;
		width: 100%;
		padding: 10px;
		.name {
			font-size: 24px;
			margin-bottom: 10px;
			color: #333333;
			line-height: 50px;
		}
		.param {
			font-size: 20px;
			line-height: 50px;
		}
		.param_one {
			float: none !important;
			font-size: 20px !important;
			line-height: 1 !important;
			margin-bottom: 10px !important;
			line-height: 50px;
		}
		.inventory {
			font-size: 20px;
			line-height: 50px;
			height: auto;
			margin: 0 auto;
		}
		.price {
			margin-top: 0px;
			display: flex;
			height: auto;
		}
		.money {
			display: none;
		}
		.bProNum {
			width: 70%;
			float: none;
			overflow: hidden;
			margin-left: 2px;
			.add {
				float: none !important;
				display: inline-block;
				width: 40px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #d8d8d8;
				text-align: center;
				font-weight: bold;
			}
			.num {
				float: none;
				display: inline-block;
				width: 100px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #d8d8d8;
				text-align: right;
				padding: 0 10px;
				margin: 0 20px;
			}
			.red {
				display: inline-block;
				float: none !important;
				width: 40px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #d8d8d8;
				text-align: center;
				font-weight: bold;
			}
		}
	}
	.productList {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding-top: 0;
		.productItem {
			width: 20%;
			height: auto;
		}
	}
	.container_box {
		width: 100%;
		margin: 20px auto;
		.list {
			height: auto;
			overflow: hidden;
			width: 100%;
			.left {
				width: 100px;
				height: 100px;
				margin-left: 10px;
			}
			.right {
				width: 70%;
				padding: 0 10px;
			}
			.right > p {
				text-align: left;
				line-height: 40px;
			}
		}
	}
	.selfInfo {
		padding-left: 10px;
		box-sizing: box-sizing;
		line-height: initial;
	}
	.paramsP {
		margin: 12px auto;
	}
	.product-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 58px;
		line-height: 58px;
		background: #fff;
		box-shadow: 0 0 20px 0 #eee;
		display: flex;
		justify-content: center;
		box-shadow: 0 0 20px 0 #ccc;
	}
	.product-btn-money {
		flex: 1;
		text-align: center;
		height: 40px;
		line-height: 40px;
		color: #367fff;
		margin: 10px;
	}
	.product-btn-button {
		flex: 1;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background: #367fff;
		color: #fff;
		margin: 10px;
		border-radius: 20px;
	}
}
</style>
