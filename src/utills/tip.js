import { AlertModule } from 'vux'

function alertTip (title='',content='') {
  AlertModule.show({
    title: title,
    content: content
  })
}
export default {alertTip}
