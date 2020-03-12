import {PythonShell} from 'python-shell';

PythonShell.runString('x=1+1;print(x)', null, (err) => {
  if(err) throw err;
  
  console.log('finished');
})