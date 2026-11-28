function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/50 p-6">
      {children}
    </main>
  )
}

export default AuthLayout
