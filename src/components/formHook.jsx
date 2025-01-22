import { useContext } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../context/context";

export default function FormHook() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setFormData } = useContext(FormContext);

    const onSubmit = (data) => {
        setFormData(data);
        console.log(data);
    };

    return (
        <>
            <form className="dark:bg-black" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                {errors.name && <span>Name is required</span>}

                <input
                className="ml-7"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />
                {errors.email && <span>Email is required</span>}

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
