import React from 'react';
import SidebarCustom from './layouts/SidebarCustom';
import ContentCustom from './layouts/ContentCustom';
import HeaderCustom from './layouts/HeaderCustom';
import FooterCustom from './layouts/FooterCustom';
import CardCustom from './components/CardCustom';
import { Layout } from 'antd';


const App: React.FC = () =>{
  return (
    <Layout hasSider>
       <SidebarCustom></SidebarCustom>
      <Layout style={{ marginLeft: 200 }}>
      <HeaderCustom></HeaderCustom>
      <CardCustom></CardCustom>
        <ContentCustom></ContentCustom>
        <FooterCustom></FooterCustom>
      </Layout>
    </Layout>
  );
};

export default App;