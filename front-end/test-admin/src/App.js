import './App.css';
import { Flex } from 'antd';
import Menu from './components/admin/menu';

import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Flex gap="middle" vertical>
        <Flex vertical={false}>
         <Menu></Menu>

        

        </Flex>
      </Flex>
    </div>
  );
}

export default App;
