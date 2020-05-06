<template>
	<!-- 公司简介 -->
	<div>
		<div class="company-banner">
			<img class="ban" src="../assets/images/conpany-banner.png" alt="" />
			<div class="banner-pop">
				<div class="company-name">{{ companyinfo[0].name }}</div>
				<div class="company-infos">{{ about[0].content }}</div>
			</div>
		</div>
		<div class="line_block"></div>
		<div class="culture">
			<div class="our-service">企业文化</div>
			<div class="our-line"></div>
			<div class="culture-content">
				<div class="culture-content-left">
					<img class="culture-img firImg" src="../assets/images/jiazhi.png" alt="" />
					<!-- <div class="culture-content"> -->
					<div class="culture-title firTitle">核心价值观</div>
					<div class="culture-tip firTip">诚信、共赢、创造价值、传递价值</div>
					<!-- </div> -->
				</div>
				<div class="culture-content-right">
					<div class="culture-list">
						<img class="culture-img" src="../assets/images/linian.png" alt="" />
						<!-- <div class='culture-content'> -->
						<div class="culture-title">经营理念</div>
						<div class="culture-tip">诚信为本、合作共赢</div>
						<!-- </div> -->
					</div>
					<div class="culture-list">
						<img class="culture-img" src="../assets/images/yuanjing.png" alt="" />
						<!-- <div class='culture-content'> -->
						<div class="culture-title">愿景</div>
						<div class="culture-tip">区块链行业实践开拓者</div>
						<!-- </div> -->
					</div>
					<div class="culture-list">
						<img class="culture-img" src="../assets/images/mubiao.png" alt="" />
						<!-- <div class='culture-content'> -->
						<div class="culture-title">目标</div>
						<div class="culture-tip">构建互联网信任体系、推动区块链产业发展</div>
						<!-- </div> -->
					</div>
					<div class="culture-list">
						<img class="culture-img" src="../assets/images/jingshen.png" alt="" />
						<!-- <div class='culture-content'> -->
						<div class="culture-title">企业精神</div>
						<div class="culture-tip">诚信、共赢、坚持、创新</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="line_block"></div>
		<div class="culture avg">
			<div class="our-service">公司优势</div>
			<div class="our-line"></div>
			<div class="goodness-list">
				<div class="goodness-list-one">
					<img class="goodness-img" src="../assets/images/jishu.png" alt="" />
					<div class="good-line"></div>
					<div class="good-title">技术优势</div>
					<div class="good-desc">“互联网+区块链+科技”的公司模式，研发成员占比80%,汇聚区块链行业精英人才。</div>
				</div>
				<div class="goodness-list-one">
					<img class="goodness-img" src="../assets/images/fuwu.png" alt="" />
					<div class="good-line"></div>
					<div class="good-title">服务全面</div>
					<div class="good-desc">公司采用软件+硬件相辅相成的服务模式，提供的服务更全面，契合度更高。</div>
				</div>
				<div class="goodness-list-one">
					<img class="goodness-img" src="../assets/images/yunying.png" alt="" />
					<div class="good-line"></div>
					<div class="good-title">强大运营</div>
					<div class="good-desc">专业的新媒体运营团队精细化运营，稳健提升产品质量和服务体验。</div>
				</div>
				<div class="goodness-list-one">
					<img class="goodness-img" src="../assets/images/zijin.png" alt="" />
					<div class="good-line"></div>
					<div class="good-title">资金优势</div>
					<div class="good-desc">公司注册资金为1000万人民币，资本雄厚，优势明显。</div>
				</div>
			</div>
		</div>
		<div class="line_block"></div>
		<div class="culture">
			<div class="our-service">办公环境</div>
			<div class="our-line"></div>
			<div class="office-place">
				坐落于苏州高铁新城高融大厦，大气、清晰，明亮、舒适、整洁的工作环境，为公司优秀服务提供 保障 ，坐落于苏州高铁新城高融大厦，大气、清晰，明亮、舒适、整洁的工作环境，
			</div>
			<div class="office-img">
				<img class="office-img-list" src="../assets/images/environment.jpg" alt="" />
				<img class="office-img-list" src="../assets/images/environments.jpg" alt="" />
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
export default {
	name: 'companyinfo',
	data: () => ({
		companyinfo: [],
		about: []
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
		fetchAbout: function() {
			this.$http
				.get(this.url + '/about/', {
					params: {
						id: this.id
					}
				})
				.then(res => {
					if (res.data.code === 200) {
						this.about = res.data.data.filter(val => {
							return val.category === 'info';
						});
					}
				})
				.catch(() => {});
		}
	},
	mounted() {
		this.fetchCompanyinfo();
		this.fetchAbout();
	}
};
</script>

<style scoped="scoped">
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
	padding-top: 207px;
	box-sizing: border-box;
}

.company-name {
	font-size: 42.44px;
	font-weight: bold;
}

.company-infos {
	width: 65%;
	height: auto;
	margin: 70px auto;
	line-height: 30px;
	font-size: 14px;
}
.line_block {
	display: none;
}
@media screen and (max-width: 1500px) {
	.banner-pop {
		padding-top: 98px;
	}

	.company-name {
		font-size: 32px;
		font-weight: bold;
	}
	.company-infos {
		width: 90%;
		height: auto;
		margin: 50px auto;
		line-height: 30px;
		font-size: 14px;
	}

}
@media screen and (max-width: 1300px) {
	.banner-pop {
		padding-top: 107px;
	}

	.company-name {
		font-size: 32px;
		font-weight: bold;
	}
	.company-infos {
		width: 65%;
		height: auto;
		margin: 30px auto;
		line-height: 30px;
		font-size: 14px;
	}
}

@media screen and (max-width: 750px) {
	.company-banner {
		margin-top: 44px;
	}
	.banner-pop {
		width: 100%;
		height: auto;
		background-color: #ffffff;
		position: inherit;
		color: #202020;
		padding: 20px 0;
	}
	.line_block {
		width: 100%;
		height: 10px;
		background-color: #f2f2f2;
		display: block;
	}
	.company-name {
		line-height: 40px;
		font-size: 20px;
	}
	.company-infos {
		width: 90%;
		line-height: 30px;
		text-align: left;
		margin: 10px auto;
	}
}

.culture {
	width: 100%;
	height: 806px;
	background: #ffffff;
	padding-top: 98px;
	box-sizing: border-box;
}
.avg {
	background: #f8f8f8;
}

.our-service {
	font-size: 30px;
	color: #1d1e22;
	width: 100%;
	height: 29px;
	text-align: center;
	font-weight: bold;
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

.culture-content {
	width: 70%;
	height: 442px;
	margin: 100px auto;
}

.culture-content-left {
	width: 45%;
	height: 100%;
	float: left;
	padding-top: 65px;
	padding-left: 100px;
	box-sizing: border-box;
}

.culture-img {
	width: 82px;
	height: 82px;
	display: block;
}

.culture-title {
	color: #1c1e22;
	font-size: 20px;
	line-height: 80px;
}

.culture-tip {
	color: #2f3138;
	font-size: 14px;
}
.firImg {
	width: 96px;
	height: 96px;
}
.firTitle {
	font-size: 24px;
	color: #1c1e22;
	line-height: 100px;
}
.firTip {
	font-size: 18px;
	color: #2f3138;
}
.culture-content-right {
	width: 55%;
	height: 100%;
	float: right;
	padding-left: 20px;
	box-sizing: border-box;
}

.culture-list {
	width: 50%;
	height: 50%;
	float: left;
	padding-top: 20px;
}

@media screen and (max-width: 750px) {
	.culture {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-top: 30px;
	}
	.our-service {
		font-weight: 600;
		font-size: 24px;
	}
	.culture-content {
		width: 100%;
		height: 422px;
		background-color: #ffffff;
		margin: 20px auto;
	}
	.culture-content-left {
		width: 100%;
		height: auto;
		padding-top: 15px;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
	}
	.firTitle {
		font-size: 16px;
	}
	.firTip {
		font-size: 16px;
	}
	.culture-content-right {
		width: 100%;
		height: auto;
		padding-top: 0;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
	}
	.culture-list {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-top: 15px;
		box-sizing: border-box;
	}
	.culture-img {
		width: 52px;
		height: 52px;
		margin: 10px 20px;
		display: block;
		float: left;
	}
	.culture-content {
		float: right;
	}
	.culture-title {
		color: #1c1e22;
		font-size: 16px;
		line-height: 30px;
		color: #000000;
		font-weight: 600;
		margin-top: 10px;
	}
	.culture-tip {
		color: #2f3138;
	}
	.avg {
		background-color: #ffffff;
	}
}
.company-goodness {
	width: 100%;
	height: 894.3px;
	background: #f8f8f8;
}

.goodness-list {
	width: 60%;
	height: 46%;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
}

.goodness-list-one {
	width: 23%;
	height: 100%;
	background: #ffffff;
	padding-top: 33px;
	box-sizing: border-box;
	overflow: hidden;
}

.goodness-img {
	width: 66px;
	height: 66px;
	display: block;
	margin: 0 auto;
}

.good-line {
	width: 77%;
	height: 2px;
	background: rgba(245, 247, 250, 1);
	margin: 38px auto 49px;
}

.good-title {
	color: #1c1e22;
	font-size: 20px;
	text-align: center;
}

.good-desc {
	color: #2f3138;
	font-size: 14px;
	width: 74%;
	height: 63px;
	margin: 26px auto;
	line-height: 21px;
}
@media screen and (max-width: 1500px) {
	.culture-content {
		width: 90%;
	}
	.goodness-list {
		width: 90%;
	}
}
@media screen and (max-width: 1200px) {
	.culture-content {
		width: 100%;
	}
	.goodness-list {
		width: 100%;
	}
}
@media screen and (max-width: 750px) {
	.culture {
		height: auto;
		padding-bottom: 20px;
		box-sizing: border-box;
	}
	.goodness-list {
		width: 100%;
		height: 540px;
		margin: 20px auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.goodness-list-one {
		width: 42%;
		height: 50%;
		background: #ffffff;
		padding-top: 10px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.goodness-img {
		width: 58px;
		height: 58px;
		display: block;
		margin: 0 auto;
	}
	.good-line {
		display: none;
	}
	.good-title {
		font-weight: 600;
		margin-top: 20px;
	}
	.good-desc {
		text-align: center;
		height: 120px;
		margin: 26px auto;
		line-height: 20px;
	}
}
.office-place {
	width: 100%;
	height: 14px;
	text-align: center;
	color: #2f3138;
	font-size: 14px;
	margin-top: 98px;
}

.office-img {
	width: 57%;
	height: auto;
	margin: 121px auto;
	display: flex;
	justify-content: space-between;
}

.office-img-list {
	width: 44%;
	height: auto;
}
@media screen and (max-width: 750px) {
	.office-place {
		width: 90%;
		height: 90px;
		margin: 20px auto;
		line-height: 30px;
		text-align: center;
	}
	.office-img {
		width: 96%;
		height: 125px;
		margin: 80px auto 40px;
		overflow: hidden;
		display: flex;
		justify-content: space-around;
	}

	.office-img-list {
		width: 45%;
		height: auto;
		display: block;
		border-radius: 5px;
	}
}
</style>
