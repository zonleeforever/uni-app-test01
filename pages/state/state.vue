<template>
	<view>
		<view class="head">
			<image class="BackArrow" @click="back" src="../../images/stateIcon/BackArrow.png" mode=""></image>
			<image class="addS" src="../../images/stateIcon/addS.png" mode=""></image>
			<view class="myInfo">
				<view class="myInfoLeft">
					<image src="../../images/toux.png" mode=""></image>
				</view>
				<view class="myInfoRight">
					<image class="eye" src="../../images/stateIcon/eye.png" mode=""></image>
					<view>今日访客 1</view>
					<view>访客总量  122</view>
				</view>
			</view>
		</view>
		<view class="iconBox">
			<view>
				<image src="../../images/stateIcon/1.png" mode=""></image>
				<view>相册</view>
			</view>
			<view>
				<image src="../../images/stateIcon/2.png" mode=""></image>
				<view>说说</view>
			</view>
			<view>
				<image src="../../images/stateIcon/3.png" mode=""></image>
				<view>个性化</view>
			</view>
			<view>
				<image src="../../images/stateIcon/4.png" mode=""></image>
				<view>小游戏</view>
			</view>
			<view>
				<image src="../../images/stateIcon/5.png" mode=""></image>
				<view>小视频</view>
			</view>
		</view>
		<view>
			{{glbStr}}
			{{userName}}
		</view>
		<view>
			<image style="width: 300rpx;height: 300rpx;" :src="imageSrc" mode=""></image>
			<button @click="upload">上传</button>
			<button @click="download">download</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				glbStr:'',
				userName:'',
				imageSrc:''
			}
		},
		methods: {
			back:function(){
				uni.navigateTo({
				    url: '../../pages/index/index'
				});
			},
			upload:function(){
				// uni.chooseImage({
				//     success: (chooseImageRes) => {
				//         console.log(chooseImageRes)
				//     }
				// });
				
				//上传本地图片
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.imageSrc = res.tempFilePaths[0]
						this.$forceUpdate() //强制刷新视图
					}
				})

			},
			download:function(){
				uni.downloadFile({
				    url: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594691089&t=7e72c454a2d09d1234204fb78b067a99', //仅为示例，并非真实的资源
				    success: (res) => {
				        if (res.statusCode === 200) {
				            console.log('下载成功');
							console.log(res)
							this.imageSrc=res.tempFilePath
							
				        }
				    }
				});
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			getApp().globalData.text = '二次改变后的全局变量'//重新赋值
			this.glbStr=getApp().globalData.text
			
			//上下两种全局变量方法  一个在App.vue里定义全局变量，一个定义公共的common.js在main.js
			//中引用挂载
			
			//全局变量2
			this.$user.setUser({   //重新赋值
				name:'嘿嘿嘿'
			});
			this.userName=this.$user.user.name
		}
	}
</script>

<style scoped>
	.head{
		height: 420rpx;position: relative;background-image: url(../../images/3.jpg);background-size: cover;
		border: 1rpx solid transparent;
	}
	.myInfo{
		height: 220rpx;margin-top: 200rpx;
		display: flex;
	}
	.head>image{position: absolute;top: 10rpx;width: 40rpx;height: 40rpx;}
	.BackArrow{left: 20rpx;}
	.addS{right: 20rpx;}
	.myInfo>view{
		height: 100%;flex-grow: 1;
	}
	.myInfoLeft>image{height: 180rpx;width: 180rpx;margin: 20rpx;border-radius: 50%;}
	.eye{
		width: 70rpx;height: 60rpx;float: left;
	}
	.myInfoRight{padding-top: 110rpx;}
	.myInfoRight>view{font-size: 30rpx;color: #ddd;position: relative;left: 20rpx;}
	.iconBox{
		height: 130rpx;display: flex;
	}
	.iconBox>view{
		flex-grow: 1;height: 100%;border-bottom: 1rpx solid #007AFF;text-align: center;
		color: #333;font-size: 30rpx;padding-top: 18rpx;
	}
	.iconBox image{width: 40rpx;height: 40rpx;}
</style>
