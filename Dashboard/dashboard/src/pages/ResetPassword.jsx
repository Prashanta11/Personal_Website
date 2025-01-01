import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/store/slices/forgotResetPasswordSlice";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
const ResetPassword = () => {
  const{token}=useParams()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleResetPassword = (email) => {
    dispatch(resetPassword(token,password,confirmPassword));
  };

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearAllResetPasswordErrors());
      }
      if (isAuthenticated) {
        navigateTo("/");
      }
      if (message !== null) {
        toast.success(message);
      }
    }, [dispatch, isAuthenticated, error, message,loading]);
  

  return (
    <>
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className=" min-h-[100vh] flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-balance text-muted-foreground">
          Set a New password
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Password</Label>
              <Input
                id="password"
                type="password"
    
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Link
                  to="/login"
                  className="ml-auto inline-block text-sm underline"
                >
                  Remember your password?
                </Link>
              </div>
            </div>
            {!loading ? (
              <Button
                onClick={() => handleResetPassword(email)}
                className="w-full"
              >
                Reset Password
              </Button>
            ) : (
              <SpecialLoadingButton content={"Requesting"} />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-muted">
        <img src="/forgot.png" alt="login" />
      </div>
    </div>
    </>
  )
}

export default ResetPassword;