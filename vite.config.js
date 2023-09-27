// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react'; 
 // https://vitejs.dev/config/
 export default defineConfig({   
    plugins: [react()],   
    build: {     
rollupOptions: {   
    external: [  
       'react-icons/Bs',     
    'react-icons/cg',     
    'react-icons/Fa',     
    'react-icons/si',     
    'react-icons/ai',     
  ], // Add this line    
 }, 
  }, 
}); 