import { EyeOutlined } from "@ant-design/icons/lib/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actionTypes from "../../redux/actionTypes";

const ListData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataUSer, setDataUser] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('data');
    const dataJson = JSON.parse(data);
    setDataUser(
      dataJson !== null ? dataJson.map((res, index) => {
        return {
          key: res.uid,
          no: index + 1,
          id: res.uid,
          name: res.name,
          address: res.address,
          email: res.email,
          placeOfBirth: res.placeOfBirth,
          date: res.date,
          religion: res.religion,
          noTelp: res.noTelp,
          gender: res.gender,
        };
      }) : ''
    );
  },[])

  const handleView = (id) => {
    const filterDataById = dataUSer.filter((res, index) => {
      return res.id === id
    });
    dispatch({ type: actionTypes.Data_USER, value: filterDataById });
    navigate(`/detail/${id}`);
  }

  const dataSource = dataUSer !== null ? dataUSer : '';

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: '7%',
      responsive: ['sm'],
      align: 'center',
    },
    {
      title: 'ID No.',
      dataIndex: 'id',
      key: 'id',
      width: '18%',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      align: 'center',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '35%',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      align: 'center',
      render: (index, res) => {
        return (
          <div
            onClick={() => handleView(res.id)}
            style={{
              fontSize: '20px',
              border: '1px solid #eeee',
              display: 'inline-block',
              padding: '5px 8px',
              cursor: 'pointer',
            }}
          >
            <EyeOutlined />
          </div>
        );
      },
    },
  ];
  return (
    <div id="list">
      <h1>Teravin test React.js</h1>
      <Button type='primary' className="btn-add"><Link to={"/form/data-personal"}>+ Add Data</Link></Button>
      <Table  className="table" dataSource={dataSource} columns={columns}  />
    </div>
  );
};

export default ListData