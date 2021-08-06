import React from 'react'

import { FireOutlined, LikeOutlined } from '@ant-design/icons'

import Cnode from '@/views/cnode'
import StydyStore from '@/views/demo'

export default [
  {
    id: 10,
    text: 'Study',
    icon: <LikeOutlined />,
    children: [
      {
        id: 1001,
        text: 'Study Redux',
        path: '/redux',
        component: StydyStore
      },
    ]
  },
  {
    id: 11,
    text: 'DEMO',
    icon: <FireOutlined />,
    children: [
      {
        id: 1101,
        text: 'Cnode 社区',
        path: '/cnode',
        component: Cnode
      },
    ]
  }
]