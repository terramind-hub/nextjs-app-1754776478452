'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = useCallback(async (provider?: string) => {
    try {
      const result = await signIn(provider || 'credentials', {
        redirect: false,
      });
      
      if (result?.ok) {
        router.push('/');
      }
      
      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      await signOut({ redirect: false });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }, [router]);

  const register = useCallback(async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }

      const result = await response.json();
      
      // Auto-login after successful registration
      if (result.success) {
        await signIn('credentials', {
          email: userData.email,
          password: userData.password,
          redirect: false,
        });
        router.push('/');
      }

      return result;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }, [router]);

  return {
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    isLoading: status === 'loading',
    login,
    logout,
    register,
    session,
  };
}