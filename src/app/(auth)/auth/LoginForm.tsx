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
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().min(1, { message: 'Нэвтрэх нэр оруулна уу' }),
  password: z.string().min(1, { message: 'Нууц үг оруулна уу' }),
});

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // setLoading(true);
    // try {
    //   const response = await fetch('http://localhost:4000/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: data.email, password: data.password }),
    //   });

    //   if (!response.ok) {
    //     const error = await response.json();
    //     alert(error.message || 'Нэвтрэхэд амжилтгүй боллоо.');
    //     return;
    //   }

    //   const result = await response.json();
    //   const userData = { token: result.token, username: result.username || data.email, role: 'admin' };
    //   await localStorage.setItem('user', JSON.stringify(userData));
    //   await login(userData);
    //   router.push('/admin');
    // } catch (error) {
    //   console.error('Login error:', error);
      alert('Системийн админд хандана уу.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 p-4">
      <Card className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-md md:max-w-2xl">
        {/* LEFT PANEL */}
        <CardHeader className="bg-[#054b13] text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 md:p-10">
          <Image src="/agro_logo.jpg" width={200} height={200} alt="logo" className="object-contain" />
        </CardHeader>

        {/* RIGHT PANEL */}
        <CardContent className="w-full md:w-2/3 p-6 md:p-10 bg-white">
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-[#054b13] mb-6">
            Удирдлагын системд нэвтрэх
          </CardTitle>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 text-base md:text-lg">Нэвтрэх нэр</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Нэвтрэх нэр" />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-950 text-base md:text-lg">Нууц үг</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="Нууц үг" />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#d49943] to-[#edad45] hover:opacity-90 transition-all duration-200 text-white py-2 text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Нэвтэрч байна...
                  </div>
                ) : 'Нэвтрэх'}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm md:text-base">
            <CardDescription className="text-green-950">
              Системд нэвтрэх эрх үүсгэх бол{' '}
              <Link href="/register" className="underline font-medium text-green-900">
                Бүртгүүлэх
              </Link>
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
