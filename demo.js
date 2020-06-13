import './src/styles/index.css'
import './src/styles/sass.scss'

function demo(param) {
  console.log(`${param} demo`)
  console.log(process.env.NODE_ENV); // 打印 process.env 为 {} 
  
}

demo('webpack')