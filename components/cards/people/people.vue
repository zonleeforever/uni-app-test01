<template>
	<view class="containerP">
		<view class="peopleNav">
			<text @click="setColor(1)" :class="pActiveObj.pActive1">好友</text>
			<text @click="setColor(2)" :class="pActiveObj.pActive2">分组</text>
			<text @click="setColor(3)" :class="pActiveObj.pActive3">群聊</text>
			<text @click="setColor(4)" :class="pActiveObj.pActive4">设备</text>
		</view>
		<uni-indexed-list v-if="showBox.box1" :options="list" ></uni-indexed-list>
		
		<scroll-view v-if="showBox.box2" class="box2" scroll-y="true" >
			
			<view class="arrList" v-for="(item,index) in fenzuArr">
				<view class="arrListUp" @click="isShowGroup(index)">
					<image class="sanjiao" :src="item.showGroup==true?labelImg1:labelImg" mode=""></image>
					<text class="arrTitle">{{item.arrTitle}}</text>
					<text class="arrNum">{{item.onLineNum}}/{{item.allNum}}</text>
				</view>
				<view class="arrListDown" v-if="item.showGroup">
					<view v-for="itemC in item.group">
						<image class="touxiang" :src="itemC.img" mode=""></image>
						<text class="nicheng">{{itemC.name}}</text>
					</view>
				</view>
			</view>
			
		</scroll-view>
		<scroll-view v-if="showBox.box3" class="box3" scroll-y="true" >
			<view class="arrList" v-for="(item,index) in chartArr">
				<view class="arrListUp" @click="isShowChartGroup(index)">
					<image class="sanjiao" :src="item.showGroup==true?labelImg1:labelImg" mode=""></image>
					<text class="arrTitle">{{item.arrTitle}}</text>
					<text class="arrNum">{{item.onLineNum}}/{{item.allNum}}</text>
				</view>
				<view class="arrListDown" v-if="item.showGroup">
					<view v-for="itemC in item.group">
						<image class="touxiang" :src="itemC.img" mode=""></image>
						<text class="nicheng">{{itemC.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<scroll-view v-if="showBox.box4" class="box4" scroll-y="true" >
			<view class="sbList">
				<image src="../../../images/icon/sb1.png" mode=""></image>
				<text>我的电脑</text>
			</view>
			<view class="sbList">
				<image src="../../../images/icon/sb2.png" mode=""></image>
				<text>发现新设备</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
	export default {
		name: "people",
		data() {
			return {
				list:[{
					"letter": "A",
					"data": [
						"啊哈哈",
						"阿赛洛"
					]
				}, {
					"letter": "B",
					"data": [
						"别牛",
						"爸比",
						"包子好吃",
						'贝贝'
					]
				}, {
					"letter": "c",
					"data": [
						"踩踩踩"
					]
				}, {
					"letter": "f",
					"data": [
						"发了疯"
					]
				}, {
					"letter": "e",
					"data": [
						"eeeeeee"
					]
				}, {
					"letter": "g",
					"data": [
						"哥哥哥"
					]
				}],
				pActiveObj:{
					pActive1:'pActive',pActive2:'',pActive3:'',pActive4:''
				},
				showBox:{box1:true,box2:false,box3:false,box4:false},
				labelImg:require('../../../images/icon/sanjiao.png'),
				labelImg1:require('../../../images/icon/sanjiao1.png'),
				fenzuArr:[
					{
						arrTitle:'特别关心',
						showGroup:false,
						allNum:5,
						onLineNum:2,
						group:[
							{
								img:require('../../../images/touxiang/t1.jpg'),
								name:'神然'
							},
							{
								img:require('../../../images/touxiang/t2.jpg'),
								name:'超级无敌大白菜'
							}
						]
					},
					{
						arrTitle:'天边流云',
						showGroup:false,
						allNum:6,
						onLineNum:1,
						group:[
							{
								img:require('../../../images/touxiang/t3.jpg'),
								name:'叶无忧'
							}
						]
					},
					{
						arrTitle:'桃之夭夭',
						showGroup:false,
						allNum:18,
						onLineNum:3,
						group:[
							{
								img:require('../../../images/touxiang/t4.jpg'),
								name:'璇素'
							},
							{
								img:require('../../../images/1.jpg'),
								name:'那一弯明月'
							},
							{
								img:require('../../../images/touxiang/t6.jpg'),
								name:'英名'
							}
						]
					},
					{
						arrTitle:'年华依旧',
						showGroup:false,
						allNum:8,
						onLineNum:5,
						group:[
							{
								img:require('../../../images/touxiang/t2.jpg'),
								name:'明月照我心'
							},
							{
								img:require('../../../images/touxiang/t5.jpg'),
								name:'一抹月光洒'
							},
							{
								img:require('../../../images/touxiang/t7.jpg'),
								name:'明月几时有'
							},
							{
								img:require('../../../images/touxiang/t3.jpg'),
								name:'繁星点点'
							},
							{
								img:require('../../../images/touxiang/t2.jpg'),
								name:'云想衣裳花想容'
							}
						]
					}
				],
				chartArr:[
					{
						arrTitle:'群聊1',
						showGroup:false,
						allNum:5,
						onLineNum:2,
						group:[
							{
								img:require('../../../images/touxiang/t2.jpg'),
								name:'明月照我心'
							},
							{
								img:require('../../../images/touxiang/t5.jpg'),
								name:'一抹月光洒'
							}
						]
					},{
						arrTitle:'群聊2',
						showGroup:false,
						allNum:3,
						onLineNum:3,
						group:[
							{
								img:require('../../../images/touxiang/t4.jpg'),
								name:'璇素'
							},
							{
								img:require('../../../images/1.jpg'),
								name:'那一弯明月'
							},
							{
								img:require('../../../images/touxiang/t6.jpg'),
								name:'英名'
							}
						]
					}
				]
			}
		},
		methods: {
			setColor:function(n){
				this.pActiveObj={
					pActive1:n==1?'pActive':'',
					pActive2:n==2?'pActive':'',
					pActive3:n==3?'pActive':'',
					pActive4:n==4?'pActive':''
				}
				this.showBox={
					box1:n==1?true:false,
					box2:n==2?true:false,
					box3:n==3?true:false,
					box4:n==4?true:false,
				}
			},
			isShowGroup:function(i){
				this.fenzuArr[i].showGroup=!this.fenzuArr[i].showGroup
			},
			isShowChartGroup:function(i){
				this.chartArr[i].showGroup=!this.chartArr[i].showGroup
			}
		},
		components: {uniIndexedList}
	}
</script>

<style scoped>
	.containerP{
		height: calc(100% - 130rpx);
	}
	.peopleNav{
		height: 100rpx;padding: 10rpx;
	}
	.peopleNav>text{display: inline-block;width: 25%;height: 80rpx;text-align: center;
	line-height: 80rpx;font-size: 35rpx;color: #666;}
	.pActive{background-color: #BBFFEE;border-radius: 25rpx;color: #007AFF !important;}
	
	.box2{
		height:calc(100% - 80rpx);background-color: #fff;	
	}
	.box3{
		height:calc(100% - 80rpx);background-color: #fff;	
	}
	.box4{
		height:calc(100% - 80rpx);background-color: #fff;	
	}
	.arrListUp{
		height: 80rpx;position: relative;line-height: 80rpx;
	}
	.arrListDown{
		
	}
	.arrListDown>view{height: 90rpx;margin-left: 50rpx;
	font-size: 35rpx;color: #333;padding: 5rpx;font-weight: 400;}
	.touxiang{height: 70rpx;width: 70rpx;border-radius: 50%;vertical-align: middle;}
	.nicheng{display: inline-block;height: 80rpx;line-height: 80rpx;margin-left: 20rpx;}
	.sanjiao{
		width: 35rpx;height: 35rpx;vertical-align: middle;margin: 0 10rpx 0 30rpx;
	}
	.arrTitle{font-size: 35rpx;color: #333;}
	.arrNum{height: 80rpx;position: absolute;top: 0;right: 10rpx;display: inline-block;
	font-size: 26rpx;color: #888;line-height: 80rpx;}
	.sbList{
		height: 120rpx;padding: 15rpx;
	}
	.sbList>image{
		width: 80rpx;height: 80rpx;vertical-align: middle;margin: 20rpx;
	}
	.sbList>text{
		font-size: 35rpx;color: #333;
	}
</style>
