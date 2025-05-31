"use client";
import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import styles from "./AddDoctor.module.scss";
import { Paperclip } from "lucide-react";
import axios from "axios";

interface FormData {
  fullName: string;
  photo: File | null;
  department: string;
  speciality: string;
  phone: string;
  email: string;
}

interface Department {
  id: number;
  name: string;
}

interface Speciality {
  id: number;
  name: string;
}

const AddDoctorForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    photo: null,
    department: "",
    speciality: "",
    phone: "",
    email: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [deptResponse, specResponse] = await Promise.allSettled([
          axios.get("http://13.60.242.78/ru/departments/"),
          axios.get("http://13.60.242.78/ru/specialities/"),
        ]);

        if (deptResponse.status === "fulfilled") {
          setDepartments(deptResponse.value.data);
        } else {
          setDepartments([
            { id: 1, name: "Стоматология" },
            { id: 2, name: "Кардиология" },
            { id: 3, name: "Неврология" },
            { id: 4, name: "Педиатрия" },
            { id: 5, name: "Хирургия" },
            { id: 6, name: "Терапия" },
          ]);
        }

        if (specResponse.status === "fulfilled") {
          setSpecialities(specResponse.value.data);
        } else {
          setSpecialities([
            { id: 1, name: "Главный врач" },
            { id: 2, name: "Старший врач" },
            { id: 3, name: "Врач" },
            { id: 4, name: "Интерн" },
            { id: 5, name: "Ординатор" },
          ]);
        }
      } catch (error) {
        console.error("Error loading options:", error);
        setDepartments([
          { id: 1, name: "Стоматология" },
          { id: 2, name: "Кардиология" },
          { id: 3, name: "Неврология" },
          { id: 4, name: "Педиатрия" },
          { id: 5, name: "Хирургия" },
          { id: 6, name: "Терапия" },
        ]);
        setSpecialities([
          { id: 1, name: "Главный врач" },
          { id: 2, name: "Старший врач" },
          { id: 3, name: "Врач" },
          { id: 4, name: "Интерн" },
          { id: 5, name: "Ординатор" },
        ]);
      } finally {
        setLoadingOptions(false);
      }
    };

    loadOptions();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));

      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setPhotoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.department ||
      !formData.speciality ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    setIsLoading(true);

    try {
      const submitData = new FormData();

      submitData.append("full_name", formData.fullName);
      submitData.append("department", formData.department);
      submitData.append("speciality", formData.speciality);
      submitData.append("phone", formData.phone);
      submitData.append("email", formData.email);

      if (formData.photo) {
        submitData.append("photo", formData.photo);
      }

      console.log("Submitting data:");
      for (let [key, value] of submitData.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(
        "http://13.60.242.78/ru/doctor/",
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Doctor added successfully:", response.data);
      alert("Врач успешно добавлен!");

      setFormData({
        fullName: "",
        photo: null,
        department: "",
        speciality: "",
        phone: "",
        email: "",
      });
      setPhotoPreview(null);
    } catch (error) {
      console.error("Error adding doctor:", error);

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          const errorData = error.response.data;
          console.log("Validation errors:", errorData);

          let errorMessage = "Ошибки валидации:\n";
          Object.keys(errorData).forEach((field) => {
            if (Array.isArray(errorData[field])) {
              errorMessage += `${field}: ${errorData[field].join(", ")}\n`;
            } else {
              errorMessage += `${field}: ${errorData[field]}\n`;
            }
          });

          alert(errorMessage);
        } else if (error.response?.status === 500) {
          alert("Ошибка сервера. Попробуйте позже.");
        } else {
          alert(`Ошибка: ${error.response?.status || "Неизвестная ошибка"}`);
        }
      } else {
        alert("Ошибка сети. Проверьте подключение к интернету.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (loadingOptions) {
    return <div>Загрузка опций...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Добавление врача</h1>

        <div className={styles.form}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>ФИО</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Асанов Айтенир"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Фото</label>
            <div className={styles.photoUploadContainer}>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className={styles.hiddenFileInput}
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className={styles.photoUploadLabel}>
                {formData.photo ? formData.photo.name : "Закрепите фото врача"}
                <Paperclip />
              </label>
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Preview"
                  className={styles.photoPreview}
                />
              )}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Отделение</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={styles.select}
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Специальность</label>
            <select
              name="speciality"
              value={formData.speciality}
              onChange={handleInputChange}
              className={styles.select}
            >
              {specialities.map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Контакты</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0550 941 433"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Эл почта</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="asanovaitenir@gmail.com"
              className={styles.input}
            />
          </div>

          <button
            onClick={handleSubmit}
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Добавление..." : "Добавить врача"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorForm;
