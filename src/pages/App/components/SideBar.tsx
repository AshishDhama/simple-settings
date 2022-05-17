import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import {Layout, Menu,} from 'antd';
import { UserOutlined,  BarChartOutlined} from '@ant-design/icons';
import {SideBarItems} from '../../../enums/SideBarItems';

interface Props {
  isSidebarOpen?: boolean;
  listingId?: number;
}

const SideBar: React.FC<Props> = function (props: Props) {
    const { Sider} = Layout;
    const items = [
        {
            key: 1,
            icon: React.createElement(UserOutlined),
            label: SideBarItems.USER_SETTINGS,
        },
        {
            key: 2,
            icon: React.createElement(BarChartOutlined),
            label: SideBarItems.DASHBOARD,
        }
    ]

    const navigate = useNavigate();
    const OnClickNavigate = useCallback(({ keyPath }: any) => {
        console.log('OnClickNavigate',keyPath,)
        const key = +keyPath[0];
        switch (key){
            case 1: {
                navigate('/app/settings');
                break;
            }
            case 2: {
                navigate('/app/dashboard');
                break;
            } default : {
                break;
            }
        }
    }, [navigate])
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
              onClick={OnClickNavigate}
          />
      </Sider>
  );
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
