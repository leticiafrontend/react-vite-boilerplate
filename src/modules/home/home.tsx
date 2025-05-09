import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from '@stores'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
})

type FormData = z.infer<typeof formSchema>

export const Home = () => {
  const bears = useStore((state) => state.bears)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen gap-8 bg-zinc-900 px-5 py-10">
      <h1 className="text-4xl font-bold text-white">
        Vite + React + TS + TailwindCSS
      </h1>
      <p className="text-2xl text-white text-center max-w-[600px]">
        A boilerplate for React + Vite + TypeScript + TailwindCSS + ESLint +
        Prettier + Husky + Lint Staged + Commitlint + React Router DOM + Zustand
        + Framer Motion + React Query + React Hook Form + Zod
      </p>
      <p className="text-xl text-white">By Letícia Alexandre</p>

      <p className="text-2xl text-white">{bears}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => useStore.setState({ bears: bears + 1 })}
      >
        Add
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="block text-white">
            Nome
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-blue-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
