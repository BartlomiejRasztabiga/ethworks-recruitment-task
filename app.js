function add(a, b) {
  let params = a.concat(b);
  let exponentsToConstantsMap = new Map();

  params.forEach(([constant, exponent]) => {
    if (exponentsToConstantsMap.has(exponent)) {
      exponentsToConstantsMap.set(exponent, exponentsToConstantsMap.get(exponent) + constant);
    } else {
      exponentsToConstantsMap.set(exponent, constant);
    }
  })

  //filter out 0 constants with non 0 exponents
  let result = Array.from(exponentsToConstantsMap).filter(([exponent, constant]) => (constant != 0 || (constant == 0 && exponent == 0))).map(([exponent, constant]) => [constant, exponent])

  //sort by exponent descending
  result.sort((a, b) => {
    x = a[1]
    y = b[1]

    if (x < y) {
      return 1;
    } else if (x > y) {
      return -1;
    } else {
      return 0;
    }
  })

  return result;
}

exports.add = add;