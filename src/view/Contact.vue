<template>
	<!-- 联系我们 -->
	<div>
		<div class="company-banner">
			<img src="../assets/images/contact-banner.png" alt="" />
			<div class="banner-pop">
				<div class="company-name">联系我们</div>
				<!-- <div class="company-infos">主页 / 联系我们</div> -->
			</div>
		</div>
		<div class="contact-us">
			<div class="language">联系我们</div>
			<div class="our-line"></div>
			<div class="information ">
				<div class="infoList" v-for="(item, index) in product" :key="index">
					<div class="art"><img class="art_img1" src="../assets/images/zix.png" alt="" /></div>
					<div class="txt">产品咨询</div>
					<div class="our-line"></div>
					<div class="info"><img :src="item.img" alt="" /></div>
					<div class="info">请查阅服务号</div>
				</div>

				<div class="boder"></div>
				<div class="infoList " v-for="(item, index) in art" :key="index">
					<div class="art"><img class="art_img2" src="../assets/images/jis.png" alt="" /></div>
					<div class="txt">技术支持</div>
					<div class="our-line"></div>
					<div class="info"><img :src="item.img" alt="" /></div>
					<div class="info">请查阅订阅号</div>
				</div>

				<div class="boder"></div>
				<div class="infoList " v-for="(item, index) in business" :key="index">
					<div class="art"><img class="art_img3" src="../assets/images/shw.png" alt="" /></div>
					<div class="txt">商务合作</div>
					<div class="our-line"></div>
					<div class="info infoLast">{{ item.phone }}</div>
					<div class="info infoLast">{{ item.email }}</div>
				</div>
			</div>
		</div>
		<div class="lines"></div>
		<div class="saleInfo">
			<div class="language">销售热线</div>
			<div class="our-line"></div>
			<div class="saleContent">
				<div class="saleList" v-for="(item, index) in saleInfo" :key="index">
					<div class="saleImg"><img src="../assets/images/sale_phone.png" alt="" /></div>
					<div class="saleDesc">
						<div class="sale_txt1">全国统一销售热线</div>
						<div class="sale_txt2">{{item.name}} {{item.phone}}</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="lines"></div>
		<div class="message">
			<form @submit.prevent="showData" autocomplete="off">
				<div class="language">给我们留言</div>
				<div class="our-line"></div>
				<div class="news">
					<div class="line">
						<div class="name"><input type="text" placeholder="称呼*" name="name" v-model="formObj.name" /></div>
						<div class="tel"><input type="tel" name="mobile" placeholder="手机号*" v-model="formObj.mobile" /></div>
					</div>
					<!-- <div class="line">
					    <div class="email"><input type="email" name="email" placeholder="邮箱*" v-model="formObj.email" /></div>
						<div class="theme"><input type="text" name="title" placeholder="主题*" v-model="formObj.title" /></div>
						<div class="tel"><input type="tel" name="mobile" placeholder="电话*" v-model="formObj.mobile" /></div>
					</div> -->
					<div class="suggest"><textarea name="message" id="" placeholder="提出你的疑问" v-model="formObj.message"></textarea></div>
					<div class="button"><input type="submit" value="发送" /></div>
				</div>
				<div class="news_mobile">
					<div class="line">
						<div class="name"><input type="text" name="name" v-model="formObj.name" /></div>
						<div class="tel"><input type="tel" name="mobile" v-model="formObj.mobile" /></div>
					</div>
					<div class="suggest"><textarea name="message" id="" v-model="formObj.message"></textarea></div>
					<div class="button"><input type="submit" value="发送" /></div>
				</div>
			</form>
		</div>
		<div class="maparea">
			<div class="info_message">
				<div class="info_List">
					<div class="icons"><img class="icon_img_address" src="../assets/images/address.png" mode="" /></div>
					<div class="info_text">{{ companyinfo[0].address }}</div>
				</div>
				<div class="info_List">
					<div class="icons"><img class="icon_img_mobile" src="../assets/images/mobile.png" mode="" /></div>
					<div class="info_text">{{ companyinfo[0].phone }}</div>
				</div>
				<div class="info_List">
					<div class="icons"><img class="icon_img_emails" src="../assets/images/emails.png" mode="" /></div>
					<div class="info_text">{{ companyinfo[0].email }}</div>
				</div>
			</div>
			<div class="map" id="allmap"><myMap></myMap></div>
		</div>

		<div class="info_message_mobile">
			<div class="messagelist">电话： {{ companyinfo[0].phone }}</div>
			<div class="messagelist">电子邮箱： {{ companyinfo[0].email }}</div>
			<div class="messagelist">地址： {{ companyinfo[0].address }}</div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=GQj2koEmbeYhjdw7kXsQzSxKuTxMM0AF"></script>
<script>
import Map from '../components/Map';
export default {
	data: () => ({
		companyinfo: '',
		product: '',
		art: '',
		business: '',
		formObj: {
			name: '',
			title: '',
			mobile: '',
			email: '',
			message: ''
		},
		saleInfo:''
	}),
	components: {
		myMap: Map
	},

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
			this.$http
				.get(this.url + '/companymobile/', {})
				.then(res => {
					console.log(res);
					if (res.status === 200) {
						this.product = res.data.data.filter(val => {
							return val.category === 'product';
						});
						this.art = res.data.data.filter(val => {
							return val.category === 'art';
						});
						this.business = res.data.data.filter(val => {
							return val.category === 'business';
						});
					}
				})
				.catch(() => {});
		},
		fetchSaleInfo() {
			this.$http
				.get(this.url + '/selltel/', {})
				.then(res => {
					//console.log(res)
					if (res.data.code === 200) {
						this.saleInfo = res.data.data;
					} else {
						
					}
				})
				.catch(() => {});
		},
		showData: function() {
			if (!this.formObj.name) {
				this.$message({
					message: '请输入姓名',
					type: 'warning',
					duration:1500
				});
				return;
			}

			if (!this.formObj.mobile) {
				this.$message({
					message: '请输入手机号',
					type: 'warning',
					duration:1500
				});
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.formObj.mobile)) {
				this.$message({
					message: '手机号码有误，请重填',
					type: 'warning',
					duration:1500
				});
				return false;
			}
			if (!this.formObj.message) {
				this.$message({
					message: '请提出您的疑问',
					type: 'warning',
					duration:1500
				});
				return;
			}
			this.$http
				.post(this.url + '/feedback/', {
					name: this.formObj.name,
					title: this.formObj.title,
					mobile: this.formObj.mobile,
					email: this.formObj.email,
					message: this.formObj.message
				})
				.then(res => {
					if (res.status === 200) {
						this.$message({
							showClose: true,
							message: '留言成功',
							type: 'success',
							duration:1500
						});
						this.formObj.name = '';
						this.formObj.email = '';
						this.formObj.message = '';
						this.formObj.title = '';
						this.formObj.mobile = '';
					} else {
						this.$message.error('留言失败');
					}
				})
				.catch(() => {});
		}
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
				let str1 = (1 / 16) * 100;
				str1 += '%';
				str += '%';
				console.log(str1)
				console.log(str)
				// alert("缩放了比例" + str);
				// document.write ('<body style="zoom:35%">');
				document.getElementsByTagName('body')[0].style.zoom = str;
				document.getElementsByTagName('body')[0].style.fontSize = str1;
				console.log(document.getElementsByTagName('body')[0])
			}
		} */
	},
	mounted() {
		this.fetchCompanyinfo();
		this.fetchSaleInfo();
	}
};
</script>
<style>
.map > .BMap_cpyCtrl {
	display: none !important;
}
.map > .anchorBL {
	display: none !important;
}
</style>

<style scoped="scoped">
.company-banner {
	width: 100%;
	height: auto;
	overflow: hidden;
	position: relative;
}
.company-banner > img {
	width: 100%;
	height: auto;
	display: block;
}
.banner-pop {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	/* left: 0; */
	color: #ffffff;
	text-align: center;
	padding-top: 309px;
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

.center {
	margin: 0 auto;
}

.contact-us {
	width: 100%;
	height: 480px;
	padding-top: 98px;
}

.information {
	height: 380px;
	width: 60%;
	margin: 66px auto 50px;
	display: flex;
	justify-content: space-around;
}

.information > .infoList {
	width: 200px;
	height: 250px;
	padding-top: 40px;
	box-sizing: border-box;
	/* box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); */
}

.information > .infoList > .art {
	display: block;
	margin: 0 auto;
}

.information > .infoList > .art > img {
	display: block;
	margin: 0 auto;
}
.art_img1 {
	width: 42px;
	height: 44px;
}
.art_img2 {
	width: 44px;
	height: 41px;
}
.art_img3 {
	width: 71px;
	height: 42px;
}

.information > .infoList > .txt {
	width: 100%;
	height: 30px;
	margin: 20px auto 10px;
	text-align: center;
	letter-spacing: 10px;
	font-size: 24px;
	color: #262626;
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

.information > .infoList > .info {
	width: 100%;
	line-height: 25px;
	font-size: 14px;
	text-align: center;
	color: #6a6a6a;
}
.infoLast {
	width: 100%;
	line-height: 50px !important;
	font-size: 14px;
	text-align: center;
	color: #6a6a6a;
}
.information > .infoList > .info > img {
	width: 80px;
	height: 80px;
	display: block;
	margin: 0 auto;
}
.boder {
	height: 50%;
	display: block;
	margin: 86px auto;
	border: 1px solid #f5f5f5;
}
.saleInfo {
	width: 100%;
	height: 320px;
	padding-top: 98px;
	margin:0 auto;
}
.saleContent {
	width: 60%;
	height: auto;
	background-color: #f9f9f9;
	margin: 80px auto;
	padding: 40px 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}
.saleList {
	width: 240px;
	height: 98px;
	margin-bottom: 5px;
	background-color: #ffffff;
}
.saleImg {
	width: 40px;
	height: 40px;
	display: block;
	margin: 29px 20px;
	float: left;
}
.saleImg > img {
	width: 100%;
	height: 100%;
	display: block;
}
.saleDesc {
	width: 150px;
	height: 100%;
	float: left;
}
.sale_txt1 {
	width: 100%;
	height: 25px;
	margin-top: 26px;
	font-size: 14px;
	color: #555555;
}
.sale_txt2 {
	width: 100%;
	height: 25px;
	font-size: 14px;
	color: #555555;
}
@media screen and (max-width: 1600px) {
	.banner-pop {
		padding-top: 189px;
	}
	.company-name {
		font-size: 36px;
	}
	.saleInfo {
		width: 90%;
		height: 380px;
		padding-top: 98px;
	}
	.saleContent {
		width: 80%;
		margin:100px auto;
	}
	.information {
		width: 80%;
	}
}
@media screen and (max-width: 1200px) {
	.banner-pop {
		padding-top: 139px;
	}
	.company-name {
		font-size: 30px;
	}
	.message {
		width: 90%;
		height: 700px;
		margin: 98px auto;
		padding-top: 98px;
	}
	.news > .line {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.news > .line > .name {
		width: 100%;
		height: 100%;
		margin-bottom: 30px;
	}

	.news > .line > .tel {
		width: 100%;
		height: 100%;
		margin-bottom: 30px;
	}

	.news > .suggest {
		width: 100%;
		height: 290px;
		margin-top: 30px;
	}
	input {
		width: 100%;
		height: 50px;
	}
	textarea {
		width: 100%;
		height: 290px;
	}
}
@media screen and (max-width: 750px) {
	.company-banner {
		margin-top: 44px;
		width: 100%;
		height: auto;
	}
	.company-banner > img {
		width: 100%;
		height: auto;
		display: block;
	}
	.banner-pop {
		padding-top: 35px;
	}

	.company-name {
		font-size: 18px;
	}
	.infoLast {
		width: 100%;
		line-height: 30px !important;
		font-size: 14px;
		text-align: center;
		color: #6a6a6a;
	}
	.our-line {
		display: none;
	}

	.contact-us {
		width: 100%;
		height: auto;
		padding-top: 28px;
	}
	.information {
		width: 100%;
		height: auto;
		margin: 0 auto;
		margin-top: 40px;
		display: flex;
		justify-content: space-around;
	}
	.information > .infoList {
		width: 100%;
		height: 230px;
		padding-top: 0px;
		box-sizing: border-box;
	}

	.information > .infoList > .art > img {
		display: block;
		margin: 0 auto;
	}
	.art_img1 {
		width: 26px;
		height: 25px;
		display: block;
	}
	.art_img2 {
		width: 28px;
		height: 28px;
		display: block;
	}
	.art_img3 {
		width: 30px;
		height: 28px;
		display: block;
	}
	.information > .infoList > .txt {
		height: 30px;
		font-size: 18px;
		margin: 20px auto 10px;
		letter-spacing: 2px;
	}
	.information > .infoList > .info {
		font-size: 14px;
		line-height: 10px;
	}

	.information > .infoList > .info > img {
		width: 44px;
		height: 44px;
		display: block;
		margin: 0 auto;
	}
	.lines {
		width: 100%;
		height: 10px;
		background-color: #f2f2f2;
	}
	/* 移动端销售热线 */
	.saleInfo {
		width: 100%;
		height: auto;
		padding-top: 28px;
		padding-bottom: 20px;
	}
	.saleContent {
		width: 100%;
		height: auto;
		background-color: #f9f9f9;
		margin: 20px auto;
		padding: 40px 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.saleList {
		width: 240px;
		height: 98px;
		margin-bottom: 5px;
		background-color: #ffffff;
	}
	.saleImg {
		width: 40px;
		height: 40px;
		margin: 29px 20px;
		display: block;
		float: left;
	}
	.saleImg > img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.saleDesc {
		width: 150px;
		height: 100%;
		float: left;
	}
	.sale_txt1 {
		width: 100%;
		height: 25px;
		margin-top: 26px;
		font-size: 14px;
	}
	.sale_txt2 {
		width: 100%;
		height: 25px;
		font-size: 14px;
	}
}
.message {
	width: 1120px;
	height: 700px;
	margin: 98px auto;
	padding-top: 98px;
}

.language {
	width: 100%;
	height: 60px;
	line-height: 60px;
	font-size: 30px;
	color: #252525;
	text-align: center;
	font-weight: bold;
}
.news_mobile {
	display: none;
}
.news {
	width: 100%;
	height: 550px;
	margin-top: 100px;
}

.news > .line {
	height: 50px;
	margin-bottom: 30px;
}

.news > .line > .name {
	width: 500px;
	height: 100%;
	float: left;
}

.news > .line > .email {
	width: 500px;
	height: 100%;
	float: left;
}

.news > .line > .theme {
	width: 500px;
	height: 100%;
	float: left;
}

.news > .line > .tel {
	width: 500px;
	height: 100%;
	float: right;
}

.news > .suggest {
	width: 100%;
	height: 290px;
}

input {
	width: 500px;
	height: 50px;
	line-height: 50px;
	border: 1px solid rgba(211, 211, 211, 1);
	padding-left: 5px;
	box-sizing: border-box;
}

input:focus {
	outline: none;
}

textarea {
	width: 1120px;
	height: 290px;
	line-height: 50px;
	border: 1px solid rgba(211, 211, 211, 1);
	resize: none;
	padding-left: 5px;
	box-sizing: border-box;
}

textarea:focus {
	outline: none;
}

.button {
	width: 150px;
	height: 40px;
	margin-top: 20px;
}
input[type='submit'] {
	background: #4c82f7;
	width: 150px;
	height: 40px;
	line-height: 40px;
	border-radius: 5px;
	color: #fff;
	font-size: 14px;
}

@media screen and (max-width: 750px) {
	.saleContent {
		padding: 20px 0px;
	}
	.language {
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 24px;
		color: #252525;
		text-align: center;
		font-weight: 400;
	}
	.message {
		width: 80%;
		height: 380px;
		margin: 20px auto;
		padding-top: 0px;
	}
	.news {
		display: none;
	}
	/* 给我们留言 */
	.news_mobile {
		display: block;
		width: 80%;
		height: 340px;
		margin-top: 30px;
		float: right;
	}
	.news_mobile > .line {
		width: 100%;
		height: 120px;
	}
	.news_mobile > .line > .name {
		width: 100%;
		height: 50px;
		margin-bottom: 10px;
		display: inline-block;
		position: relative;
	}
	.news_mobile > .line > .name:after {
		content: '称呼';
		color: #000000;
		font-weight: 400;
		line-height: 50px;
		font-size: 16px;
		text-align: right;
		width: 100px;
		height: 50px;
		position: absolute;
		left: -120px;
		top: 0;
	}
	.news_mobile > .line > .name:before {
		content: '*';
		color: red;
		font-weight: 400;
		font-size: 16px;
		line-height: 50px;
		text-align: right;
		width: 40px;
		height: 50px;
		position: absolute;
		left: -100px;
		top: 0;
	}

	.news_mobile > .line > .tel {
		width: 100%;
		height: 50px;
		margin-bottom: 10px;
		display: inline-block;
		position: relative;
	}
	.news_mobile > .line > .tel:after {
		content: '手机号';
		color: #000000;
		font-weight: 400;
		font-size: 16px;
		line-height: 50px;
		text-align: right;
		width: 100px;
		height: 50px;
		position: absolute;
		left: -120px;
		top: 0;
	}
	.news_mobile > .line > .tel:before {
		content: '*';
		color: red;
		font-weight: 400;
		font-size: 16px;
		line-height: 50px;
		width: 40px;
		height: 50px;
		position: absolute;
		left: -85px;
		top: 0;
	}
	.news_mobile > .suggest {
		width: 100%;
		height: 90px;
		position: relative;
	}
	.news_mobile > .suggest:after {
		content: '提出你的疑问';
		color: #000000;
		font-weight: 400;
		font-size: 16px;
		line-height: 30px;
		text-align: right;
		width: 60px;
		height: 60px;
		line-height: 30px;
		position: absolute;
		left: -80px;
		top: 0;
	}
	.news_mobile > .suggest:before {
		content: '*';
		color: red;
		font-weight: 600;
		line-height: 30px;
		width: 40px;
		height: 60px;
		position: absolute;
		left: -90px;
		top: 0;
	}
	input {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border: none;
		padding-left: 5px;
		box-sizing: border-box;
		background-color: #edf0f5;
		border-radius: 5px;
	}
	textarea {
		width: 100%;
		height: 90px;
		line-height: 30px;
		border: none;
		resize: none;
		padding-left: 5px;
		box-sizing: border-box;
		background-color: #edf0f5;
		border-radius: 5px;
	}

	.button {
		width: 60px;
		height: 30px;
		margin-top: 52px;
		text-align: center;
		float: right;
	}
	input[type='submit'] {
		background: #4c82f7;
		width: 60px;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		color: #fff;
		font-size: 14px;
	}
}
/* .address {
	height: 30px;
	line-height: 30px;
	margin-top: 30px;
	font-size: 20px;
	letter-spacing: 10px;
	border-left: 3px solid #21b2f1;
	padding-left: 10px;
	box-sizing: border-box;
} */
.maparea {
	width: 100%;
	height: 600px;
	margin: 125px auto 56px;
	position: relative;
}
.map {
	width: 100%;
	height: 100%;
}

.info_message {
	width: 650px;
	height: 163px;
	background-color: #ffffff;
	position: absolute;
	bottom: 50px;
	left: calc((100% - 650px) / 2);
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	z-index: 999;
}

.info_List {
	height: 50px;
}

.icons {
	width: 10%;
	float: left;
}

.icons > img {
	display: block;
	margin-top: 18px;
	margin-left: 30px;
}
.icon_img_address {
	width: 13px;
	height: 17px;
}
.icon_img_mobile {
	width: 13px;
	height: 13px;
}
.icon_img_emails {
	width: 17px;
	height: 12px;
}
.info_text {
	width: 90%;
	float: left;
	color: #262626;
	font-size: 14px;
	line-height: 50px;
}
.info_message_mobile {
	display: none;
}
@media screen and (max-width: 750px) {
	.maparea {
		width: 94%;
		height: 230px;
		margin: 50px auto 10px;
	}
	.info_message {
		display: none;
	}
	.info_message_mobile {
		width: 100%;
		height: 123px;
		display: block;
		padding: 20px 0;
	}
	.messagelist {
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
}
</style>
