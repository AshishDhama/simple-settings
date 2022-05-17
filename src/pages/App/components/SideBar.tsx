import React from 'react';
import { useNavigate } from 'react-router-dom';

import {Layout, Menu, MenuProps,} from 'antd';
import { UserOutlined,  BarChartOutlined} from '@ant-design/icons';
import {SideBarItems} from '../../../enums/SideBarItems';

interface Props {
  isSidebarOpen?: boolean;
  listingId?: number;
}

const SideBar: React.FC<Props> = function (props: Props) {
    const [current, setCurrent] = React.useState('settings');

    const { Sider} = Layout;
    const items = [
        {
            key: 'settings',
            icon: React.createElement(UserOutlined),
            label: SideBarItems.USER_SETTINGS,
        },
        {
            key: 'dashboard',
            icon: React.createElement(BarChartOutlined),
            label: SideBarItems.DASHBOARD,
        }
    ]

    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`/app/${e.key}`);

    };

  return (
      <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
              console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
          }}
      >
          <div className='sticky top-0 z-20 flex h-20 flex-row items-center justify-between px-4'>
              <div className='z-[1] flex flex-col items-start justify-center'>
                  <h3 className='text-2xl text-white'>{'Settings Pro'}</h3>
              </div>
          </div>
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              items={items}
              selectedKeys={[current]}
              onClick={onClick}
          />
      </Sider>
  );
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
