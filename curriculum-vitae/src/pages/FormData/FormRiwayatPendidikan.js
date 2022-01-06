import { Card, Col, Row, message } from 'antd';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderForm } from "../../components";
import Stepform from "../../components/StepForm";
import actionTypes from "../../redux/actionTypes";

const FormRiwayatPendidikan = () => {
  const id = Math.random() * 10;
  const cv = useSelector((state) => state.cv);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState([
    {
      id: id,
      stage: '',
      name: '',
      address: '',
      year: 0,
    },
  ]) 

  useEffect(() => {
    if (cv.successCreatePendidikan === true) {
      navigate('/form/data-pengalaman-kerja');
      message.success('Data Pendidikan Berhasil Di simpan');
      dispatch({ type: actionTypes.SUCCESS_CREATE_PENDIDIKAN, value: false });
    }
  }, [cv.dataPendidikan, cv.successCreatePendidikan, dispatch, navigate]);

  const handleOnChange = (id, e) => {
    let { name, value } = e.target;
    const newInputFields = input.map((i) => {
      if (id === i.id) {
        i[name] = value;
      }
      return i;
    });
    setInput(newInputFields);
  }
  const handleAddField = () => {
    setInput([
      ...input,
      { id: id, stage: '', name: '', address: '', year: '' },
    ]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let newDataPendidikan = cv.dataPendidikan;
    newDataPendidikan = [...cv.dataPendidikan, input];
    localStorage.setItem('data-pendidikan', JSON.stringify(newDataPendidikan));
    dispatch({ type: actionTypes.SUCCESS_CREATE_PENDIDIKAN, value: true });
  }
  return (
    <div className='form' style={{ paddingBottom: '80px' }}>
      <HeaderForm />
      <Stepform current={1} />
      <Card className='card'>
        <Row>
          <Col span={24}>
            <form onSubmit={handleSubmit}>
              <Row gutter={32}>
                {input.map((field, index) => (
                  <Col
                    md={12}
                    xs={24}
                    style={{ marginBottom: '20px' }}
                    key={index}
                  >
                    <Card style={{ width: '100%', height: '450px' }}>
                      <div className='form-group'>
                        <div className='form-group'>
                          <label>Jenjang Pendidikan</label>
                          <input
                            type={'text'}
                            id='stage'
                            name='stage'
                            value={field.stage}
                            onChange={(e) =>
                              handleOnChange(field.id, e)
                            }
                          />
                        </div>
                        <label>Nama Sekolah / Perguruan Tinggi</label>
                        <input
                          type={'text'}
                          id='name'
                          name='name'
                          value={field.name}
                          onChange={(e) => handleOnChange(field.id, e)}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Alamat Sekolah</label>
                        <input
                          type={'text'}
                          id='address'
                          name='address'
                          value={field.address}
                          onChange={(e) => handleOnChange(field.id, e)}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Tahun Lulus</label>
                        <input
                          type={'number'}
                          id='year'
                          name='year'
                          value={field.year}
                          onChange={(e) => handleOnChange(field.id, e)}
                        />
                      </div>
                    </Card>
                  </Col>
                ))}
                <Col md={12} xs={24}>
                  <Card
                    className='add_riwayat'
                    style={{ width: '100%', height: '450px' }}
                  >
                    <span className='plus' onClick={handleAddField}>+</span>
                    <p className='text'>Add Riwayat Pendidikan</p>
                  </Card>
                </Col>
                <input
                  type={'submit'}
                  value={'Next'}
                  style={{ marginBottom: '-70px' }}
                />
              </Row>
            </form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default FormRiwayatPendidikan;