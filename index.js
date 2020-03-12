import { PythonShell } from 'python-shell';
// import { resolve } from 'path';

const pyshell = new PythonShell('helloWorld.py');

pyshell.send('hello');

pyshell.on('message', (message) => console.log(message));

pyshell.end((err, code, signal) => {
  if (err) throw err;

  console.log(`The exit code was: ${code}`);
  console.log(`The signal was: ${signal}`);
  console.log('finished');
})

// const dirPython = '/usr/bin/python3'; //resolve('usr', 'bin', 'python3');
// const scriptPy = resolve(__dirname);

// const options = {
//   mode: 'text',
//   pythonPath: dirPython,
//   pythonOptions: ['-u'],
//   scriptPath: scriptPy,
//   args: ['a', 'b', 'c', 'd'], 
// }

// PythonShell.run('helloWorld.py', options, (err, results) => {
//   if(err) throw err;
  
//   console.log(`results: ${results}`);
// })