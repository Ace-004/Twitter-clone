import Landing from "@/src/components/Landing";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { MainLayout } from "../components/layout/MainLayout";


export default function Home() {
  // const {user} = useAuth();
  return (
    <AuthProvider>
      <MainLayout>
        {" "}
        <Landing />
      </MainLayout>
      
    </AuthProvider>
  );
}
