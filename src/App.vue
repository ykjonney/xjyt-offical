<template>
	<div id="app">
		<div class="nav">
			<div class="container">
				<router-link class="logo" to="/">
					<img class="icon" :src="companyinfo ? companyinfo[0].img : ''" alt="" />
					<div class="title">{{ companyinfo ? companyinfo[0].nickname : '' }}</div>
				</router-link>
				<div class="infobth">
					<div class="btnlog" @click="login"><router-link to="">登录</router-link></div>
					<div class="btnlog" @click="register"><router-link to="">注册</router-link></div>
				</div>
				<div class="navList">
					<router-link :class="['item', { active: show === 1 }]" to="/"><div @click="checked(1)">网站首页</div></router-link>
					<router-link :class="['item', { active: show === 2 }]" to="/product"><div @click="checked(2)">产品中心</div></router-link>
					<router-link :class="['item', { active: show === 3 }]" to="/pool"><div @click="checked(3)">云矿池</div></router-link>
					<router-link :class="['item', { active: show === 4 }]" to="/news"><div @click="checked(4)">新闻中心</div></router-link>
					<router-link to="" :class="['item', 'about', { active: show === 5 }]">
						<div @click="checked(5)">
							关于我们
							<div class="dropdown drop">                                  
								<router-link to="/companyInfo"><div class="every">公司简介</div></router-link>
								<router-link to="/companyDevelop"><div class="every">发展历程</div></router-link>
								<router-link to="/contact"><div class="every">联系我们</div></router-link>
							</div>
						</div>
					</router-link>
				</div>
				<div class="menu">
					<img src="./assets/images/menulist.png" alt="" @click="showList"/>
					<div class="menulist" v-if="menulist">
						<router-link :class="['menulistitem', { active: show === 1 }]" to="/"><div @click="checkedList">网站首页</div></router-link>
						<router-link :class="['menulistitem', { active: show === 2 }]" to="/product"><div @click="checkedList">产品中心</div></router-link>
						<router-link :class="['menulistitem', { active: show === 3 }]" to="/pool"><div @click="checkedList">云矿池</div></router-link>
						<router-link :class="['menulistitem', { active: show === 4 }]" to="/news"><div @click="checkedList">新闻中心</div></router-link>
						<router-link to="" :class="['menulistitem', 'menulast', { active: show === 5 }]">
							<div @click="showAboutList">
								关于我们
								<div >
									<img v-show="!aboutList" class='showlist' src="./assets/images/showlist.png" alt="" />
									<img v-show="aboutList" class='showlist' src="./assets/images/hiddenList.png" alt="" />
								</div>
								<div class="aboutuslist" v-if="aboutList">
									<router-link to="/companyInfo"><div class="menulistitems" @click="checkedList">公司简介</div></router-link>
									<router-link to="/companyDevelop"><div class="menulistitems" @click="checkedList">发展历程</div></router-link>
									<router-link to="/contact"><div class="menulistitems" @click="checkedList">联系我们</div></router-link>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>
<script src="assets/js/jquery.min.js"></script>
<script>
import './assets/js/jquery.min.js';
import { myfun } from './assets/js/main.js';

export default {
	name: 'App',
	data: () => ({
		show: 1,
		companyinfo: '',
		menulist:false,
		aboutList:false
	}),
	methods: {
		showList(){
			this.menulist=!this.menulist;
		},
		showAboutList(){
			this.aboutList=!this.aboutList
		},
		checkedList(){
			this.menulist=!this.menulist
		},
		/* a: function() {
			const that = this;
			window.screenWidth = document.body.clientWidth;
			that.screenWidth = window.screenWidth;
			console.log(document.body.clientWidth)
			console.log(window.screenWidth)
			if (that.screenWidth < 1300) {
				//alert("宽度" + that.screenWidth);
				let rate = that.screenWidth / 1300;
				let str = Number(rate * 100).toFixed(2);
				//let str1 = (0.5 / 16) * 100;
				let str1=100 * that.screenWidth / 1920 + 'px'
				str += '%';
				console.log(str1)
				console.log(str)
				// alert("缩放了比例" + str);
				// document.write ('<body style="zoom:35%">');
				document.getElementsByTagName('body')[0].style.zoom = str;
				document.getElementsByTagName('body')[0].style.fontSize = str1;
				console.log(document.getElementsByTagName('body')[0])
			}
		}, */
		login() {
			this.$message({
				message: '暂未开通',
				type: 'warning',
				duration:1500
			});
			return;
		},
		register() {
			this.$message({
				message: '暂未开通',
				type: 'warning',
				duration:1500
			});
			return;
		},
		handleScroll: function() {
			myfun();
		},
		checked(index) {
			this.show = index;
			sessionStorage.setItem('show', this.show);
		},
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
		}
	},
	watch: {
		$route(to, from) {
			const self = this;
			if (self.$route.path == '/') {
				self.menulist=false
				self.show = 1;
			} else if (self.$route.path == '/product') {
				self.show = 2;
			} else if (self.$route.path == '/productDetail') {
				self.show = 2;
			} else if (self.$route.path == '/productSale') {
				self.show = 2;
			} else if (self.$route.path == '/pool') {
				self.show = 3;
			} else if (self.$route.path == '/poolDetail') {
				self.show = 3;
			} else if (self.$route.path == '/news') {
				self.show = 4;
			} else if (self.$route.path == '/newsdetail') {
				self.show = 4;
			} else if (self.$route.path == '/companyInfo') {
				self.show = 5;
			} else if (self.$route.path == '/companyDevelop') {
				self.show = 5;
			} else if (self.$route.path == '/contact') {
				self.show = 5;
			}
		}
	},
	mounted() {
		this.fetchCompanyinfo();
		window.addEventListener('scroll', this.handleScroll);
		/* if(document.documentElement.clientWidth<=750){
			document.querySelector('html').style.fontSize='45px'
		} */
	}
};
</script>
<style>
	@import url("assets/css/animate.css");
* {
	margin: 0px;
	padding: 0px;
}
html {
	overflow-y: scroll;
}
.center {
	width: 80%;
}
html,
body {
	position: relative;
	height: 100%;
}

a {
	text-decoration: none;
	color: #fff;
}
body {
	background: #ffffff;
	color: #000;
	margin: 0;
	padding: 0;
}


.nav {
	width: 100%;
	height: 68px;
	position: fixed;
	top: 0;
	z-index: 99;
}
.container {
	width: 80%;
	height: auto;
	margin: 0 auto;
}
.logo {
	float: left;
}
.icon {
	width: 40px;
	height: 40px;
	display: block;
	float: left;
	margin-top: 14px;
}
.title {
	float: left;
	line-height: 68px;
	font-size: 18px;
	color: #fff;
	margin-left: 10px;
}
.actived {
	background-color: rgba(0, 0, 0, 0.8);
}
.item-actived {
	color: #ffffff;
}
.navList {
	float: right;
	display: flex;
	justify-content: space-between;
	margin-right: 90px;
}
.navList > .item {
	width: 100px;
	height: 100%;
	line-height: 60px;
	text-align: center;
	/* text-align:justify;
	text-justify:distribute-all-lines;
	text-align-last:justify; */
	/* margin-right: 30px;
	margin-left: 30px; */
	color: #fff;
	font-size: 14px;
	position: relative;
}

.item:hover {
	font-weight: bold;
}
.navList > .item:before {
	content: '';
	width: 0%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 20%;
	background: #fff;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}
/* .navList>a:nth-child(3):before{
	content: '';
	width:0%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 20%;
	background: #fff;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}
.navList>a:nth-child(3):hover:before{
	content: '';
	width:36%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 30%;
	background: #FFFFFF;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
} */
.navList > a:hover:before {
	content: '';
	width: 45%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 27%;
	background: #fff;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}
.navList > a > .item:nth-last-child(1):hover:before {
	width: 0%;
}
.navList > a > .active {
	font-weight: bold;
}
.navList > .active:before {
	content: '';
	width: 45%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 27%;
	background: #fff;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}
/* .navList >a> .active:hover:before {
	content: '';
	width: 60%;
	height: 2px;
	position: absolute;
	top: 50px;
	left: 0;
	background: #fff;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
} */

.infobth {
	float: right;
	display: flex;
	justify-content: space-around;
	font-size: 14px;
}
.btnlog>a {
	margin-right: 20px;
	line-height: 60px;
	color: #fff;
}
.btnlog:hover {
	font-weight: bold;
}
.about {
	position: relative;
}
.dropdown {
	width: 132px;
	height: 114px;
	position: absolute;
	left: 0;
	top: 60px;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 2px;
	display: flex;
	flex-wrap: wrap;
	justify-items: flex-start;
	z-index: 1;
}

.dropdown > a > .every {
	width: 100%;
	font-size: 12px;
	font-weight: normal;
	line-height: 38px;
	text-align: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	position: relative;
	/* background: #fff; */
}
.every {
	color: #ffffff;
}
.dropdown > a > .every:nth-last-child(1) {
	border: none;
}

.dropdown > a > .every:before {
	background: #1cd0a9;
	content: '';
	width: 0%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
	z-index: -2;
}
.dropdown > a > .every:hover {
	background-color: rgba(0, 0, 0, 0);
}
.dropdown > a > .every:hover:before {
	background: #1cd0a9;
	content: '';
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
	z-index: -2;
}
.drop {
	display: none;
}
.about:hover .drop {
	display: block;
}
/* .every:hover {
	background: #1cd1aa;
	
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-ms-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
} */
.every:hover {
	color: #fff;
}
.menu{
	display: none;
}
.menu > img {
	width: 40px;
	height: 40px;
	float: right;
	position: absolute;
	top: 12px;
	right: 50px;
	/* display: none; */
}
@media screen and (max-width: 1200px) {
	.container {
		width: 90%;
	}
	.navList{
		margin-right: 30px;
	}
	.navList > .item {
		width:80px;
	}
}
@media screen and (max-width: 960px) {
	.container {
		width: 90%;
	}
	.navList{
		margin-right: 10px;
	}
	
}
@media screen and (max-width: 750px) {
     .nav{
		background-color: rgba(0, 0, 0, 0.8);
		height:44px;
	 }
	 .icon {
	 	width: 25px;
	 	height: 25px;
	 	display: block;
	 	float: left;
	 	margin-top: 9px;
	 }
	 .title {
	 	float: left;
	 	line-height: 44px;
	 	font-size: 12px;
	 	color: #fff;
	 	margin-left: 10px;
	 }
	.infobth {
		display: none;
	}
	.navList {
		display: none;
	}
    .menu{
		display: block;
	}
	.menu > img {
		width: 25px;
		height: 25px;
		float: right;
		position: absolute;
		top: 9px;
		right: 20px;
		display: block;
	}
	.menulist {
		width: 100%;
		height: 200px;
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		top: 44px;
		left:0;
	}
	.menulistitem {
		width: 100%;
		text-indent: 40px;
		line-height: 40px;
		color: #ffffff;
		font-size: 12px;
	}
	.menulistitems {
		width: 100%;
		text-indent: 50px;
		line-height:40px;
		color: #ffffff;
		font-size: 12px;
	}
	.menulast{
		background-color: #0000CC;
	}
	.showlist{
		width:25px;
		height:25px;
		display: block;
		position: absolute;
		right:30px;
		bottom:8px;
		z-index: 99;
	}
	.aboutuslist {
		width: 100%;
		height: 120px;
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		top: 244px;
	}
}
</style>
