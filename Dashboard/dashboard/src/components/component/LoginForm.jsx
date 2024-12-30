import Login from "../components/Login";

function LoginForm() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-2/4 max-w-sm md:max-w-md">
        <Login />
      </div>
    </div>
  );
}

export default LoginForm;