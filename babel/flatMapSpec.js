it('flatMap() is in core-js/shim', function() {
  // flatMap => First map(), then flat(depth 1)

  // Signature:
  // var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
  //   return element for new_array
  // }[, thisArg]);

  const input = [[1], [2, 2], [3, 3, 3]];
  const withoutFlatMap = input.reduce((acc, value) => acc.concat([value.length]), []);

  const result = input.flatMap(x => x.length);
  expect(result).toEqual([1, 2, 3]);
});
