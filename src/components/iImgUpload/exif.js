/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L107
 */
const TiffTags = 0x0112
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L643
 * @param {*} file
 * @param {*} start
 */
const isExif = (file, start) => {
  return [
    String.fromCharCode(file.getUint8(start)),
    String.fromCharCode(file.getUint8(start + 1)),
    String.fromCharCode(file.getUint8(start + 2)),
    String.fromCharCode(file.getUint8(start + 3))
  ].join('')
}
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L534
 * @param {*} file
 * @param {*} tiffStart
 * @param {*} dirStart
 * @param {*} bigEnd
 */
const readTagValue = (file, tiffStart, dirStart, bigEnd) => {
  var entries = file.getUint16(dirStart, !bigEnd)
  var entryOffset
  var i
  for (i = 0; i < entries; i++) {
    entryOffset = dirStart + i * 12 + 2
    if (TiffTags === file.getUint16(entryOffset, !bigEnd)) {
      // short, 16 bit int
      return file.getUint16(entryOffset + 8, !bigEnd)
    }
  }
  return 1
}
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L394
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L651
 * @param {*} file
 * @param {*} start
 */
export const readOrientation = (arrayBuf, start) => {
  var dataView = new DataView(arrayBuf)
  var offset = 2
  var length = dataView.byteLength
  var marker
  while (offset < length) {
    if (dataView.getUint8(offset) !== 0xFF) break
    marker = dataView.getUint8(offset + 1)
    if (marker === 225) {
      start = offset + 4
      if (isExif(dataView, start) !== 'Exif') {
        return 1
      }
      var bigEnd
      var tiffOffset = start + 6
      // test for TIFF validity and endianness
      if (dataView.getUint16(tiffOffset) === 0x4949) {
        bigEnd = false
      } else if (dataView.getUint16(tiffOffset) === 0x4D4D) {
        bigEnd = true
      } else {
        return 1
      }
      if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
        return 1
      }
      var firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd)
      if (firstIFDOffset < 0x00000008) {
        return 1
      }
      return readTagValue(dataView, tiffOffset, tiffOffset + firstIFDOffset, bigEnd)
    } else {
      offset += 2 + dataView.getUint16(offset + 2)
    }
  }
  return 1
}
