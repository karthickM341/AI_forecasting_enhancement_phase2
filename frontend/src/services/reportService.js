import API from './api'

export const downloadExcel = async () => {
  return API.get('/reports/export-excel')
}