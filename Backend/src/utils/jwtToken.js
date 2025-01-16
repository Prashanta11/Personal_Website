export const generateToken = (user, message, statuscode, res, req = null) => {
  const token = user.generateJsonWebToken();
  //   const domain = req?.headers?.host?.split(":")?.[0];
  res
    .status(statuscode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      path: "/",
      sameSite: "None", // Set SameSite attribute to "Strict", "Lax", or "None"
      secure: process.env.NODE_ENV === "production", // Set secure flag if in production,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
