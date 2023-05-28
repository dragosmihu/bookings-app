import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      textAlign: "center",
    }}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Detalii facturare</h1>

      <label>Nume</label>

      <input type="Nume" {...register("nume", { required: true })} />
      {errors.nume && <p>Is required</p>}

      <p></p>

      <label>Adresa</label>
      <input type="Adresa" {...register("adresa", { required: true })} />
      {errors.adresa && <p>Is required</p>}

      <p></p>
      
      <label>Oras</label>
      <input type="Orasul" {...register("oras", { required: true })} />
      {errors.oras && <p>Is required</p>}

      <p></p>

      <label>Judet</label>
      <input type="Judetul" {...register("judet", { required: true })} />
      {errors.judet && <p>Is required</p>}

      <p></p>

      <label>Telefon</label>
      <input type="" {...register("telefon", { required: true })} />
      {errors.telefon && <p>Is required</p>}

      <p>Total:</p>

      <button type="submit">Plateste</button>
    </form>
    </div>
  );
}

export default LoginForm;