import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY as string

//Nhớ tạo file .env và bỏ 2 biến môi trường bên dưới vào.
//NUXT_PUBLIC_SUPABASE_URL=https://qrvsthghglfwjsygyvom.supabase.co
//NUXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydnN0aGdoZ2xmd2pzeWd5dm9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNDg2NjQsImV4cCI6MjA3MDYyNDY2NH0.Mix4vaOtMaWXaA5xIiksYH0tPZVMKJ4vWMlU_FmwyJk


export default defineNuxtPlugin(() => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  })
  return {
    provide: {
      supabase
    }
  }
})