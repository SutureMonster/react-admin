import React from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import { Menu } from 'antd';
import routers from '@/views'
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons'
import img from '@/utils/img.js'
const { SubMenu } = Menu
export default prpos => {
  // console.log('xxx', routers)
  const Toggle = ({ value, onChange }) => (
    <div className='toggle'>
      {
        value
          ? <MenuUnfoldOutlined onClick={() => onChange(false)} />
          : <MenuFoldOutlined onClick={() => onChange(true)} />
      }
    </div>

  )
  return (
    <div className='cj-sider'>
      <div className="logo" >
        <img
          style={
            {
              width: prpos.value ? '85px' : '200px',
              height: prpos.value ? '50px' : '100px'
            }
          }
          src={img.logo}
          alt=""
        />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
          routers.map(ele => (
            <SubMenu key={ele.id} icon={ele.icon} title={ele.text}>
              {
                ele.children && ele.children.map(ele => (
                  <Menu.Item key={ele.id} >
                    <Link to={ele.path}>{ele.text}</Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
      <Toggle {...prpos} />
    </div>
  )
}




