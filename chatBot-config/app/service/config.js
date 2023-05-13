const egg = require('egg');
const fs = require('fs');

module.exports = class ConfigService extends egg.Service {
  getArticleList() {
    return [{
      id: 0,
      title: 'Egg + React 服务端渲染骨架',
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
      hits: 550,
      url: 'https://yuque.com/easy-team/egg-react'
    }, {
      id: 1,
      title: '前端工程化解决方案 easywebpack',
      summary: 'programming instead of configuration, webpack is so easy',
      hits: 550,
      url: 'https://yuque.com/easy-team/easywebpack'
    }, {
      id: 2,
      title: '最强大的 Webpack CLI 工具 easywebpack-cli',
      summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
      hits: 278,
      url: 'https://yuque.com/easy-team/easywebpack-cli'
    }];
  }

  getArticle() {
    return  {
      id: 1,
      title: 'Egg + React 服务端渲染骨架',
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
      hits: 550,
      url: 'https://yuque.com/easy-team/egg-react'
    }
  }
  getPromot({isGroup=false, name = ''}){
    try {
      const data = fs.readFileSync(__dirname+'/config.json');
      const jsonData =  JSON.parse(data)
      const {baseConfig,groupBaseConfig,groupConfig,peopleConfig} = jsonData
      let promt = ''
      if(!isGroup){
        promt = baseConfig.join(',')
        if(peopleConfig[name]){
          promt += ','+peopleConfig[name]
        }
      }else{
        promt = baseConfig.concat(groupBaseConfig).join(',')
        if(groupConfig[name]){
          promt += groupConfig[name].join(',')
        }
      }

      return promt
    } catch (err) {
      return ''
    }
  }

  getConfigDetail(){
    try {
      const data = fs.readFileSync(__dirname+'/config.json');
      return JSON.parse(data)
    } catch (err) {
      console.error(err);
      return {}
    }
      
  }
  setConfigDetail(content){
    // try {
    //   fs.writeFileSync(__dirname+'/config2.json', content);
    //   console.log('File saved!');
    // } catch (err) {
    //   console.error(err);
    // }
      
  }
}