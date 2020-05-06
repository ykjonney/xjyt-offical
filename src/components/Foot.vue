<template>
	<div>
		<div class="footer">
			<div class="footContent">
				<div class="footLeft">
					<div class="footList">
						<div class="footItem1 footTitle" >产品中心</div>
						<router-link to="/product"><div class="footItem on">星际王者矿机</div></router-link>
						<router-link to="/pool"><div class="footItem on">星际矿池</div></router-link>
					</div>
					<div class="footList">
						<div class="footItem1 ">关于我们</div>
						<router-link to="/companyInfo"><div class="footItem on">公司简介</div></router-link>
						<router-link to="/companyDevelop"><div class="footItem on ">发展历程</div></router-link>
						<router-link to="/contact"><div class="footItem on">联系我们</div></router-link>
					</div>
					<div class="footList ">
						<div class="footItem1 ">友情链接</div>
						<a href="https://filecoin.io/" target="_blank"><div class="footItem on">Filecoin官网</div></a>
						<a href="http://ipfs.cngxjj.com/" target="_blank"><div class="footItem on ">IPFS中国社区</div></a>
					</div>
				</div>
				<div class="footRight">
					<div class="emcode">
						<div class="codeList">
							<img src="../assets/images/weixin.jpg" mode="" />
							<div class="codename">微信公众号</div>
						</div>
						<div class="codeList">
							<img src="../assets/images/wechat.jpg" mode="" />
							<div class="codename">微信订阅号</div>
						</div>
						<div class="codeList">
							<div class="appcode"><div id="qrcode" ref="qrcode"></div></div>
							<div class="codename downloadapp">APP下载</div>
						</div>
					</div>
					<input id="text" type="hidden" value="https://xjyt2.oss-cn-shanghai.aliyuncs.com/xjyt_app/xjyt_android_app_20200116_v1.0.0.apk" style="width:80%" />
					<br />
				</div>
			</div>
			<div class="txts_foot">苏ICP备18062647号 © 2019 Suzhou Interplantary Cloud Blockchain Co.Ltd All Rights Reserves</div>
		</div>
	</div>
</template>
<script type="text/javascript" src="../assets/js/jquery.min.js"></script>
<script type="text/javascript" src="../assets/js/qrcode.js"></script>
<script>
import QRCode from 'qrcodejs2';
export default {
	data() {
		return {};
	},
	onLoad() {},
	components: {
		QRCode
	},
	mounted() {
		var that=this;
		var isFHD = document.documentElement.clientWidth > 750 ? true : false;
		//alert(screen.width)
		(function() {
			
			if (isFHD) {
				that.qrcode();
			} else {
				that.qrcode_();
			}
		})();
	},
	methods: {
		qrcode() {
			let qrcode = new QRCode('qrcode', {
				width: 72,
				height: 72, // 高度
				text: 'http://webs.ipcn.xyz/version/download' // 二维码内容
				// render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
				// background: '#f0f'
				// foreground: '#ff0'
			});
		},
		qrcode_() {
			let qrcode = new QRCode('qrcode', {
				width: 76,
				height: 76, // 高度
				text: 'http://webs.ipcn.xyz/version/download' // 二维码内容
				// render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
				// background: '#f0f'
				// foreground: '#ff0'
			});
		}
	}
};
</script>

<style scoped="scoped">
.footer {
	width: 100%;
	height: 325px;
	background: #f5f5f7;
	padding-top: 30px;
	box-sizing: border-box;
}

.footContent {
	width: 75%;
	height: 219px;
	margin: 0 auto;
}

.footContent > .footLeft {
	width: 55%;
	height: 100%;
	display: flex;
	float: left;
	justify-content: space-between;
}

.footContent > .footLeft > .footList {
	width: 30%;
	height: 100%;
}
.footTitle{
	color:#202020;
    font-size: 16px;
    font-weight: 200;
}
.footItem {
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 14px;
	color: #404040;
	text-align: center;
}
.footItem1 {
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	color: #404040;
    font-weight: 600;
	text-align: center;
}
.footContent > .footRight {
	width: 45%;
	height: 100%;
	float: left;
	padding: 20px 150px 20px 50px;
	box-sizing: border-box;
}

.emcode {
	display: flex;
	justify-content: space-around;
}

.codeList {
	width: 84px;
	height: 114px;
}
.codeList > img {
	width: 100%;
	height: 84px;
	display: block;
}
.appcode {
	display: block;
	width: 84px;
	height: 84px;
	padding-top: 6px;
	padding-left: 6px;
	box-sizing: border-box;
	text-align: center;
	background-color: #ffffff;
}

#qrcode {
	display: block;
	margin: 7rpx auto;
}

.codeList > .codename {
	line-height: 30px;
	text-align: center;
	color: #404040;
	font-size: 12px;
}

.on:hover {
	text-decoration: underline;
	color: #404040;
	font-weight: 600;
	cursor: pointer;
}

a {
	text-decoration: none;
	color: #a5a5a5;
}

.txts_foot {
	width: 75%;
	height: 72px;
	text-align: center;
	border-top: 1px solid #d2d2d7;
	line-height: 72px;
	margin: 0 auto;
	color: #404040;
	font-size: 10px;
}
@media screen and (max-width:1320px) {
	.footContent{
		width:90%;
	}
	.footContent > .footLeft {
		width: 50%;
		height: 100%;
		display: flex;
		float: left;
		justify-content: space-between;
	}
	.footContent > .footRight {
		width: 50%;
		height: 100%;
		float: left;
		padding: 20px 30px;
		box-sizing: border-box;
	}
}
@media screen and (max-width: 750px) {
	.footer {
		width: 100%;
		height: auto;
		background: #303030;
	}
	.footContent {
		width: 100%;
		height:400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		flex-direction: column-reverse;
	}
	.footContent > .footLeft {
		width: 82%;
		height: 50%;
		box-sizing: border-box;
		padding:0 40px;
		margin:0 auto;
	}
	.footContent > .footLeft > .footList {
		width: 30%;
		height: 100%;
	}
	.footItem {
		width: 100%;
		font-size: 14px;
		color: #ffffff;
		text-align: left;
		padding-left: 0px;
	}
	.footItem1 {
	    width: 100%;
	    color: #ffffff;
	    text-align: left;
	    padding-left: 0px;
		font-size: 16px;
	    font-weight:normal;
	}
	.footTitle{
		color:#FFFFFF;
	    font-size: 16px;
	}
	.on{
		font-weight: normal;
	}
	.footContent > .footRight {
		width: 72%;
		height: 50%;
		float: left;
		padding: 0 10px;
		box-sizing: border-box;
		margin:0 auto;
	}
    
	.emcode {
		display: flex;
		justify-content: space-between;
	}
	.codeList {
		width: 88px;
		height: 128px;
	}
	.codeList > img {
		width: 88px;
		height: 88px;
		margin:0 auto;
		display: block;
	}
	.codeList > .codename {
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
		font-size: 8px;
	}
	.downloadapp{
		width:88px;
		text-align: center;
	}
	.appcode {
		display: block;
		width: 88px;
		height: 88px;
		padding-top: 6px;
		padding-left: 6px;
		box-sizing: border-box;
		text-align: center;
		background-color: #ffffff;
	}
	.txts_foot {
		display: none;
	}
}
@media screen and (max-width: 375px) {
	.footContent {
		width: 100%;
		height:360px;
	}
	.footContent > .footRight {
		width: 96%;
		height: 45%;
		float: left;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.footContent > .footLeft {
		width: 96%;
		height: 55%;
		box-sizing: border-box;
		padding:0px 20px;
		margin:0 auto;
	}
	
}
</style>
