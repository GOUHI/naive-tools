type WordsList = {
  word: string,
  translate: string,
  group?: string,
  n?: string,
  v?: string,
  vt?: string,
  adj?: string,
  audio: string
}
// MP3地址
import state from '@assets/mp3/state.mp3';
import entry from '@assets/mp3/entry.mp3';
import output from '@assets/mp3/output.mp3';
import develop from '@assets/mp3/develop.mp3';
import alpha from '@assets/mp3/alpha.mp3';
import beta from '@assets/mp3/beta.mp3';
import release from '@assets/mp3/release.mp3';
import refresh from '@assets/mp3/refresh.mp3';
export const wordsList: WordsList[] = [
  { word: 'state', translate: '状态', group: '', n: '状态 / 国家 / 政府 / 领土/', v: '陈述 / 声明 / 详述 / 规定', adj: '政府的 / 正式的 / 国家的 / 州的', audio: state },
  { word: 'entry', translate: '入口', group: '', n: '(词典等的）条目;进入(指权利等);参与，加入(指权利、机会);登记;参赛;参赛作品;大门;参赛人数;', v: '', adj: '', audio: entry },
  { word: 'output', translate: '入口', group: '', n: '输出;输出端;(人、机器、机构的)产量;输出功率;输出量;', v: '', vt: '输出', adj: '', audio: output },
  { word: 'develop', translate: '开发', group: '', n: '', v: '发展;发展，变化;开发;加强;研制;出现(问题);使（胶卷）显影;(使)成长;壮大; 患(病);修建;详尽阐述;(问题)开始影响;(疾病)开始侵袭', vt: '', adj: '', audio: develop },
  { word: 'alpha', translate: '内测', group: '', n: '阿尔法;希腊字母表的第1个字母;', v: '', vt: '', adj: '', audio: alpha },
  { word: 'beta', translate: '测试', group: '', n: '希腊字母表的第2个字母', v: '', vt: '', adj: '', audio: beta },
  { word: 'release', translate: '候选', group: '', n: '释放;发布;发行;排放;获释;公开;解脱;(尤指)新激光唱片，新电影;新发行的东西', v: '', vt: '释放;松开;免除，解除;公开;放出;开放;放开;发泄;放走;宣泄;使自由移动(或飞翔、降落等);使不紧张', adj: '', audio: release },
  { word: 'refresh', translate: '刷新', group: '', n: '刷新（网页）', v: '恢复精力;给（蓄电池）充电;提醒，提示', vt: '', adj: '', audio: refresh },
]