// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import JsonEditor from './JsonEditor'
import debounce from 'lodash'
// import request from 'request'
const GETCONFIGURL = '/api/getConfig'
const SETCONFIGURL = '/api/setConfig'

function Index(props){
  const [config,setConfig] = useState({})
  const getConfig = async()=>{
    const {data} = await axios(GETCONFIGURL,{})
    console.log(data,'data')
    setConfig(data.data)
  }
  const handleChange = debounce((data)=>{
    // setConfig(data)
  })
  useEffect(()=>{
    getConfig()
  },[])
  return <div>
    <JsonEditor
      data={config}
      onChange={handleChange}
    />
  </div>
}
export default Index
// export default class AssetRender extends Component {

//   render() {
//     const { title } = this.props;
//     console.log(this.props,'this.props')
//     return <div>
//       <h1><a href="https://www.yuque.com/easy-team/egg-react/html">{title}</a></h1>
//       <div>{title}</div>
//       {/* <div>
//         <iframe src="https://www.yuque.com/easy-team/egg-react/html" frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
//       </div> */}
//     </div>;
//   }
// }
