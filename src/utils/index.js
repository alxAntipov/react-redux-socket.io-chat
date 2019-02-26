export const XOR = (a, b) => {
  var res = "",
    l = Math.max(a.length, b.length)
  for (var i = 0; i < l; i += 4)
    res =
      (
        "000" +
        (
          parseInt(a.slice(-i - 4, -i || a.length), 16) ^
          parseInt(b.slice(-i - 4, -i || b.length), 16)
        ).toString(16)
      ).slice(-4) + res
  return res
}
