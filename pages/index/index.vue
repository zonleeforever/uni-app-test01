<template>
	<view class="container">
		
		<uni-drawer :visible="false" ref="child">
		    <view class="drawerHead">
		    	<view class="dClose">
					<text>{{glbStr}}</text>
					<image @click="closeLeftNav" src="../../images/icon/close.png" mode=""></image>
				</view>
				<view class="dInfo">
					<view class="dInfoLeft">
						<image src="../../images/toux.png" mode=""></image>
					</view>
					<view class="dInfoRight">
						<view class="myName">{{myInfo.name}}</view>
						<view class="myLevel">
							<image :src="myInfo.levelImg1" mode=""></image>
							<image :src="myInfo.levelImg2" mode=""></image>
						</view>
						<view class="myText">{{myInfo.text}}</view>
					</view>
				</view>
		    </view>
			<scroll-view scroll-y="true" class="drawerMid">
				<view class="leftMidList" v-for="item in leftList">
					<image class="leftMidIcon" :src="item.img" mode=""></image>
					<text>{{item.text}}</text>
				</view>
				
			</scroll-view>
			<view class="drawerFoot">
				<view>
					<image src="../../images/icon/down1.png" mode=""></image>
					<view>设置</view>
				</view>
				<view>
					<image src="../../images/icon/down1.png" mode=""></image>
					<view>夜间</view>
				</view>
				<view>
					<image src="../../images/icon/down1.png" mode=""></image>
					<view>1200天</view>
				</view>
				<view>
					<text>25°</text>
					<view>鼓楼</view>
				</view>
			</view>
		</uni-drawer>
		
		<view class="headNav">
			<image class="touxiang" @click="showLeftNav" src="../../images/toux.png" mode=""></image>
			<text>{{headMsg}}</text>
			<img class="headIcon" :src="headIcon" @click="headFun(headMsg)" alt="">
		</view>
		<scroll-view class="content" scroll-y="true" >
			<uniSearchBar></uniSearchBar>
			<msg v-if="showCard.msg"></msg>
			<people v-if="showCard.people"></people>
			<state v-if="showCard.state"></state>
		</scroll-view>
		<view class="footNav" >
			<view v-for="item in footIcon">
				<uni-icons :type="item.type" size="30" :color="item.color" @click=changeNav(item.type)></uni-icons>
				<view class="navName">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import msg from '@/components/cards/msg/msg.vue'
	import people from '@/components/cards/people/people.vue'
	import state from '@/components/cards/state/state.vue'
	/* 侧边*/
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	
	export default {
		data() {
			return {
				footIcon:[
					{'type':'chatbubble',color:'#66f',name:'消息'},
					{'type':'person-filled',color:'#999',name:'联系人'},
					{'type':'pengyouquan',color:'#999',name:'动态'}
				],
				headMsg:'消息',
				headIcon:require('../../images/icon/add.png'),
				showCard:{
					msg:true,people:false,state:false
				},
				myInfo:{
					name:'神然',
					levelImg1:require('../../images/icon/l1.png'),
					levelImg2:require('../../images/icon/l2.png'),
					text:'编辑个签,展示我的独特态度'
				},
				leftList:[
					{img:require('../../images/leftNavIcon/qianbao.png'),text:'我的QQ钱包'},
					{img:require('../../images/leftNavIcon/zhuangban.png'),text:'我的个性装扮'},
					{img:require('../../images/leftNavIcon/shoucang.png'),text:'我的收藏'},
					{img:require('../../images/leftNavIcon/xiangce.png'),text:'我的相册'},
					{img:require('../../images/leftNavIcon/wenjian.png'),text:'我的文件'}
				],
				glbStr:''
			}
		},
		methods: {
			changeNav:function(t){
				this.footIcon=[
					{'type':'chatbubble',color:t=='chatbubble'?'#66f':'#999',name:'消息'},
					{'type':'person-filled',color:t=='person-filled'?'#66f':'#999',name:'联系人'},
					{'type':'pengyouquan',color:t=='pengyouquan'?'#66f':'#999',name:'动态'}
				]
				this.showCard={
					msg:t=='chatbubble'?true:false,
					people:t=='person-filled'?true:false,
					state:t=='pengyouquan'?true:false
				}
				if(t=="chatbubble"){
					this.headMsg="消息"
					this.headIcon=require('../../images/icon/add.png')
				}else if(t=='person-filled'){
					this.headMsg="联系人"
					this.headIcon=require('../../images/icon/addPerson.png')
				}else{
					this.headMsg="动态"
					this.headIcon=require('../../images/icon/set.png')
				}
			
			},
			showLeftNav:function(){
				this.$refs.child.open()
			},
			closeLeftNav:function(){
				this.$refs.child.close()
			},
			headFun:function(str){
				uni.scanCode({
				    success: function (res) {
						alert(res.result)
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			}
		},
		onLoad:function(){
			getApp().globalData.text = '改变后的全局变量'
			this.glbStr=getApp().globalData.text
		},
		components: {uniSearchBar,msg,people,state,uniDrawer}
	}
</script>

<style>
	.container{
		width: 100%;height: 100%;position: relative;
	}
	.headNav{
		height: 110rpx;background-color: #007AFF;position: relative;line-height: 110rpx;
		text-align: center;
	}
	.touxiang{
		width: 90rpx;height:90rpx;position: absolute;top: 10rpx;left: 10rpx;
		border-radius: 50%;
	}
	.headIcon{width: 40rpx;height:40rpx;position: absolute;top: 35rpx;right: 20rpx;}
	.headNav>text{font-size: 30rpx;color: #fff;}
	.content{
		width: 100%;height: calc(100% - 220rpx);background-color: #fff;
	}
	.footNav{
		width: 100%;padding: 8rpx;
		position: absolute;left: 0;bottom: 0;height: 110rpx;background-color: #f2f2f2;
		display: flex;
		flex: 1;
		flex-direction: row;
	}
	.footNav>view{
		flex-grow: 1;text-align: center;
	}
	.navName{font-size: 20rpx;}
	
	.drawerHead{
		height: 280rpx;background-image: url(../../images/6.jpg);background-size: cover;
	}
	.drawerMid{
		height: calc(100% - 390rpx);background-color: #fff;padding-top: 30rpx;
	}
	.drawerFoot{
		height: 110rpx;padding: 8rpx;
	}
	.drawerFoot>view{float: left;width: 140rpx;height: 100%;text-align: center;color: #707070;}
	.drawerFoot image{width: 40rpx;height: 40rpx;}
	.drawerFoot>view>view{font-size: 30rpx;}
	
	.dClose{
		height: 50rpx;line-height: 50rpx;position: relative;padding-left: 20rpx;color: #fff;
	}
	.dClose>image{width: 36rpx;height: 36rpx;position: absolute;top: 8rpx;right: 20rpx;}
	.dClose>text{font-size: 36rpx;color: #f2f2f2;}
	.dInfo{
		height: calc(100% - 50rpx);
	}
	.dInfo>view{float: left;height: 100%;}
	.dInfoLeft{
		width: 200rpx;text-align: center;
	}
	.dInfoRight{
		width: calc(100% - 200rpx);padding-top: 55rpx;
	}
	.dInfoLeft>image{
		width: 130rpx;height: 130rpx;margin-top: 60rpx;
		border-radius: 50%;border: 5rpx solid #fff;
	}
	.dInfoRight>view{
		color: #fff;
	}
	.myLevel>image{
		width: 40rpx;height: 40rpx;vertical-align: middle;
	}
	.myText{font-size: 30rpx;}
	.leftMidList{
		height: 110rpx;padding: 5rpx 20rpx;position: relative;
		line-height: 80rpx;color: #666;
	}
	.leftMidIcon{
		width: 70rpx;height: 70rpx;vertical-align: middle;margin-right: 20rpx;
	}
</style>
