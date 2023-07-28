import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'lo2m6w9d',
  dataset: 'production',
  title: 'blueshop admin',
  apiVersion: '2023-07-25',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: true

})

export default config;