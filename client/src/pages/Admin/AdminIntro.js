import React from "react";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" title="Welcome Text" label="Welcome Text">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="welcomeText" />
        </Form.Item>
        <Form.Item name="firstName" title="First Name" label="First Name">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="firstName" />
        </Form.Item>
        <Form.Item name="middleName" title="Middle Name" label="Middle Name">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="middleName" />
        </Form.Item>
        <Form.Item name="lastName" title="Last Name" label="Last Name">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="lastName" />
        </Form.Item>
        <Form.Item name="caption" title="Caption" label="Caption">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="caption" />
        </Form.Item>
        <Form.Item name="description" title="Description" label="Description">
          <TextArea className="hover:border-secondary focus:border-secondary" placeholder="description" />
        </Form.Item>
        <div className="flex justify-end">
          <button
            className="px-10 py-2 h-auto border border-secondary text-secondary hover:bg-secondary hover:text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
