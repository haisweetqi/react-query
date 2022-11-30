import React, { useState, useEffect } from 'react'
import { Button, Space, Table } from 'antd'
import StudentService from './services'
import { useQueryString } from '../../hooks/useQuery'
import {
  useQuery,
  useMutation,
  QueryClientProvider,
} from '@tanstack/react-query'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  //   {
  //     title: 'Avatar',
  //     dataIndex: 'avatar',
  //     key: 'avatar',
  //     render: (avatar: string) => (
  //       <img src={avatar} style={{ fontSize: '3rem' }} />
  //     ),
  //   },
  {
    title: 'Last_Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <Button type='primary'>Add</Button>
        <Button type='primary' danger>
          Delete
        </Button>
      </Space>
    ),
  },
]

const Students = () => {
  //   const [students, setStudents] = useState([])

  //   const [loading, setLoading] = useState(false)
  //   //   const [pagination, setPagination] = useState({
  //   //     _page: 1,
  //   //     _limit: 20,
  //   //   })

  //   const getStudentList = async (page: number) => {
  //     try {
  //       setLoading(true)
  //       const response = await StudentService.getListStudent(page)
  //       //   console.log(response)

  //       const { data, status } = response
  //       if (status === 200) {
  //         setStudents(data)
  //         setLoading(false)
  //       }
  //     } catch (error) {}
  //   }

  const queryString = useQueryString()
  //   const page = Number(queryString.page) || 1
  const [page, setPage] = useState(1)
  const limit = 20

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['students', page],
    queryFn: () => StudentService.getListStudent(page, limit),
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000,
    keepPreviousData: true,
  })

  const totalStudentCount = Number(data?.headers['x-total-count'])
  const totalPage = Math.ceil(totalStudentCount / limit)

  //

  //   useEffect(() => {
  //     // getStudentList(1)
  //   }, [])
  return (
    <Table
      loading={isLoading}
      columns={columns}
      rowKey='id'
      dataSource={data?.data}
      pagination={{
        position: ['bottomCenter'],
        // so luong data moi page
        pageSize: limit,
        total: totalStudentCount,
        onChange: (page) => {
          setPage(page)
          StudentService.getListStudent(page, limit)
        },
      }}
    />
  )
}
export default Students
