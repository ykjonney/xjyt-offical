<template>
	<!-- 发展历程 -->
	<div>
		<!-- <div class="nav" ></div> -->
		<div class="company-banner">
			<img class="ban" src="../assets/images/develop-banner.png" alt="" />
			<div class="banner-pop">
				<div class="company-name">星际里程碑</div>
				<!-- <div class="company-infos">主页 / 发展历程</div> -->
			</div>
		</div>
		<div class="about-history" id="fzlc">
			<div class="our-service">发展历程</div>
			<div class="our-line"></div>
			<div class="about-history-list">
				<ul class="slides clearfix list ">
					<div class="swiper-father">
						<div class="swiper-container swiper-container1">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="item in develop" :key="item">
									<li class="firstBox" style="display: block;">
										<div class="items">{{ item.title }}</div>
										<div class="circle"></div>
										<div class="desc">{{ item.content }}</div>
									</li>
								</div>
								<div class="swiper-slide"></div>
							</div>
						</div>
						<div class="swiper-button-next swiper-button-black" id="swiper1"></div>
						<div class="swiper-button-prev swiper-button-black" id="swiper2"></div>
					</div>
				</ul>
			</div>
		</div>
		<div class="mainDevelop">
			<div class="devTit">发展历程</div>
			<div class="developList block" v-for="item in develop" :key="item">
			  <el-timeline :reverse="reverse" size="large" style='line-height:20px;'>
			    <el-timeline-item :timestamp="item.title" placement="top"  >
			      <el-card style='padding: 10px;'>
			        <h4>{{ item.content }}</h4>
			      </el-card>
			    </el-timeline-item>
			    
			  </el-timeline>
			</div>
		</div>
		
		<Foot></Foot>
	</div>
</template>

<script>
// import 'swiper/dist/css/swiper.css';
// import '../assets/js/jquery.min';
// import '../assets/resources/css/swiper.min.css';
// import '../assets/js/swiper.min';
// import '../assets/js/jquery_flexslider';
import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	name: 'Develop',
	data: () => ({
		options: {
			autoplay: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		},
		companyinfo: [],
		develop: [],
		reverse:true
	}),
	components: {
		swiper,
		swiperSlide
	},
	beforeCreate: {

	},
	beforeDestroy: {},
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
		fetchDevelop: function() {
			var that = this;
			this.$http
				.get(this.url + '/about/', {
					params: {
						id: this.id
					}
				})
				.then(res => {
					if (res.data.code === 200) {
						that.develop = res.data.data.filter(val => {
							return val.category === 'grow';
						});
						that.$nextTick(function() {
							var swiper = new Swiper('.swiper-container1', {
								slidesPerView: 4,
								spaceBetween: 30,
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev'
								}
							});
						});
					}
				})
				.catch(() => {});
		}
	},
	mounted() {
		this.fetchCompanyinfo();
		this.fetchDevelop();
		// this.a();
	}
};
</script>
<style>
	.el-timeline-item__wrapper {
	    position: relative;
	    padding-left: 28px;
		padding-bottom: 30px;
	    top: -1px;
	}
	.el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
	    display: block;
	}
	.el-timeline-item__tail {
	    position: absolute;
	    left: 4px;
	    height: 100%;
		border-left: 1px solid #3780ff;
	}
	.el-timeline-item__timestamp.is-top {
	    margin-bottom: 20px;
	    padding-top: 4px;
		color:#202020;
		font-weight: bold;
	}
	.el-timeline-item__node--normal {
	   
		border:1px solid #3780ff;
		background-color: #FFFFFF;
	}
	.el-card.is-always-shadow{
		box-shadow: none;
		color:#404040;
		font-weight:400;
	} 
</style>
<style scoped="scoped">
@import '../../node_modules/swiper/css/swiper.css';
.company-banner {
	width: 100%;
	height: auto;
	overflow: hidden;
	position: relative;
}

.ban {
	width: 100%;
}

.banner-pop {
	width: 100%;
	height: 100%;
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

.company-infos {
	font-size: 14px;
	line-height: 30px;
	color: #b5b5b5;
}

.our-service {
	font-size: 30px;
	color: #252525;
	width: 100%;
	height: 29px;
	text-align: center;
	font-weight: bold;
}
.devTit{
	font-size: 30px;
	display: none;
}

.about-history {
	width: 100%;
	height: 685px;
	padding-top: 108px;
	box-sizing: border-box;
}
.developList{
	display: none;
}
@media screen and (max-width: 1200px) {
	.banner-pop {
		padding-top: 205px;
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
	.company-banner {
		margin-top: 44px;
	}
	.banner-pop {
		padding-top: 35px;
	}
	
	.company-name {
		font-size: 18px;
	}
	.about-history {
		display: none;
	}
	.mainDevelop{
		width:100%;
		height:auto;
		margin: 0 auto 50px;
	}
	.devTit{
		display: block;
		width:100%;
		line-height:80px;
		font-size: 18px;
		font-weight: 400;
		text-align: center;
	}
	.developList{
		width:80%;
		height:auto;
		margin:0 auto;
		display: block;
		/* overflow: hidden; */
	}
}
.our-line {
	width: 100px;
	height: 1px;
	background: rgba(216, 216, 216, 1);
	margin: 21px auto;
	position: relative;
}

.our-line::after {
	content: '';
	width: 30px;
	height: 1px;
	background: #6f6f6f;
	position: absolute;
	top: 0;
	left: 35px;
}

.about-history-list {
	width: 90%;
	height: 500px;
	margin: 0 auto;
	z-index: 99;
	position: relative;
}

.about-history-list > .slides {
	width: 100%;
	height: 100%;
}

.swiper-father {
	width: 90%;
	height: 400px;
	position: relative;
	margin: 0 auto;
}

.swiper-container {
	width: 90%;
	height: 100%;
	margin: 0 auto;
}
.swiper-container:after {
	content: '';
	width: 100%;
	height: 1px;
	background: #f0f0f0;
	position: absolute;
	top: 50%;
	left: 0;
	/* z-index: 99; */
}

.swiper-slide {
	/*font-size: 18px;*/
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
.swiper-slide li {
	width: 264px;
	height: 253px;
	position: relative;
}
.swiper-slide li .items {
	width: 100%;
	height: 93px;
	font-size: 31px;
	text-align: center;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: rgba(32, 32, 32, 1);
	line-height: 93px;
	position: absolute;
	left: 0;
	top: 20px;
}
.swiper-slide li .circle {
	width: 23.5px;
	height: 23.5px;
	background-color: #ffffff;
	border: 1px solid #4c82f7;
	border-radius: 50%;
	position: absolute;
	left: 120px;
	top: 113px;
}
.swiper-slide li .desc {
	width: 153px;
	height: 128px;
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(64, 64, 64, 1);
	position: absolute;
	left: 56px;
	top: 150px;
}

.swiper-button-next,
.swiper-button-prev {
	user-select: none;
	outline: none;
}
@media screen and (max-width: 1200px) {
	.about-history-list {
		width: 100%;
	}
	.swiper-father {
		width:100%;
		height: 400px;
		position: relative;
		margin: 0 auto;
	}
}
</style>
<style>
.swiper-pagination-bullet {
	width: 50px;
	height: 10px;
	border-radius: 20px;
	background: #f0f0f0;
	outline: none;
	box-shadow: none;
}

.swiper-pagination-bullet-active {
	background: #f0f0f0;
}
</style>
