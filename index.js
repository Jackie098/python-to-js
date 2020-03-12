import { PythonShell } from 'python-shell';
import { resolve } from 'path';

const dirPython = '/usr/bin/python3'; //resolve('usr', 'bin', 'python3');
const scriptPy = resolve(__dirname);

const options = {
  mode: 'text',
  pythonPath: dirPython,
  pythonOptions: ['-u'],
  scriptPath: scriptPy,
  args: ['a', 'b', 'c', 'd'], 
}

PythonShell.run('helloWorld.py', options, (err, results) => {
  if(err) throw err;
  
  console.log(`results: ${results}`);
})