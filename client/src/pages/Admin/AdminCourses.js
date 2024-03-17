import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Modal, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminCourses() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("edit");

  const onFinish = async (values) => {
    setShowAddEditModel(false);
    setSelectedItemForEdit(null);
    const tempSkills =
      values.technologies.length === 0 ? [] : values.technologies.split(",");
    values.technologies = tempSkills;
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("https://mern-portfolio-server.vercel.app/api/portfolio/update-course", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("https://mern-portfolio-server.vercel.app/api/portfolio/add-course", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("https://mern-portfolio-server.vercel.app/api/portfolio/delete-course", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
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
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-3">
        {courses.map((course) => (
          <div className="shadow-lg border p-5 border-gray-400 shadow-gray-400">
            <h1 className="text-secondary text-xl font-bold">{course.title}</h1>
            <img
              src={course.image}
              className="h-1/3"
              alt={"Image of " + course.title}
            />
            <h1 className="text-xl italic">{course.platform}</h1>
            <h1 className="text-xl font-bold">{course.instructor}</h1>
            <h1 className="overflow-x-scroll whitespace-nowrap">
              {course.image}
            </h1>
            <h1 className="overflow-scroll whitespace-nowrap">{course.link}</h1>
            <h1>
              <br />
              {course.description}
            </h1>
            <br />
            <div className="flex w-full justify-between items-center">
              <button
                className="bg-primary text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  setSelectedItemForEdit(course);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                onClick={() =>
                  Modal.confirm({
                    title: "Confirm Delete",
                    content: "Are you sure to delete this course?",
                    onOk: () => onDelete(course),
                    okText: "Delete",
                    okButtonProps: {
                      className: "bg-secondary text-white",
                    },
                    cancelButtonProps: {
                      className: "",
                    },
                  })
                }
                className="bg-secondary text-white px-5 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="shadow-lg border p-5 border-gray-400 shadow-gray-400 flex justify-center items-center">
          <svg
            onClick={() => {
              setShowAddEditModel(true);
              setType("add");
            }}
            className="w-1/4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
              // fill="#1C274C"
              className="fill-primary hover:fill-secondary"
            />
          </svg>
        </div>
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModel}
          title={selectedItemForEdit ? "Edit Course" : "Add Course"}
          onCancel={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(false);
          }}
          footer=""
        >
          {(selectedItemForEdit || type === "add") && (
            <Form
              onFinish={onFinish}
              layout="vertical"
              initialValues={
                selectedItemForEdit && {
                  ...selectedItemForEdit,
                  technologies:
                    selectedItemForEdit.technologies.length === 0
                      ? ""
                      : selectedItemForEdit.technologies.join(", "),
                  //   technologies: ''
                }
              }
            >
              <Form.Item name="title" title="Title" label="Title">
                <Input type="text"></Input>
              </Form.Item>
              <Form.Item name="image" title="Image URL" label="Image URL">
                <Input type="text"></Input>
              </Form.Item>
              <Form.Item name="link" title="Course URL" label="Course URL">
                <Input type="text"></Input>
              </Form.Item>
              <Form.Item name="technologies" title="Techs" label="Techs">
                <TextArea
                  className="hover:border-secondary focus:border-secondary"
                  placeholder="techs"
                />
              </Form.Item>
              <Form.Item
                name="description"
                title="Description"
                label="Description"
              >
                <TextArea type="text"></TextArea>
              </Form.Item>
              <div className="flex justify-end gap-1">
                <Button htmlType="submit" className="bg-secondary text-white">
                  {selectedItemForEdit ? "Update" : "Add"}
                </Button>
                <Button
                  className=""
                  onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModel(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Modal>
      )}
    </div>
  );
}

export default AdminCourses;
