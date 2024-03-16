import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
const { TabPane } = Tabs;

function Admin() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  const { portfolioData } = useSelector((state) => state.root);
  // console.log(portfolioData);
  return (
    <div>
      {portfolioData && (
        <div>
          <Header />
          <div className="flex justify-between p-10">
            <h1>Admin Panel</h1>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/admin-login";
              }}
            >
              Logout
            </button>
          </div>
          <div className="mt-5 p-5">
            <Tabs defaultActiveKey="1" tabPosition="left">
              <TabPane tab="Intro" key="1">
                <AdminIntro />
              </TabPane>
              <TabPane tab="About" key="2">
                <AdminAbout />
              </TabPane>
              <TabPane tab="Experiences" key="3">
                <AdminExperiences />
              </TabPane>
              <TabPane tab="Projects" key="4">
                <AdminProjects />
              </TabPane>
              <TabPane tab="Courses" key="5">
                <AdminCourses />
              </TabPane>
              <TabPane tab="Contact" key="6">
                <AdminContact />
              </TabPane>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
