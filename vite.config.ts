import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

function setAlias(find: string | RegExp, RelativeReplacement: string) {
  return {
    find,
    replacement: path.resolve(__dirname, RelativeReplacement),
  };
}

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      setAlias('#', 'src'),
      setAlias('#Components', 'src/assets/Components/'),
      setAlias('#Contexts', 'src/assets/Contexts/'),
      setAlias('#Styles', 'src/styles/'),
    ],
  },
});
