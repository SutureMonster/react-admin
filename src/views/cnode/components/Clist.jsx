import React, { useState, useMemo, useCallback } from 'react'
import '../style.scss'

export default prpos => {
  const { clist } = prpos
  // const dateTime=useMemo(()=>{

  // })
  const times = useCallback((val) => {
    var seconds = Math.floor((Date.now() - Date.parse(val)) / 1000)
    var days = Math.floor(seconds / (60 * 60 * 24));
    if (days > 30) {
      return Math.floor(days / 30) + "月前"
    }
    if (days > 0) {
      return days + " 天前";
    }
    var hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    if (hours > 0) {
      return hours + " 小时前 ";
    }
    var minutes = Math.floor((seconds % (60 * 60)) / (60));
    if (minutes > 0) {
      return minutes + " 分钟前 ";
    }
  }, [])
  return (
    <div className="list">
      {
        clist.map(ele => (
          <div key={ele.id} className='cell'>
            {/* 头像 */}
            <a href=""><img src={ele.author.avatar_url} alt="头像" /></a>
            {/* 点击数 */}
            <span className="reply_count">
              <span className="count_of_replies" title="回复数">{ele.reply_count}</span>
              <span>/</span>
              <span className="count_of_visits" title="点击数">{ele.visit_count}</span>
            </span>
            {/* 分类置顶 */}
            <span  >{ele.label}
            </span>
            {/* title */}
            <a href="" className="title" >{ele.title}</a>
            {/* 距今时间 */}
            <span className='time' >
              {times(ele.last_reply_at)}
            </span>
          </div>
        ))
      }

    </div >
  )
}