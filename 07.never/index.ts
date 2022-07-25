function throwError1(msg: string, errCode: number) {
  throw {
    msg,
    errCode,
  }
}