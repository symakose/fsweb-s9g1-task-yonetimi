import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export default function TaskHookForm({ kisiler, submitFn, formSemasi }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ validationSchema: formSemasi });
  const onSubmit = (data) => {
    submitFn({
      ...data,
      id: nanoid(5),
      status: "yapılacak",
    });
  };
  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          {...register("title")}
        />
        <p className="input-error">{errors.title?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
          {...register("description")}
        ></textarea>
        <p className="input-error">{errors.description?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
                {...register("people")}
              />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{errors.people?.message}</p>
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit">
          Kaydet
        </button>
      </div>
    </form>
  );
}
