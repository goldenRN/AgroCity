'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import Image from 'next/image';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Нэр оруулна уу' }),
  email: z.string().min(1, { message: 'Имэйл оруулна уу' }),
  phone: z.string().min(1, { message: 'Утас оруулна уу' }),
  password: z.string().min(1, { message: 'Нууц үг оруулна уу' }),
  passwordAgain: z.string().min(1, { message: 'Нууц үг давтаж оруулна уу' }),
});

const RegisterForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordAgain: ''
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    if (data.password == data.passwordAgain) {
      setLoading(true);
      // POST http://localhost:4000/api/auth/register
      // Content-Type: application/json

      // {
      //     "name":"aagii",
      //     "email":"golden1127a@gmail.com",
      //     "phone":"99405115",
      //     "password":"user"
      // }
      try {
        const response = await fetch('http://localhost:4000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            passwordAgain: data.passwordAgain,
          }),
        });

        if (!response.ok) {

          const error = await response.json();
          alert(error.message || 'Бүртгэл амжилтгүй боллоо.');
          return;
        }

        const result = await response.json();
        const userData = {
          token: result.token,
          username: result.username || data.email,
          role: 'admin',
        };
        await localStorage.setItem('user', JSON.stringify(userData));
        await login(userData);
        router.push('/admin');
      } catch (error) {
        console.error('Login error:', error);
        alert('Системийн алдаа гарлаа.');
      } finally {
        setLoading(false);
      }
    }
    else {
      alert('Нууц үг болон давтаж хийсэн нууц үгнүүд ижил биш байна.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <Card className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden md:w-3/4 lg:w-2/4">
        {/* LEFT PANEL */}
        <CardHeader className="bg-[#054b13] text-white flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="flex flex-col items-center">
            <Image src="/agro_logo.jpg" width={250} height={250} alt="logo" />
          </div>
          {/* <CardDescription className="text-gray-200 mt-2 text-sm text-center">
            Системд нэвтрэх эрхээрээ орно уу
          </CardDescription> */}
        </CardHeader>

        {/* RIGHT PANEL */}
        <CardContent className="w-full md:w-2/3 p-10 bg-white">
          <CardTitle className="text-2xl font-bold text-center text-[#054b13]">
            {/* <CardTitle className="text-center text-lg mt-5 font-semibold"> */}
            Системд бүртгүүлэх
            {/* </CardTitle> */}
          </CardTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8 pt-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950">
                      Нэр
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Нэвтрэх нэр"
                        {...field}
                        className="border-lime-700 focus-visible:ring-lime-700"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 ">
                      Имэйл хаяг
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Нэвтрэх нэр"
                        {...field}
                        className="border-lime-700 focus-visible:ring-lime-700"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 ">
                      Утасны дугаар
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Утасны дугаар"
                        {...field}
                        className="border-lime-700 focus-visible:ring-lime-700"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 ">
                      Нууц үг
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Нууц үг"
                        {...field}
                         className="border-lime-700 focus-visible:ring-lime-700"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordAgain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 font-medium">
                      Нууц үг давтах
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Нууц үг давтах"
                        {...field}
                        className="border-lime-700 focus-visible:ring-lime-700"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#d49943] to-[#edad45] hover:opacity-90 transition-all duration-200 text-white font-semibold py-2"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Бүртгэж байна...
                  </div>
                ) : (
                  'Бүртгүүлэх'
                )}
              </Button>
            </form>
          </Form>
          <div className='md:flex-row text-center pt-5'>
            <CardDescription className="text-green-950 mt-2 text-sm text-center" style={{ fontFamily: 'RobotoBold' }}>
              Системд нэвтрэх эрх үүссэн бол
            </CardDescription>
            <a href='/auth'>
              {/* <Link href={item.url}> */}
              {/* <item.icon /> */}
              <span className='text-lime-700' style={{ fontFamily: 'RobotoRegular' }}>Нэвтрэх</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div >
  );
};

export default RegisterForm;
