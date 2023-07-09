import { Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Space, Upload, Input } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const MainBlock1 = ({ data }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      header: data.main[0].header,
      text: data.main[0].text,
    });
    setFileList({
      uid: "-1",
      name: "image",
      status: "done",
      url: `http://localhost:5000/Sasha228.png`,
    });
    console.log(
        "Values",data.main[0]);
  }, [form, data]);
  const uuid = "Sasha228";
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handleRemove = async () => {
    const response = await axios
      .delete(`http://localhost:5000/api/image?name=.png`)
      .then((data.main[0].image = ""))
      .than(setFileList([]))
      .then(console.log("Response ", response));
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Загрузка
      </div>
    </div>
  );

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = async (values) => {
    console.log(values);
    let copy_data = data;
    copy_data.main[0].header = values.header;
    copy_data.main[0].text = values.text;
    copy_data.main[0].image = `${uuid}.png`;
    await axios
      .post("http://localhost:5000/api/data", copy_data)
      .then(console.log("Copy_data", copy_data.main[0]));
  };

  return (
    <Form
      form={form}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Главная">
        <span className="ant-form-text">Блок №1</span>
      </Form.Item>
      <Form.Item
        name="header"
        label="Заголовок"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите заголовок!",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={20} />
      </Form.Item>
      <Form.Item
        name="text"
        label="Текст блока"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите текст!",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={80} />
      </Form.Item>
      <Form.Item
        name="upload"
        label="Загрузка"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="img/png/svg"
      >
        <Upload
          action={`http://localhost:5000/api/image?name=${uuid}.png`}
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          maxCount={1}
          onRemove={handleRemove}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Modal
        open={previewOpen}
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Готово
          </Button>
          <Button htmlType="reset">Сбросить</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default MainBlock1;
