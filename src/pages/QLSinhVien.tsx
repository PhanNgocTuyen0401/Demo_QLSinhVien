import React, { useState } from "react";
import "./QLSV.css";

interface SinhVien {
  maSV: string;
  tenSV: string;
  tuoi: number;
}

const QLSinhVien = () => {

  const [maSV, setMaSV] = useState("");
  const [tenSV, setTenSV] = useState("");
  const [tuoi, setTuoi] = useState("");
  const [ds, setDs] = useState<SinhVien[]>([]);

  const themSinhVien = () => {

    const sv: SinhVien = {
      maSV,
      tenSV,
      tuoi: Number(tuoi)
    };

    setDs([...ds, sv]);

    setMaSV("");
    setTenSV("");
    setTuoi("");
  };

  const xoaSinhVien = (ma: string) => {
    setDs(ds.filter((sv) => sv.maSV !== ma));
  };

  return (
    <div className="container">

      <h1 className="title">QUẢN LÝ SINH VIÊN</h1>

      <div className="layout">

        {/* FORM */}
        <div className="card">

          <h2>Thêm Sinh Viên</h2>

          <input
            placeholder="Mã sinh viên"
            value={maSV}
            onChange={(e) => setMaSV(e.target.value)}
          />

          <input
            placeholder="Tên sinh viên"
            value={tenSV}
            onChange={(e) => setTenSV(e.target.value)}
          />

          <input
            placeholder="Tuổi"
            value={tuoi}
            onChange={(e) => setTuoi(e.target.value)}
          />

          <button className="btnAdd" onClick={themSinhVien}>
            Thêm Sinh Viên
          </button>

        </div>


        {/* TABLE */}
        <div className="card">

          <h2>Danh Sách Sinh Viên</h2>

          <table>

            <thead>
              <tr>
                <th>Mã SV</th>
                <th>Tên SV</th>
                <th>Tuổi</th>
                <th>Hành động</th>
                <th>Hành động</th>
              </tr>
            </thead>

            <tbody>

              {ds.map((sv) => (
                <tr key={sv.maSV}>
                  <td>{sv.maSV}</td>
                  <td>{sv.tenSV}</td>
                  <td>{sv.tuoi}</td>
                  <td>
                    <button
                      className="btnDelete"
                      onClick={() => xoaSinhVien(sv.maSV)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default QLSinhVien;