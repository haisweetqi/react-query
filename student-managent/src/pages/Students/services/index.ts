import apiService from '../../../services'

const StudentService = {
  getListStudent(page: number, limit: number) {
    return apiService.get(`students?_page=${page}&_limit=${limit}`)
  },
  //   addStudent(params: any) {
  //     return apiService.post('students', params)
  //   },
  //   updateStudent(id: any, params: any) {
  //     return apiService.put(`students`, params)
  //   },
  //   deleteStudent(id: any) {
  //     return apiService.delete(`students`)
  //   },
}

export default StudentService
