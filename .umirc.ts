import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'myapp',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
        ],
        update(routes){
          console.log('TCL: update -> routes', routes.length, routes[0].routes);

          return [...routes]
        }
      },
    }],
  ],
}

export default config;
