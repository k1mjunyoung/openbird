import GlobalLoader from "@/components/globar-loader";
import GlobalLoader9 from "@/components/globar-loader";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import supabase from "@/lib/supabase";
import { useIsSessionLoaded, useSession, useSetSession } from "@/store/session";
import { useEffect } from "react";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  const { data: profile, isLoading: isProfileLoading } = useProfileData(
    session?.user.id,
  );

  // useEffect: 로그인 상태 변화 감지
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session); // 세션 상태 업데이트
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  if (isProfileLoading) return <GlobalLoader />;

  return children; // 세션이 로드된 후 자식 컴포넌트 렌더링
}
