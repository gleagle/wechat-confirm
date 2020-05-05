// data：第一个值为表头
// eslint-disable-next-line import/prefer-default-export
export function generateCSVFile(data: []) {
  const [head, ...otherData] = data
  let dataStr = "\ufeff"
  dataStr += head.join()
  dataStr += '\n'
  dataStr += otherData.map(item => item.join()).join('\n')
  return dataStr

  // const blob = new Blob([dataStr], { type: 'text/csv,charset=UTF-8' })
  // const csvUrl = URL.createObjectURL(blob)
  // return csvUrl
}