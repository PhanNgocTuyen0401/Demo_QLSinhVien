import React, { useState } from "react";
import { SinhVien } from "../models/SinhVien";

interface Props {
  onAdd: (sv: SinhVien) => void;
}

const SinhVienForm: React.FC<Props> = ({ onAdd }) => {

  const [maSV, setMaSV] = useState("");
  const [tenSV, setTenSV] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [nganhHoc, setNganhHoc] = useState("");
  const [monHoc, setMonHoc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      maSV,
      tenSV,
      ngaySinh,
      nganhHoc,
      monHoc
    });

    setMaSV("");
    setTenSV("");
    setNgaySinh("");
    setNganhHoc("");
    setMonHoc("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Thêm Sinh Viên</h2>

      <input
        placeholder="Mã SV"
        value={maSV}
        onChange={(e) => setMaSV(e.target.value)}
      />

      <input
        placeholder="Tên SV"
        value={tenSV}
        onChange={(e) => setTenSV(e.target.value)}
      />

      <input
        type="date"
        value={ngaySinh}
        onChange={(e) => setNgaySinh(e.target.value)}
      />

      <input
        placeholder="Ngành học"
        value={nganhHoc}
        onChange={(e) => setNganhHoc(e.target.value)}
      />

      <input
        placeholder="Môn học"
        value={monHoc}
        onChange={(e) => setMonHoc(e.target.value)}
      />

      <button type="submit">Thêm</button>

    </form>
  );
};

export default SinhVienForm;