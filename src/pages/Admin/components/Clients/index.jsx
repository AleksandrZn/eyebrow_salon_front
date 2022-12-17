import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Space,
  Switch,
  Table,
  Tag,
  Avatar,
} from "antd";

import React, { useRef, useState } from "react";
const Clients = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchPropsDate = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <DatePicker
          format={"DD.MM.YYYY"}
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          onChange={(date, dateString) => {
            console.log(dateString);
            setSelectedKeys(dateString ? [dateString] : []);
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text),
  });
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text),
  });
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Услуга",
      dataIndex: "service",
      filters: [
        {
          text: "Брови1",
          value: "Брови1",
        },
        {
          text: "Брови2",
          value: "Брови2",
        },
      ],
      onFilter: (value, record) => record.service.indexOf(value) === 0,
    },
    {
      title: "Цена",
      dataIndex: "price",
    },
    {
      title: "Статус",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "green" : "red";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      filters: [
        {
          text: "СДЕЛАНО",
          value: "СДЕЛАНО",
        },
        {
          text: "ОТМЕНА",
          value: "ОТМЕНА",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Дата",
      dataIndex: "date",
      ...getColumnSearchPropsDate("date"),
    },
    {
      title: "Мастер",
      dataIndex: "master",
      ...getColumnSearchProps("master"),
    },
    {
      title: "Клиент",
      dataIndex: "client",
      ...getColumnSearchProps("client"),
    },
    {
      title: "",
      dataIndex: "delete",
    },
    {
      title: "",
      dataIndex: "edit",
    },
  ];
  const data = [];
  let date = new Date();
  for (let i = 1; i <= 1000; i++) {
    data.push({
      key: i,
      id: i,
      service: `Брови${i}`,
      status: ["СДЕЛАНО", "ОТМЕНА"],
      date: date.toLocaleString(),
      master: [<Avatar icon={<UserOutlined />} />, `Серега`],
      client: `Валера +79883481256`,
      price: `10${i} руб.`,
      delete: (
        <Button type="danger" shape="circle">
          <DeleteOutlined />
        </Button>
      ),
      edit: (
        <Button type="primary" shape="circle">
          <EditOutlined />
        </Button>
      ),
    });
  }

  const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
  };

  const defaultTitle = () => "Here is title";

  const defaultFooter = () => "Here is footer";

  const [bordered, setBordered] = useState(true);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("small");
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(undefined);
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomRight");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState(undefined);

  const scroll = {};

  if (yScroll) {
    scroll.y = 240;
  }

  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps = {
    bordered,
    loading,
    size,
    showHeader,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};
export default Clients;
