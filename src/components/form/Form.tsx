import { useFormik } from 'formik';

export default function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6">Cadastro Bolsa Picanha 
        <span className='text-red-600 font-extrabold size-10 p-1'>L</span></h1>
      <form className="w-full max-w-md flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg mb-2"> Nome</label>
          <input
          required
          placeholder='Faz o L'
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg mb-2">Sobrenome</label>
          <input
          placeholder='Já fez o L hoje?'
          required
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
          placeholder='Seu email no dia menos petista'
          required
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
