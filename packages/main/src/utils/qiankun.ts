// 开启 qiankun
import { registerMicroApps, addGlobalUncaughtErrorHandler, initGlobalState, runAfterFirstMounted } from 'qiankun'
import config from '@/config'

const { subApps } = config

export function registerApps() {
  try {
    // 1. 注册子应用
    registerMicroApps(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })

    const {onGlobalStateChange, setGlobalState} = initGlobalState({
      user: 'qiankun'
    })

    onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

    setGlobalState({
      ignore: 'master',
      user: {
        name: 'master',
      },
    });

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });

  } catch (err) {
    console.log(err)
  }
  addGlobalUncaughtErrorHandler(event => console.log(event))
}
