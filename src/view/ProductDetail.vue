<template>
	<!-- 了解产品页 -->
	<div>
		<div class="nav" style='height:68px;background: #000000;z-index:9;clear:both;'></div>
		<div class='detailsBoxQes'>
			<div class="productListDetail">
				<div class="productItemTro">产品介绍</div>
				<div v-for='(item,index) in info' :key='index' :class="['productItems', {active_navs:show===index}]" @click="checked(index)">
					{{item.title}}
				</div>
			</div>
			<div class="productContent">
				<div class="productIntroduce" v-html="content?content.content:''">
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script>
	export default {
		data: () => ({
			show: 0,
			index:0,
			info:[]
		}),

		computed: {
			content(){
				return this.info[this.show]
			}
		},
		mounted(){
			var that=this;
				this.$http.get(this.url + '/product/'+this.$route.query.id).then((res) =>{
					that.info = res.data.data.productmessag || {};
					
				}).catch(() => {
				})
		},
		methods: {
			checked(index) {
				this.show = index;
				
			}
		},
	}
</script>

<style scoped="scoped">
	.detailsBoxQes {
		width: 62%;
		height: auto;
		overflow: hidden;
		margin:105px auto 50px;
		box-sizing: border-box;
	}
	.productListDetail {
		width: 12%;
		height: auto;
		float: left;
		background-color: #f5f5f5;
	}
    .productItemTro{
		width: 100%;
		height:100px;
		display: block;
		font-size:16px;
		color:#202020;
		text-align:center;
		/* line-height:100px; */
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.productListDetail>.productItems {
		width: 100%;
		height: auto;
		display: block;
		font-size: 14px;
		/* color:#404040; */
		padding: 10px;
		box-sizing: border-box;
		/* line-height: 20px; */
	}

	.productItems:hover{
		background-color: #EBEBEB;
		color:#4C82F7;
		cursor: pointer;
	}

	.active_navs {
		color:#4C82F7;
		background-color: #EBEBEB;
	}

	.productContent {
		width: 88%;
		height: auto;
		float: right;
		padding:100px 60px;
		box-sizing:border-box;
	}
	@media screen and (max-width:1200px) {
		.detailsBoxQes {
			width: 100%;
		}
	}
    @media screen and (max-width:750px) {
		.nav{
			height:44px !important;
		}
        .detailsBoxQes {
        	width: 100%;
        	height: auto;
			margin:20px auto;
        	overflow: hidden;
        	box-sizing: border-box;
        }
        .productListDetail {
        	width: 20%;
            height: auto;
            float: left;
            background-color: #f5f5f5;
        }
        .productContent {
        	width: 80%;
            padding:40px 20px;
			box-sizing: border-box;
        }
    }
</style>
