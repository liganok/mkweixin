/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'https://api.meetingku.com/api'

export const service = {
  // 登录接口
  login: `${host}/login/wechat`,
  // 微信注册接口
  register: `${host}/wechat/register`,
  // 模板
  template: `${host}/agenda/template`,
  // 主域
  host
}

export default {
  service
}
