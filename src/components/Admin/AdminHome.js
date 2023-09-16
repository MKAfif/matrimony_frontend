import React from "react";
import AdminHeader from "./AdminHeader";
import RevenueCard from "./RevenueCard";
import TotalMemberCard from "./TotalMemberCard";
import Table from "./Table";

const AdminHome = () => {
  return (
    <div>
      <AdminHeader />
      <div className="">
        <RevenueCard/>
        <TotalMemberCard/>
       
      </div>
      <Table/>
      
      
    </div>
  );
};

export default AdminHome;
