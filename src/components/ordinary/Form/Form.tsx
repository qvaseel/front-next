import Image from "next/image";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import React, { useState } from "react";
import "./Form.css";
import clip from "/public/images/svg/clip.svg";
import axios from "axios";

interface IForm {
  name: string;
  phone: string;
  email: string;
  other: string;
  file: File | null;
}

const Form = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [inpValue, setInpValue] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState({
    message: '',
    error: false,
});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    } else {
      setFileName(null);
      setFile(null);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setFile(null);
  };

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setInpValue(newValue);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const validatePhone = (value: string) => {
    const regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return regex.test(value) || "Введите корректный номер телефона";
  };

  const onSubmit = async (data: any) => {
    
    data.file = file;
    // console.log(data)
    try {
      await axios.post('http://localhost:3002/submit-form', data, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      console.log(data)
      setIsLoaded({error: true, message: "Ваша заявка успешно отправлена."})
  } catch (error) {
      console.error(error);
      setIsLoaded({error: true, message: "При отправке формы произошла ошибка."})
  }
    reset();
    setInpValue("");
    setFileName(null);
    setFile(null);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[613px] p-9 max-md:p-2 flex flex-col border gap-5 bg-white max-sm:gap-3 rounded-xl max-[1050px]:w-[450px] max-md:w-auto"
    >
      <p className="text-base max-sm:text-sm text-[#4D4D4D] bg-[#F9F9F9] border-[#F0F0F0] py-3 px-4 rounded-xl">
        Свяжитесь с нами и получите расчет стоимости проекта в течении суток.
      </p>
      <input
        className={errors.name ? "input errors" : "input"}
        type="text"
        placeholder="Ваше имя"
        {...register("name", { required: true })}
      />
      <InputMask
        mask="+7 (999) 999-99-99"
        maskChar="_"
        placeholder="+7 (___) ___-__-__"
        className={errors.phone ? "input errors" : "input"}
        {...register("phone", { required: true, validate: validatePhone })}
        value={inpValue}
        type="tel"
        onChange={handlePhoneChange}
      />
      <input
        className={errors.email ? "input errors" : "input"}
        type="email"
        placeholder="E-mail"
        {...register("email", { required: true })}
      />
      <textarea
        className={errors.other ? "textarea errors" : "textarea"}
        placeholder="О проекте"
        {...register("other", { required: true })}
      />

      <div className="file-input-container">
        <label
          className="file-input-label flex gap-[6px] items-center"
          htmlFor="file-upload"
        >
          <Image src={clip} alt="attach file" />
          Прикрепить файл
        </label>
        <input
          id="file-upload"
          type="file"
          {...register("file")}
          className="file-input"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
      </div>
      {fileName && (
        <div>
          {fileName}
          <button
            type="button"
            onClick={handleRemoveFile}
            className="close_button"
          >
            &#10006;
          </button>
        </div>
      )}
      <div className="form-button w-fit overflow-hidden">
        <input
          className="w-[145px] px-8 py-3 text-[17px] font-medium text-white bg-[#624AFF] rounded-full cursor-pointer overflow-hidden"
          type="submit"
          value="Написать"
        />
      </div>
      {isLoaded.error && <p className="text-base max-sm:text-sm text-[#4D4D4D]">{isLoaded.message}</p>}
    </form>
  );
};

export default Form;
