import { Card, message } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HeaderForm } from '../../components'
import Stepform from '../../components/StepForm'

const FormKeahlian = () => {
  const navigate = useNavigate();
  const cv = useSelector((state) => state.cv);
  const id = Math.random()*10
  const [input, setInput] = useState([{ id: id, abilty: '' }]);
  const handleAddAbility = () => {
      setInput([...input, {  id: id, abilty: ''}]);
  };
  const handleOnChange = (id, e) => {
      let {name, value} = e.target
    const newInput = input.map((i) => {
      if (id === i.id) {
        i[name] = value;
      }
      return i;
    });

    setInput(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newDataAbility = cv.dataPendidikan;
    newDataAbility = [...cv.dataKerja, input];
    localStorage.setItem('data-kemampuan', JSON.stringify(newDataAbility));
    navigate('/');
    message.success('Data kemampuan Berhasil Di simpan');
  }
  return (
    <div className='form-keahlian'>
      <HeaderForm />
      <Stepform current={3} />
      <Card style={{ backgroundColor: '#eeee' }}>
        <form onSubmit={handleSubmit}>
          {input.map((field, index) => (
            <div key={index}>
              <input
                required
                name='abilty'
                type={'text'}
                placeholder='Input Skil'
                className='input-skill'
                value={field.abilty}
                onChange={(event) => handleOnChange(field.id, event)}
              />
            </div>
          ))}
          <input
            onClick={handleAddAbility}
            className='another_skill'
            type={'button'}
            value={'+ Add Another Skill'}
          />
          <input type={'submit'} value={'Submit'} />
        </form>
      </Card>
    </div>
  );
}

export default FormKeahlian