import axios from "axios";

const SUPABASE_URL = "https://ezssmfggzsrykfjiotsr.supabase.co"; // just the base URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6c3NtZmdnenNyeWtmamlvdHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNzI0MTIsImV4cCI6MjA3Mjc0ODQxMn0._MQoLHhQ7aQsmM-thwG-h4F9lNCXS87_tAldWMuPDqU";

export async function loginWithAxios(id_member: string, password_member: string) {
   try {
      const response = await axios.post(
         `${SUPABASE_URL}/functions/v1/dashboard-team-project-api-login-member`,
         { id_member, password_member },
         {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
         }
      );

      return response.data;
   } catch (err: any) {
      if (err.response) {
         return { error: err.response.data, status: err.response.status };
      } else {
         return { error: err.message, status: 500 };
      }
   }
}
