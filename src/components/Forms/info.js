import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const Info = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "info",
  });

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input
            placeholder="Adicione mais informações aqui"
            className={"info" + index}
            {...register(`info[${index}].typeInfo`, { required: true })}
          />
          <p>{errors.info?.[index]?.typeInfo && "Preencha essa informação"}</p>
          <button
            onClick={() => remove(index)}
      
            className={"button-delete" + index}
          >
            Deletar
          </button>
        </div>
      ))}

      <button
        onClick={() => append({ typeInfo: "" })}
        className="button-line-new"
      >
        Adicionar novo campo
      </button>
    </div>
  );
};

export default Info;
