function max(integers) {
    let m = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < integers.length; i++) {
      if (m < integers[i]) m = integers[i];
    }
    return m;
  }
  const integers = [1,2,3,4,5];
  console.log(max(integers));
  