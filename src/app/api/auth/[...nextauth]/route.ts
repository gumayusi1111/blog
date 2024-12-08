import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const adminEmails = ['zhaojunxi222@gmail.com']; // 设置管理员邮箱

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',  // 自定义登录页面
    error: '/login',   // 错误页面
  },
  callbacks: {
    async signIn({ user }) {
      return adminEmails.includes(user.email!);
    },
    async session({ session }) {
      if (session.user?.email) {
        session.user.isAdmin = adminEmails.includes(session.user.email);
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 