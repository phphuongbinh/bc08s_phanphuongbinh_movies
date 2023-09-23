import React from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormLogin = () => {
  const dispatch = useDispatch();
  // const [, setUser] = useLocalStorage("USER", null);
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeaders(),
      })
      .then((result) => {
        let action = {
          type: SET_INFO,
          payload: result.data.content,
        };
        dispatch(action);
        userLocalStorage.set(result.data.content);
        // setUser(result.data.content);
        message.success("Đăng nhập thành công");
        navigate("/");
      })
      .catch((err) => {
        message.error("Tài khoản hoặc mật khẩu không chính xác");
        console.log(err);
      });
  };
  return (
    <>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-1/2 p-5 shadow rounded-xl"
      >
        <Form.Item
          label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 20,
          }}
        >
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLogin;
