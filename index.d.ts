/**
The user's default shell.

@example
```
import defaultShell from 'default-shell';

// macOS
console.log(defaultShell);
//=> '/bin/bash'

// Windows
console.log(defaultShell);
//=> 'C:\\WINDOWS\\system32\\cmd.exe'
```
*/
declare const defaultShell: string;

export default defaultShell;
