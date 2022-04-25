export default async function sendEmail(req, res) {
  try {
    console.log(req.body);
    console.log(process.env.AUTHOR);
    console.log(process.env.kaka);
  } catch (err) {}
}
