<!-- <template>
	<div class="mapbox">
		<baidu-map :center="center" :zoom="zoom" @ready="handler" style="width:100%;height:600px;" @click="getClickInfo"></baidu-map>

		<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>

		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
		<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
	</div>
</template> -->

<script>
	export default {
	    name: 'map',
	    components: {
	      
	    },
	    mounted() {
	        this.baiduMap()
			
	    },
	    methods: {
	        baiduMap() {
	            var map = new BMap.Map('allmap') // 创建地图实例
	
	            var point = new BMap.Point(120.647152, 31.426638) // 创建点坐标
	            map.centerAndZoom(point, 18) // 初始化地图，设置中心点坐标和地图级别
	            map.enableScrollWheelZoom() //开启鼠标滚轮缩放
	
	            map.addControl(new BMap.NavigationControl())
	            map.addControl(new BMap.ScaleControl())
	            map.addControl(new BMap.OverviewMapControl())
	            map.addControl(new BMap.MapTypeControl())
	            //map.setMapStyle({ style: 'midnight' }) //地图风格
	
	            var marker = new window.BMap.Marker(point) // 创建标注
	            map.addOverlay(marker) // 将标注添加到地图中
				//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	
	            //提示信息
	            /* var infoWindow = new BMap.InfoWindow('高融大厦')
	            // 鼠标移上标注点要发生的事
	            marker.addEventListener('mouseover', function() {
	                this.openInfoWindow(infoWindow)
	            })
	
	            // 鼠标移开标注点要发生的事
	            marker.addEventListener('mouseout', function() {
	                //this.closeInfoWindow(infoWindow)
	            }) */
	        }
	    }
	}
	
</script>


