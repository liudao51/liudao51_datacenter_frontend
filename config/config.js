/**
 * @function App总配置
 */
import routesConfig from './routes.config.js';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true
    }
  ],
]

export default {
  //路由配置
  routes: routesConfig,

  //插件配置
  plugins: plugins,
};