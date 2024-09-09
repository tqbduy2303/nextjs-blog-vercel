"use client"
import {signIn } from 'next-auth/react';
import { useState } from 'react';
import Button from "@/components/button";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const t = useTranslations('Login');
  console.log(session !== null);
  if(session !  == null){
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="w-full max-w-md p-8 space-y-8 bg-primary border border-solid border-primary rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-white">{t('title')}</h2>
          <div className="space-y-6" >
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                {t('username')}
              </label>
              <input
                id="username"
                name="username"
                type="username"
                placeholder='admin'
                required
                className="w-full px-3 py-2 mt-1 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                {t('passwords')}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder='admin'
                required
                className="w-full px-3 py-2 mt-1 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className='w-full'>
              <Button
                onClick={() => signIn("credentials", { username, password })}
                text={t('signin')}
                // className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              </Button>
            </div>
            <div className='flex '>
              <div className="mx-auto">
                  <Button
                  onClick={() =>
                    signIn("github")
                  }
                  text={"Github"}
                  //className="w-1/2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    redirect('/');
  }
}

