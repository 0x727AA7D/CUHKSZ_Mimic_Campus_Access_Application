const user_NO = 1;

// 离校相关
var my_d_leaveDate = "2022-11-17" // 离校时间，格式如 2022-06-29
var my_d_backDate = "2022-11-18" // 返校时间，格式如 2022-06-29

// !!! 注意: 有效天数检查已关闭，请确保 返校时间 在 申请有效期 之内 !!!
var my_valid_day_cnt = "7" // 申请有效期，默认为7，(别改太离谱的QwQ)

var my_province = "广东" // 省/直辖市
var my_city = "深圳" // 区/市
var my_district = "龙岗" // 区/县
var my_street = "启迪协信科技园" // 所在街道以及详细地址

var my_remark = "洽谈社团事务" // 离校备注/原因

if(user_NO == 1){
    // 个人信息
    var my_stuID = "120040061"; // 学生ID
    var my_stuName = "汪宁远"; // 姓名
    var my_dormNo = "A304"; // 宿舍号
    var my_stuCollegeName = "数据科学学院"; // 学院全称
    var my_stuUnitName = "思廷书院" // 书院全称
    var my_phone = "13712039821" // 联系电话
    var my_stuUnitName_eng = "MUSE" // 书院,格式如 MUSE
} 

else if (user_NO == 2){
    /////////////////////////////////////////////////////
    // USER 2 钟中日
    ////////////////////////////////////////////////////
    // 个人信息
    var my_stuID = "120040087"; // 学生ID
    var my_stuName = "钟中日"; // 姓名
    var my_dormNo = "B418"; // 宿舍号
    var my_stuCollegeName = "数据科学学院"; // 学院全称
    var my_stuUnitName = "思廷书院" // 书院全称
    var my_phone = "15675173128" // 联系电话
    var my_stuUnitName_eng = "MUSE" // 书院,格式如 MUSE
}

else if (user_NO == 3){
    /////////////////////////////////////////////////////
    // USER 3 郁昼亮
    ////////////////////////////////////////////////////
    // 个人信息
    var my_stuID = "120040077"; // 学生ID
    var my_stuName = "郁昼亮"; // 姓名
    var my_dormNo = "D505"; // 宿舍号
    var my_stuCollegeName = "数据科学学院"; // 学院全称
    var my_stuUnitName = "祥波书院" // 书院全称
    var my_phone = "18867137673" // 联系电话
    var my_stuUnitName_eng = "HARMONIA" // 书院,格式如 MUSE
}