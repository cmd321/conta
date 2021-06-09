export const formatNumberToBrCurrency = (value: number): string => {
  return value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.')
}

export const getDateSeparatedByBars = (dateStr: string): string => {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const unMaskCurrency = (value: string): string => {
  return value
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^0-9.]/g, '')
}
