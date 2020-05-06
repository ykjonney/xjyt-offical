<template>
	<!-- 云矿池 -->
	<div>
		<div><img class="ban" src="../assets/images/pool-banner.png" alt /></div>
		<div class="desa" style="width:100%;height:6px;background-color: #f2f2f2;"></div>
		<div v-for="(por, i) in info" :key="por.id">
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
							<div class="mill">售价/年</div>
							<div class="nums">{{ por.price }}</div>
						</div>
						<div class="item_mill">
							<div class="mill">
								技术服务费
								<span><img class="ques" src="../assets/images/question.png" alt="提出问题" /></span>
							</div>
							<div class="nums">{{ por.proportion * 100 }}%</div>
						</div>
					</div>
				</div>
				<div class="poolRight">
					<div class="payList">
						<div class="tip_title">购买数量:</div>
						<div class="tip_number">
							<div class="int_nums">
								<div class="input_add" @click="buynum_add(i)"></div>
								<input style="text-align: center;" type="number" min="0" v-model="por.number" />
								<div class="input_red" @click="buynum_reduce(i)"></div>
							</div>
							<div class='bProNum'>
								<div class="red" @click="buynum_reduce(i)">-</div>
								<input class="num" style="text-align: right;" type="number" min="0" v-model="por.number" />
								<div class="add" @click="buynum_add(i)">+</div>
							</div>
						</div>
					</div>
					<div class="payList pay_methods">
						<div class="tip_title">付费模式:</div>
						<div class="tip_number">
							<div :class="por.year == index ? 'metss' : 'mets'" @click="onChange(i, index)" v-for="(item, index) in yearKist" :key="index">{{ item }}</div>
						</div>
					</div>

					<div class="payList">
						<div class="tip_title">支付方式:</div>
						<div class="tip_number">
							<img src="../assets/images/zhifu.png" alt="" class="img img_fir" style="vertical-align:middle" />
							<img src="../assets/images/b.png" alt="" class="img img_sec" style="vertical-align:middle" />
						</div>
					</div>
					<div class="sale_buy">
						<div class="sale_money">￥{{ por.price * por.number * year || 0}}</div>
						<div class="buypool" @click="onBuy(por)">立即购买</div>
					</div>
				</div>
			</div>
			<div class="desa" style="width:100%;height:6px;background-color: #f2f2f2;"></div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: {},
			yearKist: ['一年', '两年', '三年'],
			yearindex: 0,
			year1: 0,
			lotio: [],
			number: 1,
			year: 1
		};
	},
	mounted() {
		var that = this;
		this.$http
			.get(this.urll + 'cloudinfos/')
			.then(res => {
				that.info = res.data.message;
				that.info.map(val => {
					val.year = 0;
					val.number = 1;
				});
			})
			.catch(err => {});
	},
	methods: {
		onChange(i, index) {
			let por = this.info[i];
			por.year = index;
			this.year = index + 1;
			this.$set(this.info, i, por);
		},
		onBuy(por) {
			localStorage.setItem('por', JSON.stringify(por));
			this.$router.push('/poolDetail');
		},
		// getNum(e) {
		// 	this.number = e.detail.value;
		// 	console.log(this.number);
		// },
		buynum_add(i) {
			var item = this.info[i];
			// console.log(item);
			++item.number;
			// console.log(item);
			this.$set(this.info, i, item);
			// console.log(this.info);
		},
		buynum_reduce(i) {
			var item = this.info[i];
			if (item.number <= 1) {
				return;
			} else {
				--item.number;
				this.$set(this.info, i, item);
			}
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
.ban {
	width: 100%;
}
.desa {
	display: none;
}
.poolList {
	width: 1200px;
	height: 522px;
	margin: 35px auto;
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
}

.mets:hover,
.metss:hover {
	cursor: pointer;
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

.saled {
	font-size: 14px;
	font-weight: 400;
	color: #202020;
	line-height: 80px;
}

.desc_box {
	width: 100%;
	height: auto;
	overflow: hidden;
}

.item_mill {
	width: 50%;
	height: auto;
	float: left;
}

.mill {
	color: #404040;
	font-size: 14px;
	font-weight: 400;
	line-height: 50px;
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

.pay_methods {
	position: relative;
}

.tip_title {
	width: 34%;
	height: 100%;
	float: left;
	line-height: 40px;
	font-size: 14px;
	color: #404040;
	font-weight: 400;
}

.tip_number {
	width: 66%;
	height: 100%;
	float: left;
}
.bProNum{
	display: none;
}
.int_nums {
	width: 181px;
	height: 39px;
	border: 1px solid #637489;
	border-radius: 5px;
	position: relative;
}

.int_nums > input {
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 5px;
	background-color: none;
	position: relative;
}

.int_nums:after {
	content: 'TB';
	width: 20px;
	color: #404040;
	font-size: 12px;
	position: absolute;
	top: 10px;
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
	cursor: pointer;
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
	cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

input[type='number'] {
	-moz-appearance: textfield;
}

.int_nums > input:focus {
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
	background-color: #4c82f7;
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	text-align: center;
	line-height: 68px;
	cursor: pointer;
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
	.ban{
		margin-top: 44px;
	}
	.poolList {
		width: 100%;
		height: auto;
		background-color: #ffffff;
		margin: 0 auto;
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
		height: 196px;
		border-bottom: 1px solid #f2f2f2;
	}

	.poolRight {
		width: 100%;
		height: 270px;
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
		font-size:18px;
	}

	.progress-box {
		width: 52%;
		height: 10px;
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
		margin: 10px auto 30px;
		overflow: hidden;
	}

	.item_mill {
		width: 25%;
		height: auto;
		float: left;
		display: flex;
		flex-direction: column-reverse;
		text-align: center;
	}
    .int_nums {
		display: none;
	}
	.bProNum{
		float: none;
		overflow: hidden;
		display: block;
		.add{
			float: none !important;
			display: inline-block;
			width: 40px;
			height: 40px;
			line-height: 40px;
			border-radius: 5px;
			background:#f0f0f8;
			text-align: center;
			font-weight: bold;
			position: relative;
		}
		.add:after{
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
		.num{
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
		.red{
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
		margin-top:5px;
		position: relative;
	}
	.sale_buy {
		width: 90%;
		height: 30px;
		margin: 0 auto;
		border: 1px solid #367fff;
		box-sizing: border-box;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
	}
	.sale_money {
		width: 50%;
		height: 100%;
		color: #4c82f7;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
	}
	.buypool {
		width: 50%;
		height: 100%;
		background-color: #367fff;
		line-height: 30px;
		font-size: 14px;
	}
}
</style>
