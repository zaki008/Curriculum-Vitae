import React from 'react'
import { Steps } from 'antd';

const Stepform = (props) => {
    const { Step } = Steps;
    return (
      <div style={{ width: '70%', margin: ' 40px auto' }}>
        <Steps size='small' current={props.current} >
          <Step title='Data Personal' />
          <Step title='Riwayat Pendidikan' />
          <Step title='Pengalaman Kerja' />
          <Step title='Keahlian' />
        </Steps>
      </div>
    );
}

export default Stepform
