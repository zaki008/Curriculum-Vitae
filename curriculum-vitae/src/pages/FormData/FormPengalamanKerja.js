import { Card, Col, Row, message } from 'antd';
import React, { useState } from 'react'
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderForm } from '../../components';
import Stepform from '../../components/StepForm';

const FormPengalamanKerja = () => {
  let id = Math.random() * 100;
  const cv = useSelector((state) => state.cv);
  const navigate = useNavigate();
  const [input, setInput] = useState([
    {
      id : id,
      name: '',
      address: '',
      lengthOfWork: 0,
      position: ''
    },
  ]);

  const handleAddWork = () => {
    setInput([
      ...input,
      {
        id: id,
        name: '',
        address: '',
        lengthOfWork: 0,
        position: '',
      },
    ]);
  }

  const handleOnChange = (id, e) => {
    const {name, value} = e.target
    const newInput = input.map((i) => {
      if(id === i.id){
        i[name] = value;
      }
      return i;
    })
    setInput(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDataKerja = cv.dataPendidikan;
    newDataKerja = [...cv.dataKerja, input];
    localStorage.setItem('data-kerja', JSON.stringify(newDataKerja));
    navigate('/form/data-keahlian');
    message.success('Data Pengalaman Kerja Berhasil Di simpan');
  }
  return (
    <div className='form'>
      <HeaderForm />
      <Stepform current={2} />
      <Card style={{ width: '100%', backgroundColor: '#EEEEEE' }}>
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
                    <Card style={{ width: '100%' }}>
                      <div className='form-group'>
                        <div className='form-group'>
                          <label>Nama Perusahaan</label>
                          <input
                            required
                            type={'text'}
                            id='name'
                            name='name'
                            value={field.name}
                            onChange={(e) => handleOnChange(field.id, e)}
                          />
                        </div>
                        <label>Alamat Perusahaan</label>
                        <input
                          required
                          type={'text'}
                          id='address'
                          name='address'
                          value={field.address}
                          onChange={(e) => handleOnChange(field.id, e)}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Lama Bekerja</label>
                        <input
                          required
                          type={'number'}
                          id='lengthOfWork'
                          name='lengthOfWork'
                          value={field.lengthOfWork}
                          onChange={(e) => handleOnChange(field.id, e)}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Jabatan</label>
                        <input
                          required
                          type={'text'}
                          id='position'
                          name='position'
                          value={field.position}
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
                    <span className='plus' onClick={handleAddWork}>+</span>
                    <p className='text'>Add Riwayat Pekerjaan</p>
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

export default FormPengalamanKerja
