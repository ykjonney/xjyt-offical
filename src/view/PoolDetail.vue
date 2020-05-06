<template>
	<div id="pooldetail">
		<div class="nav" style='background: #000000;z-index:9;'></div>
		<div class="poolList">
			<div class="tips" :style="{ backgroundColor: por.laber == 1 ? '#FF334B' : por.laber == 2 ? '#02CB8E' : '#336FF7' }">
				{{ por.laber == 1 ? '售罄' : por.laber == 2 ? '测试中' : '储备中' }}
			</div>
			<div class="poolLeft">
				<div class="names">{{ por.name }}</div>
				<progress class="progress-box" percent="40" activeColor="#3581FF" backgroundColor="#ECECEC" :max="por.info" :value="por.hashrate" />
				<div class="saled">
					可出售存力:
					<span style="color:#E57C00;">{{ por.hashrate }}T</span>
					<span style="color:#999999;">/{{ por.info }}T</span>
				</div>
				<div class="desc_box">
					<div class="item_mill">
						<div class="mill">日理论收益</div>
						<div class="nums">{{ por.theory_earnings }}</div>
					</div>
					<div class="item_mill">
						<div class="mill">存储能力</div>
						<div class="nums">{{ por.harduse }}</div>
					</div>
					<div class="item_mill">
						<div class="mill">管理费</div>
						<div class="nums">免费</div>
					</div>
					<div class="item_mill">
						<div class="mill">售价/年</div>
						<div class="nums">{{ por.price }}</div>
					</div>
					<div class="item_mill">
						<div class="mill">
							技术服务费
							<span><img class='ques' src="../assets/images/question.png" alt="提出问题" /></span>
						</div>
						<div class="nums">{{ por.proportion * 100 }}%</div>
					</div>
					<div class="item_mill">
						<div class="mill">地区</div>
						<div class="nums">{{ por.areaname }}</div>
					</div>
				</div>
			</div>
			<div class="poolRight">
				<div class="payList">
					<div class="tip_title">购买数量:</div>
					<div class="tip_number">
						<div class="int_nums">
							<div class="input_add" @click="buynum_add"></div>
							<div class="input_red" @click="buynum_reduce"></div>
							<input style="text-align: center;" type="number" min="0" v-model='number' />
						</div>
						<div class='bProNum'>
							<div class="red" @click="buynum_reduce(i)">-</div>
							<input class="num" style="text-align: right;" type="number" min="0" v-model="number" />
							<div class="add" @click="buynum_add(i)">+</div>
						</div>
					</div>
				</div>
				<div class="payList pay_methods">
					<div class="tip_title">付费模式:</div>
					<div class="tip_number">
						<div :class="yearindex === index ? 'metss' : 'mets'" @click="onChange(index)" v-for="(item, index) in yearKist"
						 :key="index">{{ item }}</div>
					</div>
				</div>

				<div class="payList">
					<div class="tip_title">支付方式:</div>
					<div class="tip_number">
						<img src="../assets/images/zhifu.png" alt="" class="img" style="vertical-align:middle" />
						<img src="../assets/images/b.png" alt="" class="img" style="vertical-align:middle" />
					</div>
					<div class="tip_number"></div>
				</div>
				<div class='sale_buy'>
					<div class="sale_money">￥{{por.price*number*year || 0}}</div>
					<router-link to="">
						<div class="buypool" @click="buy">立即购买</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class='descrip'>
			<div class='sale_buy_foot'>
				<div class="sale_money_foot">￥{{por.price*number*year || 0}}</div>
				<div class="buypool_foot">
					<div class='buybth' @click="buy">立即购买</div>
				</div>
			</div>
			<div class="productList">
				<router-link to="" :class="['productItem', { active_nav: show === 1 }]" @click.native="checked(1)">矿池介绍</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 2 }]" @click.native="checked(2)">存力介绍</router-link>
				<router-link to="" :class="['productItem', { active_nav: show === 3 }]" @click.native="checked(3)">常见问题</router-link>
			</div>
			<div class="detail_pool">
				<div class="productIntroduce" v-if="show === 1">
					<div v-html="introduce"></div>
				</div>
				<div class="productIntroduce" v-if="show === 2">
					<div v-html="details"></div>
				</div>
				<div class="productIntroduce" v-if="show === 3">
					<div v-html="question"></div>
				</div>

			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	export default {
		data: () => ({
			show: 1,
			number: 1,
			product: [],
			product_num: [],
			por: '',
			info: {},
			yearKist: ['一年', '两年', '三年'],
			yearindex: 0,
			year: 1,
			question: '',
			introduce: '',
			details: ''
		}),
		mounted() {
			try {
				this.por = localStorage.getItem('por');
				this.por = JSON.parse(this.por);
				this.number = this.por.number
			} catch (error) {
				this.$router.push('/pool');
			}

			/* this.$http
      .get(this.urll+"cloudask/")
      .then(res => {
			this.question = res.data.data
      }) */

			this.$http.get(this.urll + "cloudintroduces/?cloudid=" + this.por.id)
				.then(res => {
					console.log(res)
					this.introduce = res.data.message.introduce
					this.details = res.data.message.details
					this.question = res.data.message.question
				})
		},
		methods: {
			checked(index) {
				this.show = index;
			},
			onChange(index) {
				this.yearindex = index;
				this.year = index + 1;
			},
			buy:function(){
				this.$message({
				   message:'请扫描网站底部二维码，关注公众号（或直接联系销售人员）进行购买',
				   duration:1500
				});
				return;
			},
			// getNum(e) {
			// 	this.number = e.detail.value;
			// 	console.log(this.number);
			// },
			buynum_add() {
				this.number++;
			},
			buynum_reduce() {
				if (this.number <= 1) {
					return;
				} else {
					this.number--;
				}
			}
		}
	};
</script>

<style lang="scss">
	.poolList {
		width: 1200px;
		height: 522px;
		margin: 103px auto;
		background-color: #f8f8f8;
		padding: 76px 100px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		position: relative;
	}

	.tips {
		width: 34px;
		height: 38px;
		background-color: #ef9d39;
		position: absolute;
		top: 0;
		left: 18px;
		color: #ffffff;
		font-size: 12px;
		text-align: center;
		line-height: 24px;
	}

	.tips:after {
		content: '';
		width: 28px;
		height: 28px;
		background-color: #f8f8f8;
		transform: rotate(45deg);
		position: absolute;
		top: 30px;
		left: 3px;
	}

	.poolLeft {
		width: 600px;
		height: 100%;
	}

	.img {
		display: initial;
		text-align: center;
		margin-right: 12px;
		margin-left: 12px;
	}

	.progress-box {
		width: 409px;
		height: 6px;
		border-radius: 3px;
		display: block;
		margin: 20rpx;
	}

	progress::-webkit-progress-bar {
		background: #ecedec;
		border-radius: 8px;
	}

	progress::-webkit-progress-value {
		background: #3581ff;
		border-radius: 8px;
	}

	.poolRight {
		width: 600px;
		height: 100%;
		padding-top: 20px;
	}

	.names {
		font-size: 22px;
		color: #202020;
		line-height: 80px;
		font-weight: bold;
	}

	.saled {
		font-size: 14px;
		color: #202020;
		line-height: 80px;
		font-weight: 400;
	}

	.desc_box {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.item_mill {
		width: 33%;
		height: auto;
		float: left;
	}

	.mill {
		color: #404040;
		font-size: 14px;
		line-height: 50px;
		font-weight: 400;
	}

	.ques {
		width: 12px;
		height: 12px;
		margin-left: 6px;
	}

	.nums {
		color: #202020;
		font-size: 22px;
		line-height: 70px;
		font-weight: bold;
	}

	.payList {
		width: 100%;
		height: 40px;
		margin-bottom: 41px;
	}

	.tip_title {
		width: 30%;
		height: 100%;
		float: left;
		line-height: 40px;
		font-size: 14px;
		color: #404040;
	}

	.mets {
		float: left;
		width: 58px;
		height: 32px;
		background: #e9e9e9;
		border-radius: 64px;
		color: #000000;
		font-size: 12px;
		text-align: center;
		line-height: 32px;
		margin-right: 20px;
		cursor: pointer;
	}

	.metss {
		float: left;
		width: 58px;
		height: 32px;
		background: #313b3c;
		border-radius: 64px;
		color: #ffffff;
		font-size: 12px;
		text-align: center;
		line-height: 32px;
		margin-right: 20px;
		cursor: pointer;
	}

	.tip_number {
		width: 70%;
		height: 100%;
		float: left;
	}

	.bProNum {
		display: none;
	}

	.int_nums {
		width: 181px;
		height: 39px;
		border: 1px solid #637489;
		border-radius: 5px;
		position: relative;
	}

	.int_nums>input {
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 5px;
		background-color: none;
		-moz-user-select: none;
		/*火狐*/
		-webkit-user-select: none;
		/*webkit浏览器*/
		-ms-user-select: none;
		/*IE10*/
		-khtml-user-select: none;
		/*早期浏览器*/
		user-select: none;
		position: relative;
	}

	.int_nums:after {
		content: 'TB';
		width: 20px;
		color: #404040;
		font-size: 12px;
		position: absolute;
		top: 12px;
		right: 31px;
	}

	.input_add {
		width: 0;
		height: 0;
		border-right: 8px solid transparent;
		border-left: 8px solid transparent;
		border-bottom: 6px solid #637489;
		cursor: pointer;
		position: absolute;
		top: 12px;
		right: 11px;
		z-index: 9;
	}

	.input_red {
		width: 0;
		height: 0;
		border-right: 8px solid transparent;
		border-left: 8px solid transparent;
		border-top: 6px solid #637489;
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 11px;
		z-index: 9;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	.int_nums>input:focus {
		outline: none;
	}

	.pay_method {
		width: 85px;
		height: 32px;
		float: left;
		border-radius: 16px;
		border: 1px solid #ccc;
		margin-right: 20px;
		text-align: center;
		line-height: 32px;
		font-size: 12px;
		color: #404040;
	}

	.sale_money {
		color: #4c82f7;
		font-size: 22px;
		margin-bottom: 41px;
	}

	.buypool {
		width: 244px;
		height: 68px;
		background-color: #A6A9AD;
		border-radius: 5px;
		color: #ffffff;
		font-size: 16px;
		text-align: center;
		line-height: 68px;
	}

	.sale_buy_foot {
		display: none;
	}

	.productList {
		width: 62%;
		height: 90px;
		margin: 70px auto;
		padding-top: 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #ebebeb;
	}

	.productList>.productItem {
		width: 160px;
		height: 70px;
		line-height: 70px;
		font-size: 16px;
		color: #202020;
		text-align: center;
	}

	.active_nav {
		border-bottom: 1px solid #4c82f7;
		color: #4c82f7 !important;
	}

	.detail_pool {
		width: 62%;
		margin: 20px auto 100px;
	}

	.productIntroduce {
		color: #404040;
		font-size: 14px;
		line-height: 30px;
	}
	@media screen and (max-width: 1200px) {
		.poolList {
			width: 80%;
			height:auto;
			padding:50px;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}
		
		.poolRight {
			padding-top: 50px;
		}
	}

	@media screen and (max-width: 750px) {
		.nav {
			height: 44px !important;
		}

		.poolList {
			width: 100%;
			height: auto;
			background-color: #ffffff;
			margin: 44px auto 0;
			padding: 0;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
		}

		.desa {
			display: block;
		}

		.tips {
			display: none;
		}

		.poolLeft {
			width: 100%;
			height: 286px;
			border-bottom: 1px solid #f2f2f2;
		}

		.poolRight {
			width: 100%;
			height: 200px;
			padding-top: 20px;
		}

		.tip_title {
			width: 30%;
		}

		.tip_number {
			width: 70%;
		}

		.names {
			line-height: 60px;
			text-align: center;
			font-size: 14px;
		}

		.progress-box {
			width: 72%;
			height: 8px;
			margin: 0 auto;
			border-radius: 15px;
		}

		.saled {
			line-height: 30px;
			text-align: center;
		}

		.desc_box {
			width: 100%;
			height: auto;
			margin: 20px auto 30px;
			overflow: hidden;
		}

		.item_mill {
			width: 33%;
			height: auto;
			float: left;
			display: flex;
			flex-direction: column-reverse;
			text-align: center;
		}

		.int_nums {
			display: none;
		}

		.bProNum {
			float: none;
			overflow: hidden;
			display: block;

			.add {
				float: none !important;
				display: inline-block;
				width: 40px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #f0f0f8;
				text-align: center;
				font-weight: bold;
				position: relative;
			}

			.add:after {
				content: 'TB';
				width: 50px;
				height: 40px;
				line-height: 40px;
				color: #323232;
				font-size: 12px;
				position: absolute;
				right: -40px;
				font-weight: 400;
				z-index: 99;
			}

			.num {
				float: none;
				display: inline-block;
				width: 80px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #f0f0f8;
				text-align: right;
				padding: 0 10px;
				margin: 0 10px;
			}

			.red {
				display: inline-block;
				float: none !important;
				width: 40px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #f0f0f8;
				text-align: center;
				font-weight: bold;
			}
		}
        input{
        	border: none;
        }
		.mill {
			line-height: 30px;
			font-size: 14px;
		}

		.nums {
			line-height: 40px;
			font-size: 14px;
		}


		.payList {
			width: 100%;
			height: 40px;
			margin-bottom: 20px;
			padding: 0 20px;
			// background-color: yellow;
			box-sizing: border-box;
		}

		.pay_methods {
			position: relative;
		}

		.tip_title {
			line-height: 40px;
		}

		.img {
			width: 20px;
			height: 20px;
			margin-right: 20px;
			margin-top: 5px;
			position: relative;
		}

		.sale_buy {
			display: none;
		}

		.productList {
			width: 100%;
			height: 50px;
			margin: 10px auto;
			padding-top: 0px;
			box-sizing: border-box;
		}

		.productList>.productItem {
			width: 30%;
			height: 50px;
			line-height: 50px;
		}

		.detail_pool {
			width: 90%;
			margin: 10px auto 20px;
		}

		.descrip {
			position: relative;
		}

		.sale_buy_foot {
			width: 100%;
			height: 56px;
			display: block;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			box-shadow: 0 -2px 10px 10px rgba(0, 0, 0, 0.2);
			position: fixed;
			bottom: 0;
		}

		.sale_money_foot {
			width: 50%;
			height: 100%;
			color: #4c82f7;
			font-size: 20px;
			line-height: 56px;
			text-align: center;
		}

		.buypool_foot {
			width: 50%;
			height: 100%;

		}

		.buybth {
			width: 80%;
			height: 40px;
			margin: 8px auto;
			border-radius: 20px;
			background-color: #367fff;
			line-height: 40px;
			text-align: center;
			color: #FFFFFF;
		}

		.productIntroduce {
			line-height: inherit;
		}
	}
</style>
