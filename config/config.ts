import { defineConfig } from "umi";
import routes from './routes';

export default defineConfig({
  outputPath: 'dist',// 产物目录
  routes, 
  npmClient: 'pnpm',
});
