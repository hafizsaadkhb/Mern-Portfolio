import React from "react";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
        const tempSkills = values.skills.split(",");
        values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.post("https://mern-portfolio-server.vercel.app/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={
            {
                ...portfolioData.about,
                skills: portfolioData.about.skills.join(", "),
            }
        }
      >
        <Form.Item name="lottieURL" title="Lottie URL" label="Lottie URL">
          <Input className="hover:border-secondary focus:border-secondary" placeholder="lottieURL" />
        </Form.Item>
        
        <Form.Item name="description1" title="Description 1" label="Description 1">
          <TextArea className="hover:border-secondary focus:border-secondary" placeholder="description1" />
        </Form.Item>

        <Form.Item name="description2" title="Description 2" label="Description 2">
          <TextArea className="hover:border-secondary focus:border-secondary" placeholder="description2" />
        </Form.Item>

        <Form.Item name="skills" title="Skills" label="Skills">
          <TextArea className="hover:border-secondary focus:border-secondary" placeholder="skills" />
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

export default AdminAbout;
