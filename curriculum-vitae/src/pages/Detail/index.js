import { Card } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {Id} = useParams();
    const dataUSer = useSelector((state) => state.cv.dataUser);
    console.log(dataUSer);

    useEffect(() => {
        if(Id !== undefined){
           
        }
    },[Id])

    return (
      <div>
        {dataUSer.map((res) => {
            console.log(res)
          return (
            <div id='detail'>
              <div className='site-card-border-less-wrapper'>
                <Card
                  title={<h1>Detail</h1>}
                  bordered={false}
                  style={{ width: 500 }}
                >
                  <div className='data'>
                    <label>Nama Lengkap : </label>
                    <p>{res.name}</p>
                  </div>
                  <div className='data'>
                    <label>Jenis Kelamin : </label>
                    <p>{res.gender}</p>
                  </div>
                  <div className='data'>
                    <label>Alamat Email : </label>
                    <p>{res.email}</p>
                  </div>
                  <div className='data'>
                    <label>Alamat Rumah : </label>
                    <p>{res.address}</p>
                  </div>
                  <div className='data'>
                    <label>Tempat Lahir : </label>
                    <p>{res.placeOfBirth}</p>
                  </div>
                  <div className='data'>
                    <label>Agama : </label>
                    <p>{res.religion}</p>
                  </div>
                  <div className='data'>
                    <label>Nomor Telepon : </label>
                    <p>{res.noTelp}</p>
                  </div>
                </Card>
              </div>
              ,
            </div>
          );
        })}
      </div>
    );
}

export default Detail;