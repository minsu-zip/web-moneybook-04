import fetcher from '../utils/fetcher.js'

const getTransactionHistoryList = async (year, month) => {
  const { data } = await fetcher.get(`/transaction?year=${year}&month=${month}`)

  return data ?? []
}

const getExpenseTransactionHistoryList = async (year, month) => {
  const { data } = await fetcher.get(`/transaction/category?year=${year}&month=${month}`)

  return data ?? []
}

export { getTransactionHistoryList, getExpenseTransactionHistoryList }