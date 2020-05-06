<template>
	<div class="mapbox">
		<baidu-map :center="center" :zoom="zoom" @ready="handler" style="width:100%;height:600px;" @click="getClickInfo"></baidu-map>

		<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>

		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
		<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
	</div>
</template>

<script>
	//import icon from '../assets/images/position.png';
	export default {
		name: 'Map.vue',
		data() {
			return {
				center: {
					lng: 0,
					lat: 0
				},
				zoom: 17,
			};
		},
		mounted: function() {
			//this.enableScrollWheelZoom(true);
		},
		methods: {
			addOne: function() {
				map.clearOverlays();
				map.enableScrollWheelZoom(true);
				var point = new BMap.Point(120.647152, 31.426638);
				//var marker=new BMap.Marker(point);
				//设置标注的图标
				var icon = new BMap.Icon(icon, new BMap.Size(100, 100), {
					imageSize: new BMap.Size(100, 100)
				});
				//设置标注的经纬度
				var marker = new BMap.Marker(point, {
					icon: icon
				});
				map.addOverlay(marker);
				marker.setAnimation(BMAP_ANIMATION_BOUNCE);

				//把标注添加到地图上
				/*var marker1 = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker1);               // 将标注添加到地图中
                marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画*/
			},

			handler({
				BMap,
				map
			}) {
				this.center.lng = 120.647152;
				this.center.lat = 31.426638;
				this.zoom = this.zoom;
			},
			getClickInfo(e) {
				this.center.lng = e.point.lng;
				this.center.lat = e.point.lat;
			}
		}
	};
</script>

<style scoped>
	.bm-view {
		width: 100%;
		height: 300px;
	}
</style>
