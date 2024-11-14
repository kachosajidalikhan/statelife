import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import DashFooter from '../components/DashFooter';


const Chats = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        <div className="flex flex-1 mb-20">
          <ChatList />
          <ChatWindow />
          
        </div>
        <div className="fixed bottom-0 w-full">
        <div className="w-[100%]">
          <DashFooter />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chats;
