import { Card, Col, message, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderForm } from '../../components'
import Stepform from '../../components/StepForm'
import actionTypes from '../../redux/actionTypes';

const FormDataPersonal = () => {
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.cv);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    address: '',
    placeOfBirth: '',
    date: '',
    religion: '',
    noTelp: 0,
    gender: 'pria'
  });

  useEffect(() => {
    if (cv.successCreatePersonal === true) {
      localStorage.setItem('data', JSON.stringify([...cv.data]));
      navigate('/form/data-riwayat-pendidikan');
      message.success('Data Personal Berhasil Di simpan');
      dispatch({ type: actionTypes.SUCCESS_CREATE_PERSONAL, value: false });
    }
  },[cv.data, cv.successCreatePersonal, dispatch, navigate])

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setInput({...input, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const unix = new Date();
    let uid = unix.getTime();
    const {name, email, address, placeOfBirth, date, religion, noTelp, gender} = input;
    let newData = cv.data;
    newData = [
      ...cv.data,
      {
        uid,
        name,
        email,
        address,
        placeOfBirth,
        date,
        religion,
        noTelp,
        gender,
      },
    ];
    dispatch({ type: actionTypes.IS_DATA, value: newData });
    dispatch({ type: actionTypes.SUCCESS_CREATE_PERSONAL, value: true });
  }
  return (
    <div className='form'>
      <HeaderForm />
      <Stepform current={0} />
      <Card className='card'>
        <Row>
          <Col span={24}>
            <form onSubmit={handleSubmit}>
              <Row gutter={[32]}>
                <Col md={12} xs={24}>
                  <div className='form-group'>
                    <label>Nama Lengkap</label>
                    <input
                      required
                      type={'text'}
                      id='name'
                      name='name'
                      value={input.name}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                    required
                      type={'email'}
                      id='email'
                      name='email'
                      value={input.email}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Alamat</label>
                    <input
                      required
                      type={'text'}
                      id='address'
                      name='address'
                      value={input.address}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Tempat Lahir</label>
                    <input
                      required
                      type={'text'}
                      id='placeOfBirth'
                      name='placeOfBirth'
                      value={input.placeOfBirth}
                      onChange={handleOnChange}
                    />
                  </div>
                </Col>
                <Col md={12} xs={24}>
                  <div className='form-group'>
                    <label>Tanggal lahir</label>
                    <input
                      required
                      type={'date'}
                      id='date'
                      name='date'
                      value={input.date}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Agama</label>
                    <input
                      required
                      type={'text'}
                      id='religion'
                      name='religion'
                      value={input.religion}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Nomor Telepon</label>
                    <input
                      required
                      type={'number'}
                      id='noTelp'
                      name='noTelp'
                      value={input.noTelp}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: '18px',
                        display: 'inline-block',
                        marginBottom: '15px',
                      }}
                    >
                      Jenis Kelamin
                    </label>
                    <br />
                    <div style={{ display: 'flex' }}>
                      <input
                        type='radio'
                        id='gender'
                        name='gender'
                        value={'pria'}
                        checked={input.gender === 'pria'}
                        onChange={handleOnChange}
                      />
                      <label
                        style={{
                          fontSize: '16px',
                          fontWeight: '400',
                          marginLeft: '4px',
                          marginRight: '12px',
                        }}
                      >
                        Pria
                      </label>
                      <br />
                      <input
                        type='radio'
                        id='gender'
                        name='gender'
                        value={'wanita'}
                        checked={input.gender === 'wanita'}
                        onChange={handleOnChange}
                      />
                      <label
                        style={{
                          fontSize: '16px',
                          fontWeight: '400',
                          marginLeft: '4px',
                        }}
                      >
                        Wanita
                      </label>
                    </div>
                  </div>
                </Col>
                <input type={'submit'} value={'Next'} />
              </Row>
            </form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default FormDataPersonal
