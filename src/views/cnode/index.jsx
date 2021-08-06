import React, { useState, useEffect } from 'react'
import Cnav from "./components/Cnav";
import Clist from './components/Clist';
import Cpage from './components/Cpage';
import { fetchList } from '@/api/index'

export default
  () => {

    const cates = [
      { id: 1, label: '全部', tab: '' },
      { id: 2, label: '精华', tab: 'good' },
      { id: 3, label: '问答', tab: 'ask' },
      { id: 4, label: '招聘', tab: 'job' },
      { id: 5, label: '分享', tab: 'share' }
    ]
    const [tab, setTab] = useState('')
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])

    useEffect(() => {
      fetchList({
        page,
        tab,
        limit: 10,
        mdrender: true,
      }).then(res => {
        console.log(res)
        setList([...res.data])
      })
    }, [page, tab])



    return (
      <div className='cnode-box'>
        <Cnav data={cates} value={tab} onChange={setTab} />
        <Clist clist={list} />
        <Cpage value={page} onChange={setPage} />
      </div>
    )
  }
