export const metadata = {
  title: "About",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children} &copy; NextJS!</div>;
}
