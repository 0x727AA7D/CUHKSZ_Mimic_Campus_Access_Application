// 个人信息
var my_stuID = "120040000"; // 学生ID
var my_stuName = ""; // 姓名
var my_dormNo = "A304"; // 宿舍号
var my_stuCollegeName = "数据科学学院"; // 学院全称
var my_stuUnitName = "思廷书院" // 书院全称
var my_phone = "13712039821" // 联系电话
var my_stuUnitName_eng = "MUSE" // 书院,格式如 MUSE

// !!! 注意: 有效天数检查已关闭，请确保 返校时间 在 申请有效期 之内 !!!
var my_valid_day_cnt = "7" // 申请有效期，默认为7，(别改太离谱的QwQ)

var my_province = "广东" // 省/直辖市
var my_city = "深圳" // 区/市
var my_district = "龙岗" // 区/县
var my_street = "启迪协信科技园" // 所在街道以及详细地址

var my_remark = "" // 离校备注/原因


// TODAY
var day = new Date();
day.setTime(day.getTime());
var s = day.getFullYear()+"-" + (day.getMonth()+1).toString().padStart(2,'0') + "-" + day.getDate().toString().padStart(2,'0');

// NEXT DAY
var day2 = new Date();
day2.setTime(day2.getTime()+24*60*60*1000);
var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1).toString().padStart(2,'0') + "-" + day2.getDate().toString().padStart(2,'0');

// 离校相关时间
var my_d_leaveDate = s // 离校时间，格式如 2022-06-29
var my_d_backDate = s2 // 返校时间，格式如 2022-06-29