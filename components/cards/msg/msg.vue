<template>
	<view>
		<!-- <image src="../../../images/1.jpg" mode=""></image> -->
		<view v-for="item in dataArr" class="msgList">
			<view class="imgIcon">
				<image :src="item.img" class="image" mode=""></image>
			</view>
			<view class="msgBox">
				<view class="msgUp">
					{{item.title}}  <text class="time">{{item.time}}</text>
				</view>
				<view class="msgDown">
					{{item.content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name: "msg",
		data() {
			return {
				dataArr:[
					{
						img:require('../../../images/1.jpg'),title:'复仇者联盟',
						content:'美国队长：what are you no sha li',time:'11:23'
					},
					{
						img:require('../../../images/2.jpg'),title:'119技术交流群',
						content:'无忧：uni-app是很方便',time:'11:23'
					},
					{
						img:require('../../../images/3.jpg'),title:'赵灵儿',
						content:'逍遥哥哥，你看好多红色蒲公英！',time:'11:23'
					},
					{
						img:require('../../../images/4.jpg'),title:'锦绣',
						content:'集卡抽取绝版天空套装战灵天舞套……',time:'11:23'
					},
					{
						img:require('../../../images/5.jpg'),title:'李夜安',
						content:'有需要驱魔的吗？',time:'11:23'
					},
					{
						img:require('../../../images/6.jpg'),title:'万茜',
						content:'为了部落！',time:'11:23'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.msgList{
		height: 180rpx;padding: 10px;
	}
	.msgList>view{height: 100%;float: left;}
	.imgIcon{width: 140rpx;text-align: center;}
	.msgBox{width: calc(100% - 140rpx);}
	.image{width: 90rpx;height: 90rpx;position: relative;top: 20rpx;border-radius: 50%;}
	.msgBox>view{height: 50%;line-height: 80rpx;}
	.msgUp{font-size: 35x;color: #333;position: relative;}
	.msgDown{font-size: 25rpx;color: #666;}
	.time{position: absolute;top: 0;right: 10rpx;font-size: 25rpx;color: #666;}
</style>
