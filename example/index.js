const ffi = require('@dusknguyen/ffi-napi');

const lib = ffi.Library('./add', {
    'Add': ['int', ['int', 'int']]
});

async function add(a,b){
    return a+b;
   }
 
 async function hello() {
     let res = 'Hello World! \n';
     try {
       let now;
       let result;
 
       res = res + `loop: nodeCase(N) vs. goCase(Go) \n`;
 
         now = performance.now();
         result = await add(10,20);
         console.log(result)
         const node1 = performance.now() - now;
 
         now = performance.now();
         result = await lib.Add(10, 20);
         console.log(result)
         const go1 = performance.now() - now;
         res = res + ` N ${node1}ms / Go ${go1}ms \n`;
     
     } catch (err) {
       console.error(err);
     }
     console.log(await res);
   }
  hello()
