export default (err, req, res, next) => {
  console.log(err);

  if (err === "ValidationError") {
    return res.status(400).json({ errormessage: err.message });
  }

  return res
    .status(500)
    .json({ errormessage: "서버에서 에러가 발생했습니다." });
};
