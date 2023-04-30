var ref = require('ref-napi')
var ffi = require('ffi-napi');

var myobj = ref.types.void
var myobjPtr = ref.refType(myobj);
var stringPtr = ref.refType(ref.types.CString);
var intPtr = ref.refType(ref.types.int);
var doublePtr = ref.refType(ref.types.double);

var mydll = ffi.Library('./dll/REFPRP64', {
    'GETENUMdll':["void",['int', 'string', myobjPtr, intPtr, stringPtr,'int','int']],
    'REFPROPdll':["void",['string', 'string', 'string', 'int','int','int','double','double','double',
    doublePtr,stringPtr,intPtr,doublePtr,doublePtr,doublePtr,doublePtr,intPtr,stringPtr,'int','int','int','int','int']]
});

// var iFlag = 0
// var hEnum = "MOLAR BASE SI"
// var iEnum = ref.alloc(myobjPtr)
// var ierr =ref.alloc(intPtr)
// var herr = ref.alloc(stringPtr)
// var hEnum_length = 255
// var herr_length = 255

// mydll.GETENUMdll(iFlag, hEnum, iEnum, ierr, herr, hEnum_length, herr_length); 


var hFld = "toto"
var hIn = "tutu"
var hOut = "tata"
var iUnits = 0
var iMass = 1
var iFlag = 2
var a = 0.1
var b = 0.2
var z = 0.3
var output = ref.alloc(doublePtr)
var hUnits = ref.alloc(stringPtr)
var iUCode = ref.alloc(intPtr)
var x = ref.alloc(doublePtr)
var y = ref.alloc(doublePtr)
var x3 = ref.alloc(doublePtr)
var q = ref.alloc(doublePtr)
var ierr = ref.alloc(intPtr)
var herr = ref.alloc(stringPtr)
var hFld_length = 10000
var hIn_length = 255
var hOut_length = 255
var hUnits_length = 255
var herr_length = 255
mydll.REFPROPdll(hFld, hIn, hOut, iUnits, iMass, iFlag, a, b, z, output, hUnits, iUCode, x, y, x3, q, ierr, herr, hFld_length, hIn_length, hOut_length, hUnits_length, herr_length)


//console.log(outPut)
// // You can also access just functions in the current process by passing a null
// var current = ffi.Library(null, {
//   'atoi': [ 'int', [ 'string' ] ]
// });
// current.atoi('1234'); // 1234