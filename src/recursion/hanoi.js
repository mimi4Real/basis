let step = 0;
function hanoi(n, a='A', b='B', c='C') {
	step ++ ;
	if (n === 1){
		console.log('进入');
		console.log('move', a, '-->', c)
		return
	}

	hanoi(n - 1, a, c, b)
	// console.log(step);
	console.log("a=" + a + ", b=" + b + ', c='+c)
	console.log('move', a, '-->', c)
	hanoi(n - 1, b, a, c)
}
hanoi(3)

console.log(step);


var options = [{   //测试数据
	value: 1,
	label: 'ha',
	children: [{
		value: 2,
		label: 'haha',
		children: []
	},{
		value: 5,
		label: '',
		children: [{
			value: 6,
			children:[]
		}]
	}]
}]

var res = ''; //保存结果
var getTarget2 = function (options, target, parent) {
	for(var i = 0;i<options.length;i++){
		options[i].parentConcat = parent.concat([options[i].value]);
		if(target === options[i].value){
			res = options[i].parentConcat;
			return;
		}

		if(options[i].children && options[i].children.length){
			getTarget2(options[i].children, target, options[i].parentConcat)
		}
	}
}

getTarget2(options, 6, []);
console.log(res);


/**
 * summary: 各系统图标主题色配置
 * author:WuDongDong
 * time:2017/8/15 10:05
 */
var defaultTheme = '#2a51a8';  //默认色
var sysThemeConfig = [
	{
		id: '20200',  //医院成本核算系统
		name: '医院成本核算系统',
		theme: '#de5858',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '20400', //财务管理系统
		name: '财务管理系统',
		theme: '#aa8e9b',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '5001', //财务监控管理
		name: '财务监控管理',
		theme: '#dd8158',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '14001', //协同办公平台
		name: '协同办公平台',
		theme: '#a0a2ec',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '1500', //财务总和查询平台
		name: '财务总和查询平台',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '1001', //预算控制管理系统
		name: '预算控制管理系统',
		theme: '#f2b07d',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '45', //军队医院科级成本核算管理系统
		name: '军队医院科级成本核算管理系统',
		theme: '#b5d04e',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '6000', //运营决策支持系统
		name: '运营决策支持系统',
		theme: '#c6376c',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '600', //综合绩效管理
		name: '综合绩效管理',
		theme: '#86c682',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '4000', //机关版资产预算管理系统
		name: '机关版资产预算管理系统',
		theme: '#8dd3b2',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '127', //系统配置
		name: '系统配置',
		theme: '#86c682',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '4500', //固定资产管理系统
		name: '固定资产管理系统',
		theme: '#b5d04e',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '7000', //区域监管
		name: '区域监管',
		theme: '#dd8158',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '2000', //数据检测系统
		name: '数据检测系统',
		theme: '#de5858',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '10600', //物资管理系统
		name: '物资管理系统',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '11001', //合同管理信息系统
		name: '合同管理信息系统',
		theme: '#86c682',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '16000', //医院审计管理系统
		name: '医院审计管理系统',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '12001', //全成本核算数据中心
		name: '全成本核算数据中心',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '12201', //全成本核算报表管理系统
		name: '全成本核算报表管理系统',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '12301', //科室运营管理系统
		name: '科室运营管理系统',
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '15000', //科教研管理
		name: '科教研管理',
		theme: '#86c682',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '17000', //经济收入统计分析
		name: '经济收入统计分析',
		theme: '#8dd3b2',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '8001', //人力资源管理系统
		name: '人力资源管理系统',
		theme: '#a0a2ec',
		extraContent: '一键操作 全盘掌握'
	}
]


var sysThemeConfig2 = [
	{
		id: '20200',  //医院成本核算系统
		theme: '#de5858',
		extraContent: '成本立体化管控'
	},
	{
		id: '20400', //财务管理系统
		theme: '#aa8e9b',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '5001', //财务监控管理
		theme: '#dd8158',
		extraContent: ' 财务、业务一体化管理'
	},
	{
		id: '14001', //协同办公平台
		theme: '#a0a2ec',
		extraContent: '流程高效 工作无忧'
	},
	{
		id: '1500', //财务总和查询平台
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '1001', //预算控制管理系统
		theme: '#f2b07d',
		extraContent: '构建全面预算管理'
	},
	{
		id: '45', //军队医院科级成本核算管理系统
		theme: '#b5d04e',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '6000', //运营决策支持系统
		theme: '#c6376c',
		extraContent: '实现数据向信息的转化'
	},
	{
		id: '600', //综合绩效管理
		theme: '#86c682',
		extraContent: '为医院打造贴心的绩效管理'
	},
	{
		id: '4000', //机关版资产预算管理系统
		theme: '#8dd3b2',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '127', //系统配置
		theme: '#86c682',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '4500', //固定资产管理系统
		theme: '#b5d04e',
		extraContent: '资产价值、运营、运维、监控“四维一体”'
	},
	{
		id: '7000', //区域监管
		theme: '#dd8158',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '2000', //数据检测系统
		theme: '#de5858',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '10600', //物资管理系统
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '11001', //合同管理信息系统
		theme: '#86c682',
		extraContent: '电子化合同 全程管理'
	},
	{
		id: '16000', //医院审计管理系统
		theme: '#7dcbea',
		extraContent: '规范化、标准化管理'
	},
	{
		id: '12001', //全成本核算数据中心
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '12201', //全成本核算报表管理系统
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '12301', //科室运营管理系统
		theme: '#7dcbea',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '15000', //科教研管理
		theme: '#86c682',
		extraContent: '科教研信息集中化展现'
	},
	{
		id: '17000', //经济收入统计分析
		theme: '#8dd3b2',
		extraContent: '一键操作 全盘掌握'
	},
	{
		id: '8001', //人力资源管理系统
		theme: '#a0a2ec',
		extraContent: '构建全景式一站管理'
	}
]

var num = 0
sysThemeConfig.forEach(function (item, index) {
	for(var i in sysThemeConfig2){
		if(sysThemeConfig2[i].id === item.id && sysThemeConfig2[i].extraContent === '一键操作 全盘掌握'){
			console.log(++num + '、' + item.name + '(' + sysThemeConfig2[i].id + ')');
			break;
		}
	}
	// console.log(index+1 + '、' + item.name);
})



