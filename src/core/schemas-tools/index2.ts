var protobuf = require('protobufjs');

protobuf.load('simple.proto', function (err, root) {
  console.log(err);
  var OneOfValues = root.lookupType('OneOfValues');
  console.log(OneOfValues.verify(OneOfValues.fromObject({})));
  console.log(OneOfValues.verify(OneOfValues.fromObject({ int_choice: 5 })));
  console.log(OneOfValues.verify(OneOfValues.fromObject({ oneof_choice: 'int_choice', int_choice: 5 })));
  console.log(OneOfValues.verify(OneOfValues.fromObject({ string_choice: 'abc' })));
  console.log(OneOfValues.verify(OneOfValues.fromObject({ oneof_choice: 'string_choice', string_choice: 'abc' })));

});