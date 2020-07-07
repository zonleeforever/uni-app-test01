<template>
	<view class="containerS">
		<view class="state" @click="goToState">
			<image class="space" src="../../../images/icon/space.png" mode=""></image>
			<text>好友动态</text>
			<image class="rightPoint" src="../../../images/icon/rightPoint.png" mode=""></image>
		</view>
		<view class="stateList">
			<view v-for="item in stateList">
				<image class="stataImg" :src="item.img" mode=""></image>
				<view class="stateTitle">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "state",
		data() {
			return {
				stateList:[
					{
						img:require('../../../images/icon/game.png'),
						title:'游戏'
					},
					{
						img:require('../../../images/icon/voice.png'),
						title:'语音房'
					},{
						img:require('../../../images/icon/k.png'),
						title:'全民K歌'
					},{
						img:require('../../../images/icon/eye.png'),
						title:'腾讯看点'
					}
				]
			}
		},
		methods: {
			goToState:function(){
				uni.navigateTo({
				    url: '../../pages/state/state?id=7'
				});
			}
		}
	}
</script>

<style scoped>
	.containerS{
		height: calc(100% - 105rpx);background-color: #f2f2f2;padding-top: 25rpx;
	}
	.state{
		width: 90%;height: 100rpx;border-radius: 20rpx;margin: 0 auto;
		background-color: #fff;padding: 20rpx;position: relative;line-height: 60rpx;
		font-size: 35rpx;color: #333;
	}
	.stateList{
		width: 90%;height: 350rpx;border-radius: 20rpx;margin: 0 auto;
		background-color: #fff;position: relative;top: 25rpx;
	}
	.stateList>view{width: 33%;height: 50%;border: 1px solid #f2f2f2;float: left;
	text-align: center;padding-top: 30rpx;}
	.stataImg{
		width: 45rpx;height: 45rpx;
	}
	.stateTitle{
		font-size: 35rpx;color: #666;
	}
	.space{
		width: 60rpx;height: 60rpx;vertical-align: middle;
		position: absolute;top: 20rpx;left: 15rpx;
	}
	.rightPoint{
		width: 35rpx;height: 35rpx;vertical-align: middle;
		position: absolute;top: 30rpx;right: 15rpx;
	}
	.state>text{display: inline-block;margin-left: 60rpx;}
</style>
