import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  Detail,
  FormDataPersonal,
  FormKeahlian,
  FormPengalamanKerja,
  FormRiwayatPendidikan,
  ListData,
} from '../pages';

const Routers = () => {
   return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<ListData />} />
         <Route path='/form/data-personal' element={<FormDataPersonal />} />
         <Route
           path='/form/data-riwayat-pendidikan'
           element={<FormRiwayatPendidikan />}
         />
         <Route
           path='/form/data-pengalaman-kerja'
           element={<FormPengalamanKerja />}
         />
         <Route
           path='/form/data-keahlian'
           element={<FormKeahlian />}
         />
         <Route path='/detail/:Id' element={<Detail />} />
       </Routes>
     </BrowserRouter>
   );
}

export default Routers