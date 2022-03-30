const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',

  // 下面是自己的用户认证的接口
  UserRegister: '/user/register',
  UserLogin: '/user/login',

  // 考试的接口
  ExamQuestionList: '/classify_auxiliary/question/list',
  ExamQuestionAll: '/classify_auxiliary/question/all',
  ExamQuestionUpdate: '/classify_auxiliary/question/update',
  ExamQuestionSelection: '/classify_auxiliary/question/selection',
  ExamQuestionCreate: '/classify_auxiliary/question/create',
  ExamList: '/classify_auxiliary/list',
  ExamAll: '/classify_auxiliary/all',
  // 获取问题列表，按照单选、多选和判断进行分类
  ExamQuestionTypeList: '/classify_auxiliary/question/type/list',
  ExamCreate: '/classify_auxiliary/create',
  ExamUpdate: '/classify_auxiliary/update',
  ExamCardList: '/classify_auxiliary/card/list',
  // 获取考试详情
  ExamDetail: '/classify_auxiliary/detail/',
  // 获取考试详情
  QuestionDetail: '/classify_auxiliary/question/detail/',
  // 交卷
  FinishExam: '/classify_auxiliary/finish/',
  ExamRecordList: '/classify_auxiliary/record/list',
  recordDetail: '/classify_auxiliary/record/detail/'
}
export default api
