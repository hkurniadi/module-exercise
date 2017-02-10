function printStatement() {
  console.log("This is from another file");
  console.log(privateFn());
}

function privateFn() {
  return 'This is from private function from another file';
}

module.exports = {message: printStatement};
//console.log(module.exports.message);