"use client";
import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import styles from "./AddDoctor.module.scss";
import { Paperclip } from "lucide-react";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  photo: File | null;
  department: string;
  jobTitle: string;
  phone: string;
  email: string;
}

interface Department {
  id: number;
  name: string;
}

interface JobTitle {
  id: number;
  name: string;
}

const AddDoctorForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    photo: null,
    department: "",
    jobTitle: "",
    phone: "",
    email: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [jobTitles, setJobTitles] = useState<JobTitle[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  // Base API URL - you can move this to environment variables
  const API_BASE_URL = "http://13.60.242.78/ru";

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [deptResponse, jobTitleResponse] = await Promise.allSettled([
          axios.get(`${API_BASE_URL}/departments/`),
          axios.get(`${API_BASE_URL}/job_titles/`), // Updated endpoint
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

        if (jobTitleResponse.status === "fulfilled") {
          setJobTitles(jobTitleResponse.value.data);
        } else {
          setJobTitles([
            { id: 1, name: "Главный врач" },
            { id: 2, name: "Старший врач" },
            { id: 3, name: "Врач" },
            { id: 4, name: "Интерн" },
            { id: 5, name: "Ординатор" },
          ]);
        }
      } catch (error) {
        console.error("Error loading options:", error);
        // Set fallback data
        setDepartments([
          { id: 1, name: "Стоматология" },
          { id: 2, name: "Кардиология" },
          { id: 3, name: "Неврология" },
          { id: 4, name: "Педиатрия" },
          { id: 5, name: "Хирургия" },
          { id: 6, name: "Терапия" },
        ]);
        setJobTitles([
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
      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Размер файла должен быть меньше 5MB");
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Пожалуйста, выберите изображение");
        return;
      }

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

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.department ||
      !formData.jobTitle ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Пожалуйста, введите корректный email адрес");
      return;
    }

    setIsLoading(true);

    try {
      // For file upload, we'll need to handle it differently
      // First, create the doctor without photo
      const doctorData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        department: parseInt(formData.department),
        job_title: formData.jobTitle,
        phone_number: formData.phone,
        email: formData.email,
      };

      console.log("Submitting doctor data:", doctorData);

      // Post to the correct doctor_create endpoint
      const response = await axios.post(
        `${API_BASE_URL}/doctor_create/`,
        doctorData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // You may need to add CSRF token here if required
            // "X-CSRFTOKEN": "your-csrf-token-here",
          },
          timeout: 10000, // 10 second timeout
        }
      );

      console.log("Doctor added successfully:", response.data);

      // If there's a photo, upload it separately (you may need another endpoint for this)
      if (formData.photo && response.data.id) {
        try {
          const photoFormData = new FormData();
          photoFormData.append("image", formData.photo);

          await axios.patch(
            `${API_BASE_URL}/doctor/${response.data.id}/`,
            photoFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("Photo uploaded successfully");
        } catch (photoError) {
          console.warn("Failed to upload photo:", photoError);
          alert(
            "Врач добавлен, но фото не загружено. Попробуйте загрузить фото позже."
          );
        }
      }

      alert("Врач успешно добавлен!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        photo: null,
        department: "",
        jobTitle: "",
        phone: "",
        email: "",
      });
      setPhotoPreview(null);

      // Reset file input
      const fileInput = document.getElementById(
        "photo-upload"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Error adding doctor:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          alert("Превышено время ожидания. Проверьте интернет соединение.");
        } else if (error.response?.status === 400) {
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
        } else if (error.response?.status === 401) {
          alert("Ошибка авторизации. Проверьте права доступа.");
        } else if (error.response?.status === 403) {
          alert("Доступ запрещен. Недостаточно прав.");
        } else if (error.response?.status === 404) {
          alert("Эндпоинт не найден. Проверьте URL API.");
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
    return <div className={styles.loadingContainer}>Загрузка опций...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Добавление врача</h1>

        <div className={styles.form}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Имя *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Айтенир"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Фамилия *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Асанов"
              className={styles.input}
              required
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
            <button className={style.submit} type="submit">Добавить врача</button>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Отделение *</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Выберите отделение</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Должность *</label>
            <select
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Выберите должность</option>
              {jobTitles.map((job) => (
                <option key={job.id} value={job.name}>
                  {job.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Контакты *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0550 941 433"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Эл почта *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="asanovaitenir@gmail.com"
              className={styles.input}
              required
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
