import React, { useState } from "react";
import { SinhVien } from "../models/SinhVien";

interface Props {
  onAdd: (sv: SinhVien) => void;
}

const SinhVienForm: React.FC<Props> = ({ onAdd }) => {
  const [maSV, setMaSV] = useState("");
  const [tenSV, setTenSV] = useState("");
  const [tuoi, setTuoi] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({ maSV, tenSV, tuoi });

    setMaSV("");
    setTenSV("");
    setTuoi(0);
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
        type="number"
        placeholder="Tuổi"
        value={tuoi}
        onChange={(e) => setTuoi(Number(e.target.value))}
      />

      <button type="submit">Thêm</button>
    </form>
  );
};

export default SinhVienForm;