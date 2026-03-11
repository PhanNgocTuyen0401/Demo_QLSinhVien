import React from "react";
import { SinhVien } from "../models/SinhVien";

interface Props {
  list: SinhVien[];
  onDelete: (maSV: string) => void;
}

const SinhVienList: React.FC<Props> = ({ list, onDelete }) => {
  return (
    <div>

      <h2>Danh sách sinh viên</h2>

      <table border={1}>

        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày sinh</th>
            <th>Ngành học</th>
            <th>Môn học</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>

          {list.map((sv) => (
            <tr key={sv.maSV}>
              <td>{sv.maSV}</td>
              <td>{sv.tenSV}</td>
              <td>{sv.ngaySinh}</td>
              <td>{sv.nganhHoc}</td>
              <td>{sv.monHoc}</td>
              <td>
                <button onClick={() => onDelete(sv.maSV)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default SinhVienList;