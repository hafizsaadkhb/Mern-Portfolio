import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" title="Name" label="Name">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="name"
          />
        </Form.Item>
        <Form.Item className="inline-block" name="gender" title="Gender" label="Gender">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="gender"
          />
        </Form.Item>
        <Form.Item className="inline-block" name="age" title="Age" label="Age">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="age"
          />
        </Form.Item>
        <Form.Item name="mobile" title="Mobile" label="Mobile">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="mobile"
          />
        </Form.Item>
        <Form.Item name="email" title="Email" label="Email">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="email"
          />
        </Form.Item>
        <Form.Item name="country" title="Country" label="Country">
          <Input
            className="hover:border-secondary focus:border-secondary"
            placeholder="country"
          />
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

export default AdminContact;
